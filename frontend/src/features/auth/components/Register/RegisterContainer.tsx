import FormHeader from "@/features/auth/components/FormHeader";
import FormFooter from "@/features/auth/components/FormFooter";
import FormBody from "@/features/auth/components/Register/FormBody";

const RegisterContainer = () => {
  return (
    <div className="w-full min-h-[50vh] p-3 flex flex-col justify-evenly gap-3 border-2 border-secondaryText mid:w-[550px] mid:p-8 rounded-md">
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
