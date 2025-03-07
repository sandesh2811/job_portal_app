import RegisterContainer from "@/features/auth/components/Register/RegisterContainer";
import MainContainer from "@/Components/MainContainer";

const Register = () => {
  return (
    <MainContainer className="my-2 min-h-[80vh] items-center justify-center mid:my-16">
      <RegisterContainer />
    </MainContainer>
  );
};

export default Register;
