import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import RegisterNewUser from "@/features/auth/api/actions/RegisterNewUser";
import { RegisterType } from "@/features/auth/schemas/RegistrationSchema";

type RegisterUserProps = {
  data: RegisterType;
  router: AppRouterInstance;
};

const handleRegistration = async ({ data, router }: RegisterUserProps) => {
  const response = await RegisterNewUser(data);
  if (response.success) {
    router.push("/login");
  }
};

export default handleRegistration;
