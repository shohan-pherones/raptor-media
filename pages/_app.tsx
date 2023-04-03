import Layout from "@/components/Layout";
import LoginModal from "@/components/modals/LoginModal";
import RegisterModal from "@/components/modals/RegisterModal";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import EditModal from "@/components/modals/EditModal";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Head>
        <meta name="author" content="Md. Shohanur Rahman" />
        <meta
          name="description"
          content="Join Raptor Media and experience the future of social media with a fast, responsive, and secure platform built with the latest technologies."
        />
        <meta
          name="keywords"
          content="Raptor Media, social media platform, Next.js, Prisma, Tailwind CSS, NextAuth, TypeScript, fast, responsive, secure, modern, user experience."
        />
        <meta name="robots" content="index, follow" />
        <meta name="canonical" content="https://raptor-media.vercel.app" />
        <link
          rel="icon"
          href="https://img.icons8.com/parakeet/48/null/twitter.png"
        />
        <title>
          Raptor Media - The Ultimate Social Media Platform for Sharing Your
          Ideas
        </title>
      </Head>
      <Toaster />
      <RegisterModal />
      <LoginModal />
      <EditModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
