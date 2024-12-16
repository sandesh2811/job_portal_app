import Input from "@/Components/UI/Input";
import Button from "@/Components/UI/Button";

const Form = () => {
  return (
    <form className="flex flex-col gap-4 bg-primaryText text-background w-[500px] h-[60vh] p-4 font-Epilogue">
      <div>
        {/* Headings */}
        <div>
          <h1 className="text-xl  leading-5 mid:text-2xl">
            Log into your account
          </h1>
          <span className="text-sm leading-5 text-secondaryText">
            Enter your username and password to login to your account
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span>Username</span>
        <Input
          inputBoxSize="sm"
          className="text-primaryText"
          type="text"
          name="username"
          placeholder="eg: Ram"
        />
      </div>
      <div className="flex flex-col gap-2">
        <span>Password</span>
        <Input
          inputBoxSize="sm"
          className="text-primaryText"
          type="password"
          name="password"
        />
      </div>
      <Button buttonType="AuthButtons" size="medium">
        Login
      </Button>
    </form>
  );
};

export default Form;
