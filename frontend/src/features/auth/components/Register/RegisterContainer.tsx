import FormHeader from "@/features/auth/components/FormHeader";
import FormFooter from "@/features/auth/components/FormFooter";
import FormBody from "@/features/auth/components/Register/FormBody";

const RegisterContainer = () => {
  return (
    <div className="flex min-h-[400px] w-full flex-col justify-evenly gap-4 rounded-[5px] border-2 border-secondaryText p-4 mid:min-h-[500px] mid:max-w-[680px] mid:gap-9 mid:p-14">
      {/* Headings */}
      <FormHeader
        heading="Register for your account"
        subHeading="Enter your details to register to the platform"
      />

      {/* Form */}
      <FormBody />

      {/* Register redirect */}
      <FormFooter
        heading="Already have an account?"
        text="Login"
        href="/login"
      />
    </div>
  );
};

export default RegisterContainer;
