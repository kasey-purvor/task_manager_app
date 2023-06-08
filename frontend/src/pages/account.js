import Head from "next/head";
export default function Account(user) {
    return (
        <div>
            <Head>
                <title>Account</title>
            </Head>
            <h1>Account Page
                {process.env.NEXT_PUBLIC_BACKEND_ADDRESS}
                <br/>
                {process.env.NEXT_PUBLIC_TOKEN_PROD}
                <br/>
                {process.env.NEXT_PUBLIC_TOKEN_DEV}
            </h1>
        </div>
    );
}
