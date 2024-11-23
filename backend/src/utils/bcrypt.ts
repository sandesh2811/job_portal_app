import bcrypt from "bcryptjs";

export const hashedPassword = async (
  password: string,
  saltRounds: number
): Promise<string> => {
  return await bcrypt.hash(password, saltRounds);
};

export const comparePasswords = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  return await bcrypt.compare(password, hashedPassword);
};
