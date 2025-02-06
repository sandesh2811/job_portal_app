import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

// Redirect user to specific route
const RedirectUser = (href: string, router: AppRouterInstance) => {
  router.push(href);
};

export default RedirectUser;
