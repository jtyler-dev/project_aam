import NextAuth, { DefaultSession } from "next-auth"

// Currently a workaround to get user id into the session object.
// next14 and next-auth might release a fix for this in the future.
// but for now, just add the user id to the session object.
// TODO: revist to try and remove name / email from this?
declare module "next-auth" {
  interface Session {
    user: {
      id: string
      userName: string | null
    } & DefaultSession["user"]
  }
}