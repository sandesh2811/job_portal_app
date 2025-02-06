const CheckIdType = (id: unknown) => {
  const userId = typeof id === "string" ? id : "";

  return userId;
};

export default CheckIdType;
