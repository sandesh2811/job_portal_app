import LoginContainer from "@/features/auth/components/Login/LoginContainer";

const Login = () => {
  return (
    <div className="h-[80vh] flex flex-col justify-center items-center px-4 midLg:max-w-[850px] xl:max-w-[1050px] mx-auto tracking-wide">
      <LoginContainer />
    </div>
  );
};

export default Login;
