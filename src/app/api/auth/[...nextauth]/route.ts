import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google' //OAuth
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../lib/mongodb";
import { addSyntheticLeadingComment } from "typescript";
// import User from "../../../model/user";
// import { signIn } from "next-auth/react";
// import { connectToDB } from '../../../utils/database';

const handler = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  // session: {
  //   strategy: "jwt"
  // },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            authorization: {
                params: {
                  prompt: "consent",
                  access_type: "offline",
                  response_type: "code"
                }
              }
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
        }),
        // CredentialsProvider({
        //   type: "credentials",
        //   credentials: {
        //     username: {
        //       label: "Email",
        //       type: "text",
        //     },
        //     password:{
        //       label: "Password",
        //       tyle: "password"
        //     },
        //   },
        //   authorize : (credentials) => {
        //     if(credentials.username === "john@gmail.com" && credentials.password === "test"){
        //         return {
        //           id: 2,
        //           name: "John",
        //           email: "johndoe@test.com",
        //         };
        //     }
        //     return null;
        //   },
        // })
    ],
    // callbacks: {
    //   jwt : async ({ token, user}) => {
    //     if (user) {
    //       token.id = user.id;
    //     }
    //     return token;
    //   },
    //   session: ({ session, token}) => {
    //     if(token){
    //       session.id = token.id;
    //     }
    //     return session;
    //   },
    // },
    // secret: "test",
    // jwt: {
    //   secret: "test",
    //   encryption: true,
    // }
})
  
  export {handler as GET, handler as POST};