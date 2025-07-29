"use server";

const localhost = "127.0.0.1:3000";
const production = "https://emotifyai.vercel.app";

const isProduction = process.env.NODE_ENV === "production";
const baseUrl = isProduction ? production : localhost;

export const config = {
  baseUrl,
};
