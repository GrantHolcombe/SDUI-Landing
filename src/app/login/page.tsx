"use client"
import GoogleG from '../../../public/googleG.svg'
import { useState, use } from 'react';

export default function LogIn() {
  const [email, setEmail] = useState(""),
        [password, setPassword] = useState(""),
        [confirmPassword, setConfirmPassword] = useState("");
  const isEmailValid = ():Boolean =>{
    const regex = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
    return regex.test(email)
  }
  const isPasswordLengthValid = ():Boolean => {
    const length = password.length
    return length >= 8
  }


  return (
    <div className="flex flex-col sm:flex-row mt-5">
      <div className="w-dvw justify-center items-center flex flex-col sm:flex-row">
        <div className='flex flex-col justify-around m-5'>
          <div className="flex text-4xl font-semibold mb-2">Welcome back!</div>
          <div className="flex text-md text-gray-500 mb-2">Enter your info below to get back into your bike garage</div>
          <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
              <input value={email} onChange={e => setEmail(e.target.value)} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="You@Email.com" required />
          </div> 
          <div className="mb-6">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
              <input value={password} onChange={e => setPassword(e.target.value)} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123Abc!8" required />
          </div>
          <button className="relative w-[150px] inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <span className="relative w-[150px] text-center px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
              Clip in
            </span> 
          </button>
          <button className="relative w-[150px] inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <span className="relative flex items-center justify-center  w-[150px] text-center px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
              Clip in with
              <GoogleG className="w-4 h-4 mx-1" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}