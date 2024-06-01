import React, { useEffect } from "react";
import Head from "next/head";
import Home from "./home";
import 'material-icons/iconfont/material-icons.css';

export default function Index() {
  return (
    <>
      <Head>
        <title>ERS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        {/* <script type="module" src="https://www.ers.org.sz:5500/dist/chat-bot.bundle.js" defer/> */}
      </Head>
      <Home />
    </>
  );
}