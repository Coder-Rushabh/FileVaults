"use client"

import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import { useRouter } from 'next/router';


export default function Home() {
  return (
    <>
      <Hero />
    </>
  );
}