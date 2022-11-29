import { AuthLayout } from "../../components";

const Support = () => {
  return (
    <>
      <h1> Support </h1>
    </>
  );
}

Support.getLayout = (support) => {
  return(
    <AuthLayout> {support} </AuthLayout>
  )
}
 
export default Support;