import Form from '@/components/form';
import PageContainer from '@/components/pageContainer';
import Head from 'next/head';

export default function Signup() {
  return (
    <div> 
      <Head>
        <title>
          Sign Up
        </title>
      </Head>
      <PageContainer>
        <Form formType='signUp' />
      </PageContainer>
    </div>
  );
}
