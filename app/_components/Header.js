'use client'

import React from 'react'
import Image from 'next/image'
import { UserAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';

function Header() {
  const {user, googleSignIn, logOut} = UserAuth();
  const router = useRouter();

  const handleSignIn = async () => {

    try{
      await googleSignIn();
      router.push('/vault');

    } catch (error){
      console.log(error)
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <><header className="bg-white">
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <div className="flex-1 md:flex md:items-center md:gap-12">
          <a className="block text-teal-600" href="/">
            <Image src={'/filevaults.png'} height={180} width={190}/>
          </a>
        </div>
  
        <div className="md:flex md:items-center md:gap-12">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a className="text-gray-800 mr-10 transition hover:text-gray-500/75" href="/"> Home </a>
              </li>
  
              <li>
                <a className="text-gray-800 mr-10 transition hover:text-gray-500/75" href="/"> About </a>
              </li>
  
              <li>
                <a className="text-gray-800 mr-10 transition hover:text-gray-500/75" href="/"> Contact us </a>
              </li>
            </ul>
          </nav>
  
          {!user ? (
        <div className="flex items-center gap-4">
        <div onClick={handleSignIn} className="cursor-pointer block rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-700 sm:flex sm:gap-4">
           Login

        </div>

        <button
          className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>) : (
        <div className="flex items-center gap-4">
          <div className="text-gray-500 transition hover:text-gray-500/75" > </div>
        <div onClick={handleSignOut} className="cursor-pointer block rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-700 sm:flex sm:gap-4">
            Logout

        </div>

        <button
          className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      )}
        </div>
      </div>
    </div>
  </header>
</>
  )
}

export default Header