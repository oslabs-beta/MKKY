import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google' //OAuth
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "../lib/mongodb"


const handler = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
})
  
  export {handler as GET, handler as POST};
