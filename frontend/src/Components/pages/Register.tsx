import RegisterContainer from "@/features/auth/components/Register/RegisterContainer";

const Register = () => {
  return (
    <div className="h-[80vh] flex flex-col justify-center items-center px-4 midLg:max-w-[850px] xl:max-w-[1050px] mx-auto tracking-wide">
      <RegisterContainer />
    </div>
  );
};

export default Register;
