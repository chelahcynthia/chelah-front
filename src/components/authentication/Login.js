import React, { useState }from 'react'
import realestate from "../../assets/realestate.png";
import { Link} from 'react-router-dom';


const Login = ({setUserIsAuthenticated}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    fetch("http://localhost:4000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => {
      if (res.ok) {
        res.json().then(console.log)
        console.log("success");
        setUserIsAuthenticated(true)
        console.log(res.headers.get("access-token"));
        console.log(res.headers);
        }
    });
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-[100vh]">
      <div className="flex flex-col items-center justify-center border shadow-lg rounded-lg p-5">
      <div>
      <img src={realestate} className="h-40" alt="ima" />
      </div>
      <h1 className="text-4xl  text-black font-bold font-serif">Log In Here!</h1> <br />
      <form onSubmit={e => handleSubmit(e)} 
    className="mt-4 bg-white rounded-lg sm:w-96 text-left p-8"
        >

        <label htmlFor="username"className="block font-semibold">Email</label>
        <input 
        type="email"
        name=""
        required
        placeholder="Email"
        onChange={(e) =>
          setFormData({ ...formData, email: e.target.value })}
        className="border  h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-sky-400 rounded-md"
        />
        

        <label htmlFor="password" className="block mt-3 font-semibold">Password</label>
        <input
        id="password"
          className="border  h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-sky-400 rounded-md"
          placeholder="Password"
          type="password" 
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />

        <div className="">
          <button
            type="submit"
            className="mt-8 bg-blue-500 text-white py-2 px-16 rounded-full hover:bg-blue-700"
          >
            Log In
          </button>{" "}
          <br /> <br />
          </div>
      </form>
      <p className="text-blue-500 hover:text-blue-600">
        Don't have an account?{" "}
        <Link className="rlink" to="/Register">
          Register here
        </Link>
      </p>
    </div>
        </div>
  )
}

export default Login
