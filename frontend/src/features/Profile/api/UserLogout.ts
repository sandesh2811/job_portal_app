const Logout = async () => {
  const response = await fetch("/api/auth/logout", {
    method: "GET",
    credentials: "include",
  });

  const responseData = await response.json();

  return responseData;
};

export default Logout;
