// 'use client'

import AuthModal from '@/components/Modals/AuthModal'
import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { authModalState } from '@/src/atoms/authModalAtom'
 

const AuthPage  = () => {
    //const authModal = useRecoilValue(authModalState);
  return (
        <>
        <Navbar/>
        <div className='flex items-center justify-center h-[calc(100vh-5rem)] pointer-events-none select-none'>
            <Image src='/auth-bg.png' alt='image' width={1300} height={1300} />
        </div>
        {/* {authModal.isOpen && <AuthModal/>} */}
 </>
   )
}

export default AuthPage