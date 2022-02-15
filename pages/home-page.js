import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import {
  helloUser,
  rightArticle,
  leftArticle,
  rightArrowAnimation,
} from "../components/animate/Animation";
import Layout from "../components/Layout";


export default function HomePage() {
  return (
    <>
      <Layout>
        <div className="container py-24 mx-auto flex">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={leftArticle}
            className="flex flex-wrap mt-auto mb-auto content-start m-4 px-10"
          >
            <div className="w-full sm:p-4 px-4 mb-6">
              <motion.h1
                className="title-font font-medium text-4xl mb-10 text-gray-900"
                animate="visible"
                initial="hidden"
                variants={helloUser}
              >
                Thank you for visiting!!
              </motion.h1>
              <div className="leading-relaxed text-xl">
                はじめまして。ユウタと申します。飲食店勤務5年目です。
                <br />
                趣味でプログラミングを始め、のめり込んでいくうちに仕事として携わっていきたいと思い、転職を決意。
                <br />
                直近ではフロントエンドを中心に勉強中です。
              </div>
            </div>

            <div className="flex justify-around m-auto">
              <Link href="https://github.com/yuutan1017">
                <motion.img
                  src="/icons/github_icon.png"
                  className="w-14 h-14 items-cetnter cursor-pointer mx-10"
                  whileHover={{ scale: 1.5 }}
                />
              </Link>
              <Link href="/contact-page">
                <motion.img
                  src="/image/gmail.png"
                  className="w-12 h-12 items-cetnter cursor-pointer mx-10"
                  whileHover={{ scale: 1.5 }}
                />
              </Link>
              <Link href="/skills-page">
                <motion.img
                  src="/image/personal.png"
                  className="w-12 h-12 items-center cursor-pointer mx-10"
                  whileHover={{ scale: 1.5 }}
                />
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="container w-full m-4 px-10"
            animate="visible"
            initial="hidden"
            variants={rightArticle}
          >
            <div className="flex bg-gray-100 px-7 py-10 shadow-xl shadow-slate-400">
              <div className="flex flex-col justify-center text-gray-700">
                <h5 className="text-2xl ml-3 mb-6">My Profile</h5>
                <div className="mx-4 mb-5 font-bold">
                  <p className="mt-2">Name</p>
                  <p className="text-xl my-2">Yuta Nakamura</p>
                  <p className="mt-2 ">Age</p>
                  <p className="text-xl my-2 ">26</p>
                  <p className="mt-2">E-mail</p>
                  <p className="text-xl mt-2">n.you0611@gmail.com</p>
                </div>
              </div>
              <Image
                className="object-cover rounded-full"
                src="/image/profile.png"
                width={300}
                height={300}
              />
            </div>
          </motion.div>
        </div>
        <div className="flex justify-center items-center">
          <div className="mx-5 cursor-pointer">
            <Link href="/skills-page">
              <motion.svg
                animate="visible"
                initial="hidden"
                variants={rightArrowAnimation}
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M13 5l7 7-7 7M5 5l7 7-7 7"
                />
              </motion.svg>
            </Link>
          </div>
        </div>

      </Layout>
    </>
  );
}
