import Head from "next/head";
import PageContainer from "@/components/pageContainer";
import Account from "@/components/account";
export default function AccountPage(user) {
    return (
        <div>
            <Head>
                <title>Account</title>
            </Head>
            <PageContainer>
                <Account />
            </PageContainer>
        </div>
    );
}
