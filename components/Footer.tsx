import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <hr />
      <small className=" mt-5 mb-2 block text-xs">
        &copy; 2023 CodeMaps. All rights reserved.
        <br /> Made with love by <a color="" href="https://gauravgarwa.tech">Gaurav</a>
      </small>
      {/* <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p> */}
    </footer>
  );
}
