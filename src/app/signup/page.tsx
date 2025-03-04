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
    <div className="flex flex-col sm:flex-row ">
      <div className="h-dvh w-dvw justify-center items-center flex flex-col">
        <div>Signing up is simple, you've probably done this kind of thing before.</div>
        <div className='flex flex-col flex-wrap justify-around h-[100px]'>
          <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email Address"></input>
          <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password"></input>
          <input value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder="Confirm Password"></input>
        </div>
        <div className="border p-5">
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