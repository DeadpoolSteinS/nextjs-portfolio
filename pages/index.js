import Head from "next/head";
import { useEffect } from "react";
import About from "./components/About";
import History from "./components/History";
import Navbar from "./components/Navbar";

export default function Home() {
  useEffect(() => {
    document.body.className = "font-mavens";
    console.log("INDEX USE EFFECT");
  });

  return (
    <div className="text-[#5b5b5b]">
      <Head>
        <title>NovaldiS - Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <About />
      <History />
    </div>
  );
}
