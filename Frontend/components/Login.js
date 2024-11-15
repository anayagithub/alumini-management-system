import React from 'react';
// import 'boxicons/css/boxicons.min.css';

const Login = ({ setCurrentPage }) => {
  const handleLogin = () => {
    // Your login logic here
    // ...

    // After successful login, switch to home page
    setCurrentPage("home");
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <div className="flex flex-col items-center bg-white max-w-md w-full p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Login</h2>
        
        <div className="w-full relative mb-4">
          <i className="bx bxs-user icon absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"></i>
          <input 
            type="text" 
            placeholder="Username" 
            required 
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring focus:ring-blue-300 text-gray-700" 
          />
        </div>
        
        <div className="w-full relative mb-4">
          <i className="bx bxs-lock-alt icon absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"></i>
          <input 
            type="password" 
            placeholder="Password" 
            required 
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring focus:ring-blue-300 text-gray-700" 
          />
        </div>
        
        <div className="w-full flex justify-between items-center mb-4">
          <label className="flex items-center text-gray-600">
            <input type="checkbox" className="mr-2" /> Remember me
          </label>
          <a href="#" className="text-blue-500 text-sm hover:underline">Forgot password?</a>
        </div>
        
        <button type="button" onClick={handleLogin} className="w-full py-2 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 transition duration-300">
          Login
        </button>
        
        <div className="w-full text-center mt-6 text-gray-600">
          <p>
            Don't have an account? <a href="#" className="text-blue-500 hover:underline">Register</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
