import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google' //OAuth
import GitHubProvider from "next-auth/providers/github";

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
          })
    ],
    //this will overwrite my callbackUrl in login page.tsx
    // callbacks: {
    //     async redirect({ url, baseUrl}){
    //         return baseUrl;
    //     }
    // }
})

export {handler as GET, handler as POST};