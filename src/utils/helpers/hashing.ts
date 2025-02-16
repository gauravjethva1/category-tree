import bcrypt from "bcryptjs";

/**
 * Generates the hashed password
 */
const generateHash = async (password: string) => {
  // Number of Rounds to Generate Salt
  const salt = await bcrypt.genSalt(10);

  return await bcrypt.hash(password, salt);
};

/**
 * Compares the original and hashed Password
 */
const comparePassword = async (password: string, hashedPassword: string) => {
  return await bcrypt.compare(password, hashedPassword);
};

export { generateHash, comparePassword };
