import React from 'react'
import realestate from "../../assets/realestate.png";

const Register = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-[100vh]">
    <div className="flex flex-col items-center justify-center border shadow-lg rounded-lg p-5">
    <div>
    <img src={realestate} className="h-40" alt="ima" />
    </div>
    <h1 className="text-4xl  text-black font-bold font-serif">Create Account</h1> <br />
    <form onSubmit={(e)=>{
      e.preventDefault()
      }} className=" mt-4  bg-white rounded-lg sm:w-96 text-left p-8 ">

      <label htmlFor="username"className="block font-semibold">Username</label>
      <input 
      id="username"
      placeholder="Username"
      className="border  h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-sky-400 rounded-md"
      />

<label htmlFor="password" className="block mt-3 font-semibold">Email</label>
      <input
      id="email"
        className="border  h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-sky-400 rounded-md"
        placeholder="email"
        type="email address" 
      />

      <label htmlFor="password" className="block mt-3 font-semibold">Password</label>
      <input
      id="password"
        className="border  h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-sky-400 rounded-md"
        placeholder="Password"
        type="password" 
      />

      <div className="">
        <button
          type="submit"
          className="mt-8 bg-blue-500 text-white py-2 px-16 rounded-full hover:bg-blue-700"
        >
          Register
        </button>{" "}
        <br /> <br />
        </div>
    </form>
    
  </div>
      </div>
  )
}

export default Register