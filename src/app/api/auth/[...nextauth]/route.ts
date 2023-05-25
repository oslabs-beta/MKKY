import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google' //OAuth
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../lib/mongodb";
// import { addSyntheticLeadingComment } from "typescript";
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
        //   // The name to display on the sign in form (e.g. 'Sign in with...')
        //   name: 'Credentials',
        //   // The credentials is used to generate a suitable form on the sign in page.
        //   // You can specify whatever fields you are expecting to be submitted.
        //   // e.g. domain, username, password, 2FA token, etc.
        //   // You can pass any HTML attribute to the <input> tag through the object.
        // Shows up below the google and github provider in the Auth page
        //   credentials: {
        //     username: { label: "Username", type: "text", placeholder: "jsmith" },
        //     password: { label: "Password", type: "password" }
        //   },
        //   async authorize(credentials, req) {
        //     // You need to provide your own logic here that takes the credentials
        //     // submitted and returns either a object representing a user or value
        //     // that is false/null if the credentials are invalid.
        //     // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        //     // You can also use the `req` object to obtain additional parameters
        //     // (i.e., the request IP address)
        //     const res = await fetch("/", {
        //       method: 'POST',
        //       body: JSON.stringify(credentials),
        //       headers: { "Content-Type": "application/json" }
        //     })
        //     const user = await res.json()
      
        //     // If no error and we have user data, return it
        //     if (res.ok && user) {
        //       return user
        //     }
        //     // Return null if user data could not be retrieved
        //     return null
        //   }
        // })
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