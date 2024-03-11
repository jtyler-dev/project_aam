import NextAuth from "next-auth"
import EmailProvider from "next-auth/providers/nodemailer"
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import email from "next-auth/providers/email";

const prisma = new PrismaClient()

export const {
  handlers,
  auth,
  signIn,
  signOut
} = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    // Because we are using the auth in the middleware and nodemailer doesnt work on
    // edge functions, we have to setup email to use http
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  callbacks: {
    session: async ({session, user, trigger, newSession}) => {
      session.user.id = user.id
      session.user.userName = "test_userName"
      return session
    }
  },
  pages: {
    signIn: "/signin",
  },
});
