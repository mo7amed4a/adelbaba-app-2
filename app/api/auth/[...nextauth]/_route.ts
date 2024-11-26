import AxiosApp from '@/lib/axios';
import { jwtDecode } from 'jwt-decode';
import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET_KEY,
  providers: [
    CredentialsProvider({
      id: 'login',
      name: 'login',
      credentials: {
        email: { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter Email' },
        password: { name: 'password', label: 'Password', type: 'password', placeholder: 'Enter Password' }
      },
      async authorize(credentials) {
        try {
          const dataLogin = {
            username_or_email: credentials?.email,
            password: credentials?.password
          };
          const user = await AxiosApp.post('/auth/login/', dataLogin);

          if (user) {
            user.data.user['accessToken'] = user.data?.accessToken;
            user.data.user['refreshToken'] = user.data?.refreshToken;
            return user.data.user;
          }
        } catch (e: any) {
          const errorMessage = e?.message || e?.response?.data?.message || 'Something went wrong!';
          throw new Error(errorMessage);
        }
      }
    }),
    CredentialsProvider({
      id: 'register',
      name: 'Register',
      credentials: {
        username: { name: 'username', label: 'Username', type: 'text', placeholder: 'Enter Company' },
        first_name: { name: 'firs_tname', label: 'Firstname', type: 'text', placeholder: 'Enter Firstname' },
        last_name: { name: 'last_name', label: 'Lastname', type: 'text', placeholder: 'Enter Lastname' },
        email: { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter Email' },
        password: { name: 'password', label: 'Password', type: 'password', placeholder: 'Enter Password' },
        password2: { name: 'password2', label: 'Password', type: 'password', placeholder: 'Enter Password' }
      },
      async authorize(credentials) {
        try {
          const user = (await AxiosApp.post('/auth/register/', {
            first_name: credentials?.first_name,
            last_name: credentials?.last_name,
            username: credentials?.username,
            password: credentials?.password,
            password2: credentials?.password2,
            email: credentials?.email
          })) as any;

          if (user) {
            user.data.user['accessToken'] = user.data?.accessToken;
            user.data.user['refreshToken'] = user.data?.refreshToken;
            user.data.user['tokenExpiry'] = user.data?.tokenExpiry;
            return user.data.user;
          }
        } catch (e: any) {
          console.log(e);
          const errorMessage = e?.message || e?.response?.data?.message || 'Something went wrong!';
          throw new Error(errorMessage);
        }
      }
    })
  ],
  callbacks: {
    jwt: async ({ token, user, account }) => {
      if (user) {
        token.user = user;
        token.id = user.id;
        // // @ts-ignore
        // token.accessToken = user.accessToken;
        // // @ts-ignore
        // token.refreshToken = user.refreshToken;
        // // @ts-ignore
        // token.tokenExpiry = user.tokenExpiry;
      }

      // if (token.accessToken && token.tokenExpiry && token.user) {
      if (token.user) {
        //  @ts-ignore
        const tokenDecoded = jwtDecode(token?.user?.accessToken) as { exp: number };
        token.tokenExpiry = tokenDecoded?.exp * 1000;
        //  @ts-ignore
        if (Date.now() < token.tokenExpiry) {
          
          return token;
        }
        try {
          //  @ts-ignore
          const response = await AxiosApp.post('/auth/token/refresh/', { refresh: token.user.refreshToken });
          //  @ts-ignore
          token.user.accessToken = response.data.access
          //  @ts-ignore
          token.user.refreshToken = response.data.refresh
        } catch (error) {
          // console.error('Error refreshing token', error);
          throw new Error('Refresh token expired or invalid');
        }
      }
      return token;
    },

    session: ({ session, token }) => {
      if (token) {
        // @ts-ignore
        session.id = token.id;
        // @ts-ignore
        session.user = { ...token.user };
        // @ts-ignore
        session.accessToken = token.accessToken;
        // @ts-ignore
        session.provider = token.provider;
      }
      return session;
    }
  },
  session: {
    strategy: 'jwt',
    maxAge: Number(process.env.NEXT_APP_JWT_TIMEOUT!)
  },
  jwt: {
    secret: process.env.NEXT_APP_JWT_SECRET
  },
  pages: {
    signIn: '/login',
    newUser: '/register',
    // @ts-ignore
    refresh: 'refresh'
  }
};
