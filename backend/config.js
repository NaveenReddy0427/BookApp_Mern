import { configDotenv } from "dotenv";

configDotenv();

export const PORT = process.env.PORT || 5555;
export const mongoDBURL = process.env.MONGODB_URL;
