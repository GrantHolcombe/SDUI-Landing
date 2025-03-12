"use client"
import Pass from '../../../public/check.svg'
import Fail from '../../../public/close.svg'
import { useState, use } from 'react';

export default function SignUp() {
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
  const isPasswordSpecialValid = ():Boolean => {
    var regex = new RegExp(".*[!@#\$%\^\&*\)\(+=._-].*")
    return regex.test(password)
  }
  const isPasswordNumberValid = ():Boolean => {
    var regex = new RegExp(".*[0-9].*")
    return regex.test(password)
  }
  const isPasswordLowerValid = ():Boolean => {
    var regex = new RegExp(".*[a-z].*")
    return regex.test(password)
  }
  const isPasswordUpperValid = ():Boolean => {
    var regex = new RegExp(".*[A-Z].*")
    return regex.test(password)
  }
  const isPasswordMatchValid = ():Boolean => {
    return password.length > 0 && confirmPassword.length > 0 && password === confirmPassword
  }

  return (
    <div className="flex flex-col sm:flex-row mt-5">
      <div className="w-dvw justify-center items-center flex flex-col sm:flex-row">
        <div className='flex flex-col justify-around m-5'>
        <div className=' '>Signing up is simple, you've probably done this kind of thing before.</div>
          <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
              <input value={email} onChange={e => setEmail(e.target.value)} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="You@Email.com" required />
          </div> 
          <div className="mb-6">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
              <input value={password} onChange={e => setPassword(e.target.value)} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123Abc!8" required />
          </div> 
          <div className="mb-6">
              <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
              <input value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} type="password" id="confirmPassword" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123Abc!8" required />
          </div> 
          <button className="relative w-[120px] inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <span className="relative w-[120px] text-center px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
              Sign up!
            </span> 
          </button>
        </div>
        <div className="border p-5 flex flex-col m-5 mb-[45px]">
          <div className="flex text-lg font-semibold mb-2">Sign up Requirements</div>
          <div className="flex text-sm text-gray-500 mb-2">Your credentials must meet the following requirements:</div>
          <ul>
            <li className={"flex flex-row " + (isEmailValid() ? "text-green-500" : "text-red-500")}>
              {isEmailValid() ? 
              <Pass fill={"rgb(34, 197, 94)"}/> : 
              <Fail fill={"rgb(239, 68, 68)"}/>} 
              A valid email address
            </li>
            <li className={"flex flex-row " + (isPasswordLengthValid() ? "text-green-500" : "text-red-500")}>
              {isPasswordLengthValid() ? 
              <Pass fill={"rgb(34, 197, 94)"}/> : 
              <Fail fill={"rgb(239, 68, 68)"}/>} 
              At least 8 characters
            </li>
            <li className={"flex flex-row " + (isPasswordNumberValid() ? "text-green-500" : "text-red-500")}>
              {isPasswordNumberValid() ? 
              <Pass fill={"rgb(34, 197, 94)"}/> : 
              <Fail fill={"rgb(239, 68, 68)"}/>} 
              Include 1 number
            </li>
            <li className={"flex flex-row " + (isPasswordLowerValid() ? "text-green-500" : "text-red-500")}>
              {isPasswordLowerValid() ? 
              <Pass fill={"rgb(34, 197, 94)"}/> : 
              <Fail fill={"rgb(239, 68, 68)"}/>} 
              Include 1 lower case letter
            </li>
            <li className={"flex flex-row " + (isPasswordUpperValid() ? "text-green-500" : "text-red-500")}>
              {isPasswordUpperValid() ? 
              <Pass fill={"rgb(34, 197, 94)"}/> : 
              <Fail fill={"rgb(239, 68, 68)"}/>} 
              Include 1 upper case letter
            </li>
            <li className={"flex flex-row " + (isPasswordSpecialValid() ? "text-green-500" : "text-red-500")}>
              {isPasswordSpecialValid() ? 
              <Pass fill={"rgb(34, 197, 94)"}/> : 
              <Fail fill={"rgb(239, 68, 68)"}/>} 
              Include 1 special character (.!@#$%^&*()_+-=)
            </li>
            <li className={"flex flex-row " + (isPasswordMatchValid() ? "text-green-500" : "text-red-500")}>
              {isPasswordMatchValid() ? 
              <Pass fill={"rgb(34, 197, 94)"}/> : 
              <Fail fill={"rgb(239, 68, 68)"}/>} 
              Password and Confirm Password must match
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}