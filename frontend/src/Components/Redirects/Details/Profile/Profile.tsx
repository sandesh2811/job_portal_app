"use client";

import GetLoginData from "@/utils/Hooks/GetLoginData";
import { getLoginData } from "@/Store/Features/userLoginState";
import { AppDispatch } from "@/Store/store";

import Button from "@/Components/UI/Button";
import Card from "@/Components/UI/Card";

import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

const Profile = () => {
  const { loginData } = GetLoginData();
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();

  // Logic for removing session from cookies!
  const handleButtonClick = () => {
    dispatch(
      getLoginData({
        userName: "",
        userId: "",
        role: "",
      })
    );
    router.push("/login");
  };

  return (
    <div className="h-[50vh] flex justify-center items-center">
      <Card>
        <div className="flex justify-center">
          <span className="block w-[80px] h-[80px] bg-background rounded-full"></span>
        </div>
        <div>
          <h3 className="text-lg">Welcome back {loginData.userName}</h3>
          <span>Role: {loginData.role}</span>
        </div>
        <Button
          className="bg-background text-primaryText"
          onClick={() => handleButtonClick()}
        >
          Logout
        </Button>
      </Card>
    </div>
  );
};

export default Profile;
