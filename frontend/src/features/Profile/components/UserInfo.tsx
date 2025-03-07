import GetLoginData from "@/utils/GetLoginData";

const UserInfo = () => {
  const { loginData } = GetLoginData();
  return (
    <>
      <div className="flex justify-center">
        <span className="block h-[80px] w-[80px] rounded-full bg-background"></span>
      </div>
      <div>
        <h3 className="text-lg">Welcome back {loginData.userName}</h3>
        <span>Role: {loginData.role}</span>
      </div>
    </>
  );
};

export default UserInfo;
