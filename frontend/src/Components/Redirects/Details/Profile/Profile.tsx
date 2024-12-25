import GetLoginData from "@/utils/Hooks/GetLoginData";

const Profile = () => {
  const { loginData } = GetLoginData();

  return (
    <div>
      <h3>Welcome back {loginData.userName}</h3>
      <span>{loginData.role}</span>
    </div>
  );
};

export default Profile;
