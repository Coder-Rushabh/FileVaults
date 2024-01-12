'use client'

import React, { useState } from "react";
import Image from 'next/image'


const Hero = () => {
  return (
    <>
    <section className="bg-white dark:bg-gray-900 mt-10">
    <div className="grid ml-10 max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
        <h1 class="text-3xl font-extrabold sm:text-5xl">
        Let us find your

        <strong class="block font-extrabold text-primary"> Forever Home. </strong>
      </h1>
      <p class="mt-4 max-w-lg sm:text-xl/relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
        numquam ea!
      </p>
      <div class="mt-8 flex flex-wrap gap-4 text-center">
        <a
          href="#"
          class="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
        >
          Get Started
        </a>

      </div>
        </div>
        <div className=" lg:mt-0 h-96 w-auto lg:col-span-5 lg:flex">
            <img src={"https://wialon.com/resource/images/wdc/1_pic_test.png"}  />
        </div>                
    </div>
</section>
     </>
  )}

  export default Hero;