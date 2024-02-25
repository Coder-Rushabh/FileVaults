"use client";

import { app } from "@/app/firebase";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import React, { useState } from "react";
import FileInfo from "./FileInfo";
import FileShareForm from "./FileShareForm";
import { Link } from "next/navigation";

const FilePreview = ({ params }) => {
  const [file, setFile] = useState();
  const db = getFirestore(app);

  const getFileInfo = async () => {
    const docRef = doc(db, "uploadedFile", params?.fileId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log(docSnap.data());
      setFile(docSnap.data());
    }
  };

  const onPasswordSave=(password)=>{

  }


  return (
    <div>
      <div className="py-10 px-20">
        <Link href='/upload' className='flex gap-3'>Go to Upload</Link>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-5">
          <FileInfo file={file} />
          <FileShareForm file={file}
          onPasswordSave={(password)=>onPasswordSave(password)}/>
        </div>
      </div>



      {/* <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <section>
            <div className="grid grid-cols-1  lg:grid-cols-2">
              <div className="relative flex items-end px-4 pb-10  sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24">
                <div className="w-[300px] rounded-md border">
                  <img
                    src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                    alt="Laptop"
                    className="h-[200px] w-full rounded-t-md object-cover"
                  />
                  <div className="p-4">
                    <h1 className="inline-flex items-center text-lg font-semibold">
                      About Macbook &nbsp;
                    </h1>
                    <p className="mt-3 text-sm text-gray-600">
                      Lorem ipsum dolor sit amet consectetur 
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center px-4  sm:px-6 sm:py-16 lg:px-8 lg:py-24">
                <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                <label for="input-label" class="block text-sm font-medium mb-2 dark:text-white">Short URL</label>

                  <div className="flex w-full items-center space-x-2 md:w-1/3">
                    <input
                      className="flex h-10 w-52 rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="http://localhost:3000/wb2ebw"
                    ></input>
                    <button
                      type="button"
                      className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Copy
                    </button>
                  </div>

                  <div class="flex mt-5">
                    <input
                      type="checkbox"
                      class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                      id="hs-checked-checkbox"
                    />
                    <label
                      for="hs-checked-checkbox"
                      class="text-sm text-gray-500 ms-3 dark:text-gray-400"
                    >
                      Enable Password
                    </label>
                  </div>

                  <div className="flex w-full mt-5 items-center space-x-2 md:w-1/3">
                    <input
                      className="flex h-10 w-52 rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="* * * * *"
                    ></input>
                    <button
                      type="button"
                      className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Save
                    </button>
                  </div>


                  <label for="input-label" class="block text-sm font-medium mt-2 mb-2 dark:text-white">Short URL</label>


                  <div className="flex w-full mt-1 items-center space-x-2 md:w-1/3">
                    <input
                      className="flex h-10 w-72 rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="example@email.com"
                    ></input>
             
                  </div>


                  <button type="button" class="text-white mt-5 w-72 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Send Email</button>



                </div>
              </div>
            </div>
          </section>
        </div>
      </div> */}
    </div>
  );
};

export default FilePreview;
