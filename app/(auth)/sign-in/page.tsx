import React from 'react';
import '@/public/styles/sign-in.css';
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
  return (
    <>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      
      <form>
        <center>
       <Image className="left-0" src='/logo.png' width={200} height={5} alt='CM_logo' />
       </center>
        <h3>Login</h3>

        <label htmlFor="username">Username</label>
        <input type="text" placeholder="spider-man" id="username" />

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="don't-tell-anyone" id="password" />

        <button>Log In</button>
        <div className="social">
          <div className="go">
            <i className="fab fa-google"></i> Google
          </div>
          <div className="fb">
            <i className="fab fa-facebook"></i> Github
          </div>
        </div>
        <div className='signup-btn'>
         <center className='p-3'> <Link href={"/sign-up"}>Create Account</Link></center>
        </div>
      </form>
    </>
       
  );
};

export default Page;
