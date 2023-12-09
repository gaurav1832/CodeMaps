import React from 'react';
import '@/public/styles/sign-up.css';
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
        <h3>Register</h3>
        <input type="email" placeholder="Email" id="email" />
        <input type="text" placeholder="Username" id="username" />

        <input type="password" placeholder="Password" id="password" />
        
        <input type="password" placeholder="Conform Password" id="conformpassword" />
        <input type="password" placeholder="Conform Password" id="conformpassword" />

        <button>Create Account</button>
        <div className="social">
          <div className="go">
            <i className="fab fa-google"></i> Google
          </div>
          <div className="fb">
            <i className="fab fa-facebook"></i> Github
          </div>
        </div>

      </form>
    </>
       
  );
};

export default Page;
