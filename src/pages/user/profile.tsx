import { AuthLayout } from "../../components";

const Profile = () => {
  return (
    <>
      <h1> Profile </h1>
    </>
  );
}

Profile.getLayout = (profile) => {
  return (
    <AuthLayout>
      { profile }
    </AuthLayout>
  )
}

export default Profile;