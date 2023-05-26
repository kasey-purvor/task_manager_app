import Form from "@/components/form";
import PageContainer from "@/components/pageContainer";

export async function getServerSideProps() {
  return {
    props: {},
  };
}
export default function Signin() {
  return (
    <PageContainer>
      <Form formType="signIn" />
    </PageContainer>
  );
}
