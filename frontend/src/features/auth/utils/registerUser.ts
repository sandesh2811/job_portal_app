import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import RegisterNewUser from "@/features/auth/api/RegisterNewUser";
import { RegisterType } from "@/features/auth/schemas/RegistrationSchema";
import toast from "react-hot-toast";

type RegisterUserProps = {
  data: RegisterType;
  router: AppRouterInstance;
};

const handleRegistration = async ({ data, router }: RegisterUserProps) => {
  const response = await RegisterNewUser(data);

  if (response.success) {
    router.push("/login");
  } else {
    toast.error(response.message);
  }
};

export default handleRegistration;
