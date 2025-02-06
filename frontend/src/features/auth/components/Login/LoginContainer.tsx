import FormHeader from "@/features/auth/components/FormHeader";
import FormBody from "@/features/auth/components/Login/FormBody";
import FormFooter from "@/features/auth/components/FormFooter";

const LoginContainer = () => {
  return (
    <div className="w-full min-h-[50vh] p-3 flex flex-col justify-evenly gap-3 border-2 border-secondaryText mid:w-[550px] mid:p-8 rounded-md">
      {/* Headings */}
      <FormHeader
        heading="Log into your account"
        subHeading="  Enter your username and password to login to your account"
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
