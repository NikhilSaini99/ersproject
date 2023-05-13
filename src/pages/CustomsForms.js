import React from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Table from "@/components/Table";
import Banner from "../assets/images/e-customs.jpg"

export default function CustomsForms() {
  return (
    <>
      <Head>
        <title>Forms</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      {/*-----------------------Header---------------------*/}

      <Header />

      {/*-----------------------Banner---------------------*/}

      <section>
        <Image src={Banner} alt="..." className="h-96 w-full" />
      </section>

      {/*-----------------------Table---------------------*/}

      <Table title={"Customs & Excise Forms"}/>

      {/*-----------------------Footer---------------------*/}

      <Footer />
    </>
  );
}
