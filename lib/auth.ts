import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./db";

console.log("=== AUTH CONFIG ===");
console.log("BETTER_AUTH_URL:", process.env.BETTER_AUTH_URL);
console.log(
  "GOOGLE_CLIENT_ID:",
  process.env.GOOGLE_CLIENT_ID ? "✓ Set" : "✗ Missing",
);
console.log("DATABASE_URL:", process.env.DATABASE_URL ? "✓ Set" : "✗ Missing");
console.log(
  "BETTER_AUTH_SECRET:",
  process.env.BETTER_AUTH_SECRET ? "✓ Set" : "✗ Missing",
);

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL,
  secret: process.env.BETTER_AUTH_SECRET!,
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
  },
  emailAndPassword: {
    enabled: true,
  },
  account: {
    accountLinking: {
      enabled: true,
      trustedProviders: ["google"], // add trusted providers
    },
  },
});
