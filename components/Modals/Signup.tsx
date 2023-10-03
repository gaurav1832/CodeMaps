import React from 'react'
import { RecoilRoot } from 'recoil'

const Signup = () => {
  return (
    <RecoilRoot> 
    <form className='space-y-3 px-6 pb-4'>
    <h3 className='text-2xl mb-5 text-gradient_blue-purple !font-bold'>Register to CodeMaps</h3>
    <div>
            <label htmlFor='email' className='text-sm font-medium block mb-2 text-gray-300 py-1'>
                 Email
            </label>
            <input
                type='email'
                name='email'
                id='email'
                className='
        border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
        bg-gray-600 border-gray-500 placeholder-gray-400 text-white
    '
                placeholder='name@company.com'
            />
        </div>
        <div>
            <label htmlFor='username' className='text-sm font-medium block mb-2 text-gray-300 py-1'>
                Username
            </label>
            <input
                type='text'
                name='username'
                id='username'
                className='
        border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
        bg-gray-600 border-gray-500 placeholder-gray-400 text-white
    '
                placeholder='jamesbond'
            />
        </div>
        <div>
            <label htmlFor='password' className='text-sm font-medium block mb-2 text-gray-300 py-1'>
                 Password
            </label>
            <input
                type='password'
                name='password'
                id='password'
                className='
        border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
        bg-gray-600 border-gray-500 placeholder-gray-400 text-white mb-5'
                placeholder='*******'
            />
        </div>
        <button
            type='submit'
            className='w-full text-slate-800 focus:ring-blue-300 font-medium rounded-lg
            text-sm px-5 py-2.5 text-center bg-slate-100'
        >
            Register
        </button>
        <div className='text-sm font-medium text-gray-500'>Already have an Account ? {" "}
        <a href='#' className='text-blue-300 hover:underline'>
                 Log In
            </a>
        </div>
</form>
</RecoilRoot>
  )
}

export default Signup