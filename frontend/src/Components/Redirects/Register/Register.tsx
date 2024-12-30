import Link from "next/link";
import Form from "./Form";

const Register = () => {
  return (
    <div className="h-[80vh] flex flex-col justify-center items-center px-4 midLg:max-w-[850px] xl:max-w-[1050px] mx-auto tracking-wide">
      <div className="w-full min-h-[50vh] p-3 flex flex-col justify-evenly gap-3 border-2 border-secondaryText mid:w-[550px] mid:p-8 rounded-md">
        {/* Headings */}
        <div>
          <div>
            <h3 className="text-xl font-semibold leading-5 mid:text-2xl">
              Register for your account
            </h3>
            <span className="text-sm leading-5 text-secondaryText">
              Enter your username and password to login to your account
            </span>
          </div>
        </div>

        {/* Form */}
        <Form />

        {/* Register redirect */}
        <div className="flex gap-1 items-center justify-center text-secondaryText">
          <span className="text-sm">Already have an account?</span>
          <Link href="/login">
            <span className="text-sm underline underline-offset-3">Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
