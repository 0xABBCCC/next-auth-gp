# NextJS x NextAuth integration (Github Provider)
Simple NextJS x NextAuth demo application

## Setup
1. Create a `.env.local` file
    GITHUB_ID and GITHUB_SECRET can be found by creating a new app in the Github Dev Page.

    ```bash
    GITHUB_ID=
    GITHUB_SECRET=
    NEXTAUTH_URL=http://localhost:3000
    NEXTAUTH_SECRET=
    ```

    You can add your own secret but this is how I do it (Required for Production)
    ```bash
    openssl rand -base64 32
    ```

2. Install Dependencies

    ```bash
    npm install
    ```

3. Run Dev

    ```bash
    npm run dev
    ```


