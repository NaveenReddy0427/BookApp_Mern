import { configDotenv } from "dotenv";

configDotenv();

export const PORT = process.env.PORT;
export const mongoDBURL = process.env.MONGODB_URL;
