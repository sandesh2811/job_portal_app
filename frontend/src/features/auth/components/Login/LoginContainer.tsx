import FormHeader from "@/features/auth/components/FormHeader";
import FormBody from "@/features/auth/components/Login/FormBody";
import FormFooter from "@/features/auth/components/FormFooter";

const LoginContainer = () => {
  return (
    <div className="flex min-h-[400px] w-full flex-col justify-evenly gap-4 rounded-[5px] border-2 border-secondaryText p-4 mid:min-h-[500px] mid:max-w-[680px] mid:gap-9 mid:p-14">
      {/* Headings */}
      <FormHeader
        heading="Welcome Back!"
        subHeading="Please enter your username and password to login"
      />

      {/* Form */}
      <FormBody />

      {/* Register redirect */}
      <FormFooter
        heading="Don't have an account?"
        text="Register"
        href="/register"
      />
    </div>
  );
};

export default LoginContainer;
