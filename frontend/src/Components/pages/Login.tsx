import LoginContainer from "@/features/auth/components/Login/LoginContainer";
import MainContainer from "@/Components/MainContainer";

const Login = () => {
  return (
    <MainContainer className="h-[80vh] items-center justify-center lg:flex-row">
      <LoginContainer />
    </MainContainer>
  );
};

export default Login;
