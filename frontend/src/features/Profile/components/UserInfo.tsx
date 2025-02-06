import GetLoginData from "@/utils/GetLoginData";

const UserInfo = () => {
  const { loginData } = GetLoginData();
  return (
    <>
      <div className="flex justify-center">
        <span className="block w-[80px] h-[80px] bg-background rounded-full"></span>
      </div>
      <div>
        <h3 className="text-lg">Welcome back {loginData.userName}</h3>
        <span>Role: {loginData.role}</span>
      </div>
    </>
  );
};

export default UserInfo;
