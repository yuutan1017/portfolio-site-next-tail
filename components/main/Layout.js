import React from "react";
import Head from "next/head";

import { Header } from "./Header";
import { Footer } from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col items-center min-h-screen text-gray-600 text-sm font-sans bg-gradient-to-r from-white via-yellow-50 to-teal-200">
      <Head>
        <link rel="icon" href="/image/YLog-icon.ico" />
        <title>YLog</title>
      </Head>

      <Header />

      <main
        className="flex flex-auto justify-center items-center flex-col w-screen"
      >
        {children}
      </main>

      <Footer />
    </div>
  );
}