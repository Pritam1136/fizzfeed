import { authOPtions } from "@/lib/auth";
import NextAuth from "next-auth/next";

const handler = NextAuth(authOPtions);

export { handler as GET, handler as POST };
