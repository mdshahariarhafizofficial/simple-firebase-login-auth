import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../FireBase/firebase_init";

const Register = () => {
const [success, setSuccess] = useState('');
const [errorMessage, setErrorMessage] = useState('');


// handle Submit
const handleRegister = (e)=>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // const regEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    // if(regEx.test(password) === false){
    //   setErrorMessage('The password must include at least one digit')
    //   return
    // }
    const digit = /(?=.*\d)/;
    const lowercase = /(?=.*[a-z])/;
    const upperCase = /(?=.*[A-Z])/;
    const passLength = /.{8,}/
    if (digit.test(password) === false) {
      setErrorMessage('The password must include at least one digit')
      return
    }else if(lowercase.test(password) === false){
      setErrorMessage('The password must include at least one lowercase')
      return
    }else if(upperCase.test(password) === false){
      setErrorMessage('The password must include at least one UpperCase')
      return
    }else if(passLength.test(password) === false){
      setErrorMessage('The password must include at least 8 character')
      return
    }

    createUserWithEmailAndPassword(auth, email, password)
    .then((result)=>{
        console.log(result);
        setErrorMessage('')
        setSuccess('Register Successfully!') 
    }).catch((error)=>{
        console.log(error);
        setErrorMessage(error.message)
        setSuccess('')
    })
}


  return (
    <div className="">
      <h2 className="text-2xl font-bold text-center mt-5">Registration Now</h2>
      <form onSubmit={handleRegister} className="mt-5 space-y-4">
        {/* User Name */}
        {/* <label className="w-full input input-primary bg-white validator">
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
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </g>
          </svg>
          <input
            type="input"
            required
            placeholder="Username"
            pattern="[A-Za-z][A-Za-z0-9\-]*"
            minlength="3"
            maxlength="30"
            title="Only letters, numbers or dash"
          />
        </label> */}

          <p className="text-red-500 text-center">
            {
              errorMessage
            }
          </p>
          <p className="text-green-500 text-center">
            {
              success
            }
          </p>

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
          <input name="email" type="email" placeholder="mail@site.com" required />
        </label>

        {/* Password */}
        <label className="w-full input input-primary bg-white validator">
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
            // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            // title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
          />
        </label>

        {/* Button */}
        <button className="btn btn-secondary">Register Now!</button>
      </form>


    </div>
  );
};

export default Register;
