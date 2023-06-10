"use client";

import { motion } from "framer-motion";
import { signIn } from "next-auth/react";

function LoginPage() {
  return (
    <div className="login-container px-1 text-white flex flex-col items-center justify-center">
      <div>
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="font-extrabold leading-snug font-loginpage text-5xl md:text-7xl lg:text-8xl mb-2 md:mb-6 text-center"
        >
          Manage your life.
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="font-extrabold font-loginpage text-2xl text-white/85 md:text-4xl text-center"
        >
          By doing your task.
        </motion.h2>
      </div>
      {/* Login Button */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mt-7 md:mt-8 lg:mt-10 bg-white text-black font-bold px-4 py-3 rounded-full cursor-pointer hover:scale-110 font-inter tetx-sm"
        onClick={() => {
          void signIn("auth0");
        }}
      >
        START NOW!
      </motion.div>
    </div>
  );
}

export default LoginPage;
