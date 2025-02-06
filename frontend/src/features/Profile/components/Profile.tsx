"use client";

import handleUserLogout from "@/features/Profile/utils/handleUserLogout";

import { AppDispatch } from "@/Store/store";

import Button from "@/Components/UI/Button";
import Card from "@/Components/UI/Card";
import UserInfo from "@/features/Profile/components/UserInfo";

import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

const Profile = () => {
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();

  return (
    <div className="h-[50vh] flex justify-center items-center">
      <Card>
        <UserInfo />
        <Button
          className="bg-background text-primaryText"
          onClick={() => handleUserLogout({ router, dispatch })}
        >
          Logout
        </Button>
      </Card>
    </div>
  );
};

export default Profile;
