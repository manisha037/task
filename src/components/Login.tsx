"use client"
import  { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import login_img from "../public/login_img.png";
import logo from "../public/assets/Full Logo.png";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="h-screen flex items-center justify-center ">
        <div className='flex border border-[#4318FF] w-[70vw] max-w-[1033px] justify-between h-[75vh] max-h-[730px] '>
            <div className='w-[50%] '><img src={login_img} alt="" className='w-[100%] h-full' /></div>
      <div className="w-[50%] px-14 py-7 bg-white  shadow-sm">
        {/* Logo */}
        <div className=" flex justify-center mb-12">
            <img src={logo} alt=""  className='w-[280px]  h-[45px]'/>
        
        </div>

        {/* Header */}
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
          Log in to your account
        </h1>
        <p className="text-gray-600 mb-6">
          Welcome back! Please enter your details.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-600"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password<span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-600 pr-10"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <span className="ml-2 text-sm text-gray-600">Remember for 30 days</span>
            </label>
            <a href="#" className="text-sm text-indigo-600 hover:text-indigo-500">
              Forgot password
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Sign in
          </button>

          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50"
          >
            <img
              src="/Social icon.png"
              alt="Google logo"
              className="w-4 h-4"
            />
            Sign in with Google
          </button>
        </form>

        {/* Footer */}
        <p className="mt-5 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <a href="#" className="text-indigo-600 hover:text-indigo-500">
            Sign up
          </a>
        </p>
      </div>
      </div>
    </div>
  );
};

export default Login;