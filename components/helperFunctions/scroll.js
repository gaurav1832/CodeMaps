const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js
import React from "react";

const scroll = () => {
  if (!isBrowser()) return;
  window.scrollTo({ top: 1000, behavior: "smooth" });
};

export default scroll;
