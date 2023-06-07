import Form from '@/components/form';
import PageContainer from '@/components/pageContainer';
import Head from 'next/head';

export default function Signin() {
  return (
    <div>
      <Head>
        <title>
          Sign In 
        </title>
      </Head>
      <PageContainer>
        <Form formType='signIn' />
      </PageContainer>
    </div>
  );
}
