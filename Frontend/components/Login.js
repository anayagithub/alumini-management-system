// import React from 'react';
// // import 'boxicons/css/boxicons.min.css';

// const Login = ({ setCurrentPage }) => {
//   const handleLogin = () => {
//     // Your login logic here
//     // ...

//     // After successful login, switch to home page
//     setCurrentPage("home");
//   };

//   return (
//     <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
//       <div className="flex flex-col items-center bg-white max-w-md w-full p-8 rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Login</h2>
        
//         <div className="w-full relative mb-4">
//           <i className="bx bxs-user icon absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"></i>
//           <input 
//             type="text" 
//             placeholder="Username" 
//             required 
//             className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring focus:ring-blue-300 text-gray-700" 
//           />
//         </div>
        
//         <div className="w-full relative mb-4">
//           <i className="bx bxs-lock-alt icon absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"></i>
//           <input 
//             type="password" 
//             placeholder="Password" 
//             required 
//             className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring focus:ring-blue-300 text-gray-700" 
//           />
//         </div>
        
//         <div className="w-full flex justify-between items-center mb-4">
//           <label className="flex items-center text-gray-600">
//             <input type="checkbox" className="mr-2" /> Remember me
//           </label>
//           <a href="#" className="text-blue-500 text-sm hover:underline">Forgot password?</a>
//         </div>
        
//         <button type="button" onClick={handleLogin} className="w-full py-2 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 transition duration-300">
//           Login
//         </button>
        
//         <div className="w-full text-center mt-6 text-gray-600">
//           <p>
//             Don't have an account? <a href="#" className="text-blue-500 hover:underline">Register</a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
// import React, { useState } from 'react';
// import 'boxicons/css/boxicons.min.css';

// const Login = ({ setCurrentPage }) => {
//   const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Sign Up forms

//   const handleLogin = () => {
//     // Your login logic here
//     setCurrentPage("home"); // Navigate to the home page after login
//   };

//   const handleSignUp = () => {
//     // Your signup logic here

//     // After successful signup, switch to the login page
//     setIsLogin(true); // This will show the login form after signup
//   };

//   return (
//     <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
//       <div className="flex flex-col items-center bg-white max-w-md w-full p-8 rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
//           {isLogin ? "Login" : "Sign Up"}
//         </h2>

//         {isLogin ? (
//           <>
//             {/* Login Form */}
//             <div className="w-full relative mb-4">
//               <i className="bx bxs-user icon absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"></i>
//               <input 
//                 type="text" 
//                 placeholder="Username" 
//                 required 
//                 className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring focus:ring-blue-300 text-gray-700" 
//               />
//             </div>

//             <div className="w-full relative mb-4">
//               <i className="bx bxs-lock-alt icon absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"></i>
//               <input 
//                 type="password" 
//                 placeholder="Password" 
//                 required 
//                 className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring focus:ring-blue-300 text-gray-700" 
//               />
//             </div>

//             <div className="w-full flex justify-between items-center mb-4">
//               <label className="flex items-center text-gray-600">
//                 <input type="checkbox" className="mr-2" /> Remember me
//               </label>
//               <a href="#" className="text-blue-500 text-sm hover:underline">Forgot password?</a>
//             </div>

//             <button 
//               type="button" 
//               onClick={handleLogin} 
//               className="w-full py-2 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 transition duration-300"
//             >
//               Login
//             </button>
            
//             <div className="w-full text-center mt-6 text-gray-600">
//               <p>
//                 Don't have an account? <a href="#" onClick={() => setIsLogin(false)} className="text-blue-500 hover:underline">Register</a>
//               </p>
//             </div>
//           </>
//         ) : (
//           <>
//             {/* Sign Up Form */}
//             <div className="w-full relative mb-4">
//               <i className="bx bxs-user icon absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"></i>
//               <input 
//                 type="text" 
//                 placeholder="Username" 
//                 required 
//                 className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring focus:ring-blue-300 text-gray-700" 
//               />
//             </div>

//             <div className="w-full relative mb-4">
//               <i className="bx bxs-envelope icon absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"></i>
//               <input 
//                 type="email" 
//                 placeholder="Email" 
//                 required 
//                 className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring focus:ring-blue-300 text-gray-700" 
//               />
//             </div>

//             <div className="w-full relative mb-4">
//               <i className="bx bxs-lock-alt icon absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"></i>
//               <input 
//                 type="password" 
//                 placeholder="Password" 
//                 required 
//                 className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring focus:ring-blue-300 text-gray-700" 
//               />
//             </div>

//             <div className="w-full relative mb-4">
//               <i className="bx bxs-lock-alt icon absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"></i>
//               <input 
//                 type="password" 
//                 placeholder="Confirm Password" 
//                 required 
//                 className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring focus:ring-blue-300 text-gray-700" 
//               />
//             </div>

//             <div className="w-full flex items-center mb-4">
//               <input type="checkbox" required className="mr-2" />
//               <label className="text-gray-600">
//                 I agree to the <a href="#" className="text-blue-500 hover:underline">terms and conditions</a>
//               </label>
//             </div>

