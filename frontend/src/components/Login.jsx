import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { useForm } from 'react-hook-form';

const Login = () => {
  const [message, setMessage] = useState("");
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  // handle google sign in
  const handleGoogleSignIn = () => {}

  return (
    <div className='h-[calc(100vh-120px)] flex justify-center items-center'>
      <div className='w-full md:max-w-sm mx-auto bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4'>
        <h2 className='text-xl font-primary font-semibold mb-4'>Please Login to Proceed</h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className='font-primary'>
          <div className='mb-4'>
            <label htmlFor="email" className='block text-gray-700 text-sm font-bold mb-2'>
              Email
              <input
                {...register('email', { required: true })}
                type="email"
                name='email'
                id='_email'
                placeholder='Enter your email'
                className='shadow appearance-none border rounded w-full py-2 px-3 font-normal leading-tight focus:outline-none focus:shadow-inner' />
            </label>
          </div>
          <div className='mb-4'>
            <label htmlFor="password" className='block text-gray-700 text-sm font-bold mb-2'>
              Password
              <input
                {...register('password', { required: true })}
                type="password"
                name='password'
                id='_password'
                placeholder='Enter your password'
                className='shadow appearance-none border rounded w-full py-2 px-3 font-normal leading-tight focus:outline-none focus:shadow-inner' />
            </label>
          </div>
          {
            message && <p className='text-red-500 text-xs italic mb-3'>{message}</p>
          }
          <div>
            <button
              onClick={handleGoogleSignIn}
              className='bg-blue-700 text-white font-bold py-2 px-8 rounded-md focus:outline-none'>
              Login
            </button>
          </div>
        </form>
        <p className='align-baseline font-medium mt-4 font-primary text-sm'>
          Don't have an account? <Link to="/register" className='text-blue-700 hover:text-blue-900'>Register</Link>
        </p>

        {/**google signin */}
        <div className='mt-6'>
          <div className='flex justify-between mb-2 text-sm font-medium font-primary'>
            <span>-------------------------</span>
            <p>or</p>
            <span>-------------------------</span>
          </div>
          <button className='w-full flex flex-wrap gap-1 items-center justify-center bg-secondary hover:bg-blue-700 text-white font-primary font-bold text-sm py-2 px-4 rounded-md focus:outline-none'>
            <FcGoogle className='mr-2' />
            Sign in with Google
          </button>
        </div>
        <div className='mt-5 flex justify-center font-primary font-medium text-xs text-gray-500'>
          <p>&copy;2024 Book Store. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Login;
