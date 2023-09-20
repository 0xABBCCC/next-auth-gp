"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

export default function Protected() {
    const { data: session, status } = useSession();

    if (status === "loading") {
        return(
          <div className="page-wrapper">
            <div className="welcome-box">
              <h1 className="welcome-header">LOADING...</h1>
            </div>
          </div>
        )
    }

    if (session) {
        return(
            <div className="page-wrapper">
              <div className="welcome-box">
                <div className="profile-wrapper">
                  <div className="profile-img-wrapper">
                    <Image src={session.user?.image as string} alt="github profile" height={100} width={100}/>
                  </div>
                  <h1 className="welcome-header">Welcome {session.user?.name}!</h1>
                </div>
                <button onClick={() => signOut()} className="btn">Sign Out</button>
              </div>
            </div>
        )
    }

    return (
        <div className="page-wrapper">
          <div className="welcome-box">
            <h1 className="welcome-header">You need to login to access this page :/</h1>
            <button onClick={() => signIn()} className="btn">Sign In</button>
          </div>
        </div>
    )
}