//             <button 
//               type="button" 
//               onClick={handleSignUp} 
//               className="w-full py-2 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 transition duration-300"
//             >
//               Sign Up
//             </button>

//             <div className="w-full text-center mt-6 text-gray-600">
//               <p>
//                 Already have an account? <a href="#" onClick={() => setIsLogin(true)} className="text-blue-500 hover:underline">Sign In</a>
//               </p>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import "boxicons/css/boxicons.min.css";

const Login = ({ setCurrentPage }) => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Sign Up forms
  const [userDetails, setUserDetails] = useState(null); // Store registered user details
  const [loginInput, setLoginInput] = useState({ username: "", password: "" }); // Store login input
  const [signUpInput, setSignUpInput] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  }); // Store signup input
  const [error, setError] = useState(""); // Error message

  const handleLogin = () => {
    if (!loginInput.username || !loginInput.password) {
      setError("Please fill in all fields.");
      return;
    }

    if (
      userDetails &&
      loginInput.username === userDetails.username &&
      loginInput.password === userDetails.password
    ) {
      setCurrentPage("home"); // Navigate to the home page after login
      setError(""); // Clear any previous errors
    } else {
      setError("Invalid username or password.");
    }
  };

  const handleSignUp = () => {
    if (
      !signUpInput.username ||
      !signUpInput.email ||
      !signUpInput.password ||
      !signUpInput.confirmPassword
    ) {
      setError("Please fill in all fields.");
      return;
    }

    if (signUpInput.password !== signUpInput.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setUserDetails({
      username: signUpInput.username,
      email: signUpInput.email,
      password: signUpInput.password,
    });

    setSignUpInput({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setIsLogin(true); // Switch to login form after successful signup
    setError(""); // Clear any previous errors
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <div className="flex flex-col items-center bg-white max-w-md w-full p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        {error && (
          <p className="text-red-500 text-sm mb-4">{error}</p>
        )}

        {isLogin ? (
          <>
            {/* Login Form */}
            <div className="w-full relative mb-4">
              <i className="bx bxs-user icon absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"></i>
              <input
                type="text"
                placeholder="Username"
                value={loginInput.username}
                onChange={(e) =>
                  setLoginInput({ ...loginInput, username: e.target.value })
                }
                required
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring focus:ring-blue-300 text-gray-700"
              />
            </div>

            <div className="w-full relative mb-4">
              <i className="bx bxs-lock-alt icon absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"></i>
              <input
                type="password"
                placeholder="Password"
                value={loginInput.password}
                onChange={(e) =>
                  setLoginInput({ ...loginInput, password: e.target.value })
                }
                required
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring focus:ring-blue-300 text-gray-700"
              />
            </div>

            <button
              type="button"
              onClick={handleLogin}
              className="w-full py-2 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 transition duration-300"
            >
              Login
            </button>

            <div className="w-full text-center mt-6 text-gray-600">
              <p>
                Don't have an account?{" "}
                <a
                  href="#"
                  onClick={() => setIsLogin(false)}
                  className="text-blue-500 hover:underline"
                >
                  Register
                </a>
              </p>
            </div>
          </>
        ) : (
          <>
            {/* Sign Up Form */}
            <div className="w-full relative mb-4">
              <i className="bx bxs-user icon absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"></i>
              <input
                type="text"
                placeholder="Username"
                value={signUpInput.username}
                onChange={(e) =>
                  setSignUpInput({ ...signUpInput, username: e.target.value })
                }
                required
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring focus:ring-blue-300 text-gray-700"
              />
            </div>

            <div className="w-full relative mb-4">
              <i className="bx bxs-envelope icon absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"></i>
              <input
                type="email"
                placeholder="Email"
                value={signUpInput.email}
                onChange={(e) =>
                  setSignUpInput({ ...signUpInput, email: e.target.value })
                }
                required
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring focus:ring-blue-300 text-gray-700"
              />
            </div>

            <div className="w-full relative mb-4">
              <i className="bx bxs-lock-alt icon absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"></i>
              <input
                type="password"
                placeholder="Password"
                value={signUpInput.password}
                onChange={(e) =>
                  setSignUpInput({ ...signUpInput, password: e.target.value })
                }
                required
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring focus:ring-blue-300 text-gray-700"
              />
            </div>

            <div className="w-full relative mb-4">
              <i className="bx bxs-lock-alt icon absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"></i>
              <input
                type="password"
                placeholder="Confirm Password"
                value={signUpInput.confirmPassword}
                onChange={(e) =>
                  setSignUpInput({
                    ...signUpInput,
                    confirmPassword: e.target.value,
                  })
                }
                required
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring focus:ring-blue-300 text-gray-700"
              />
            </div>

            <button
              type="button"
              onClick={handleSignUp}
              className="w-full py-2 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 transition duration-300"
            >
              Sign Up
            </button>

            <div className="w-full text-center mt-6 text-gray-600">
              <p>
                Already have an account?{" "}
                <a
                  href="#"
                  onClick={() => setIsLogin(true)}
                  className="text-blue-500 hover:underline"
                >
                  Sign In
                </a>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
