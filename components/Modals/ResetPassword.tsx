import React from 'react'
import { RecoilRoot } from 'recoil'

const ResetPassword = () => {
  return (
    <RecoilRoot> 
    <form className='space-y-3 px-6 pb-4'>
    <h3 className='text-2xl mb-5 text-gradient_blue-purple !font-bold'>Reset Password</h3>
    <div>
        <p className='text-gray-100 mb-5'>Enter your email below to reset your password</p>
            <label htmlFor='email' className='text-sm font-medium block mb-2 text-gray-300 py-1'>
                Your Email
            </label>
            <input
                type='email'
                name='email'
                id='email'
                className='
        border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
        bg-gray-600 border-gray-500 placeholder-gray-400 text-white mb-5
    '
                placeholder='name@company.com'
            />
        </div>
 
        <button
            type='submit'
            className='w-full text-slate-800 focus:ring-blue-300 font-medium rounded-lg
            text-sm px-5 py-2.5 text-center bg-slate-100'
        >
             Reset
        </button>
   
</form>
</RecoilRoot>
  )
}

export default ResetPassword