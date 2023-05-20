import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google' //OAuth
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
// export default NextAuth({
//     providers: [
//         GoogleProvider({
//             //these inside .env with the correct label
//             clientId: process.env.GOOGLE_ID!,
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET!
//         })
//     ],
// });

const handler = NextAuth({
    providers: [
        GoogleProvider({
            //these inside .env with the correct label
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
  })
  
  export {handler as GET, handler as POST};
  //this will overwrite my callbackUrl in login page.tsx
  // callbacks: {
  //     async redirect({ url, baseUrl}){
  //         return baseUrl;
  //     }
  // }