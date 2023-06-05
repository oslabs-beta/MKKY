import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google' //OAuth
// import GitHubProvider from "next-auth/providers/github";
// import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "../lib/mongodb"
// import { connectToDB } from '../../../utils/database';
// import User from '../../../model/user';

const handler = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            // authorization: {
            //     params: {
            //       prompt: "consent",
            //       access_type: "offline",
            //       response_type: "code"
            //     }
            //   }
        }),
        // GitHubProvider({
        //     clientId: process.env.GITHUB_ID!,
        //     clientSecret: process.env.GITHUB_SECRET!,
        // }),
        // CredentialsProvider({
        //   type: 'credentials',
        //   credentials: {},
        //   authorize(credentials, req) {
        //     const { email, password } = credentials as { 
        //       email: string;
        //       password: string; 
        //     }

        //   }
        // })      //         STILL WORKING ON THIS TO ADD CLIENT BASE ON EMAIL AND PASSWORD WITHOUT OATH  DONT DELETE JUST YET `
    ],
    //when working with handler variable, we need to use callbacks
})
  
  export {handler as GET, handler as POST};
  //this will overwrite my callbackUrl in login page.tsx
  // callbacks: {
  //     async redirect({ url, baseUrl}){
  //         return baseUrl;
  //     }
  // }