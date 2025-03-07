import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";

type HandleJobDeletionType = {
  jobId: string;
  router: AppRouterInstance;
  mutateAsync: (id: string) => Promise<BaseReturnType>;
};

const handleJobDeletion = async ({
  jobId,
  router,
  mutateAsync,
}: HandleJobDeletionType) => {
  try {
    const response = await mutateAsync(jobId);

    if (!response.success) {
      toast.error(response.message);
      return;
    }
    toast.success(response.message);
    const routeTimerId = setTimeout(() => {
      router.back();
      clearTimeout(routeTimerId);
    }, 5000);
  } catch (error) {
    throw new Error("Error deleting job!");
  }
};

export default handleJobDeletion;
