"use client";

import Input from "@/Components/UI/Input";
import Button from "@/Components/UI/Button";

const loginUser = async () => {
  const res = await fetch("http://localhost:5000/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: "iamichigo",
      password: "iamichigo",
    }),
  });
  console.log(res);
};

const Form = () => {
  return (
    <form onSubmit={() => loginUser()} className="flex flex-col gap-4 ">
      <div className="flex flex-col gap-2">
        <span className="font-medium">Username</span>
        <Input type="text" name="username" placeholder="eg: Ram" />
      </div>
      <div className="flex flex-col gap-2">
        <span className="font-medium">Password</span>
        <Input type="password" name="password" />
      </div>
      <Button buttonType="AuthButtons" size="medium">
        Login
      </Button>
    </form>
  );
};

export default Form;
