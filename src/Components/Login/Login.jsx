import { signInWithEmailAndPassword } from "firebase/auth/cordova";
import React, { useState } from "react";
import { Link } from "react-router";
import { auth } from "../../FireBase/firebase_init";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const handleLogin = (e) =>{
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;
    console.log(email, password, terms);
    
    signInWithEmailAndPassword(auth, email, password, terms)
    .then((result)=>{
      console.log(result.user.emailVerified);
      setErrorMessage('')
      if (result.user.emailVerified) {
        setSuccess(true)
      }else{
        alert('please verify your email')
      }
    }).catch((error)=>{
      console.log(error);
      setSuccess(false)
      setErrorMessage(error.message)
    })
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mt-5">Login Now</h2>

      {/* Success Message */}
      {
        success? <p className="text-green-500 text-center">Login Successfully</p>: ''
      }

      {
        <p className="text-red-500 text-center">{errorMessage}</p>
      }

      <div className="mt-5 rounded-xl">
        <form onSubmit={handleLogin} className="mt-5 space-y-4">

          {/* Email */}
          <label className="w-full input input-primary bg-white validator focus:bg-white">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input
              name="email"
              type="email"
              placeholder="mail@site.com"
              required
            />
          </label>

          {/* Password */}
          <label className="relative w-full input input-primary bg-white validator">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
              </g>
            </svg>

            <input
              type="password"
              name="password"
              required
              placeholder="Password"
            />
            <button
              type="button"
              className="cursor-pointer absolute top-2 right-2"
            >
            </button>
          </label>

          <p className="text-blue-600 underline font-medium">Forgot Password?</p>

          <label className="label">
            <input
              type="checkbox"
              name="terms"
              className="checkbox checkbox-primary"
            />
            Accept terms & condition
          </label>
          <br />

          {/* Button */}
          <button className="btn btn-primary">Login Now</button>
        </form>

        <h2 className="text-center mt-5 text-gray-500">Not Register, Please
          <Link to="/register">
            <span className="text-blue-600 font-bold mx-1 underline">
            Register
            </span> 
          </Link>
        Now!</h2>

      </div>
    </div>
  );
};

export default Login;
