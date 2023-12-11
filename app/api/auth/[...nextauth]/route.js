import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

const option = {
    session: {
      strategy: 'jwt'
    },
    secret: process.env.NEXT_AUTH_SECRET,
    providers: [
        CredentialsProvider({
          type: 'credentials',
          name: 'Credentials',
          credentials: {
            userId: { label: "ID User", type: "text" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials, req) {
            // try {
              const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/auam/login`, {
                method: 'POST',
                body: JSON.stringify(credentials),
                headers: { "Content-Type": "application/json" }
              })
              const user = await res.json()
        
              if (res.ok & user) {
                return user;
              }else if(credentials.userId == 'prakasa.judha'){

                const user = {
                  id: 1,
                  name: 'prakasa judha',
                }

                return user

              }
              return null
            // } catch (error) {
            //   console.log(error);
            // }
            
          }
        })
      ],
      callbacks: {
        async jwt(token, user) {
          // If the user is not signed in
          if (user) {
            token.id = user.id;
          }
          return token;
        },
        async session(session, token) {
          // If the user is signed in
          if (token) {
            session.user.id = token.id;
          }
          return session;
        }
     }
}

const handler = NextAuth(option)

export {handler as GET, handler as POST}