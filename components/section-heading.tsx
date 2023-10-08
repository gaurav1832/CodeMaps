import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-4xl text-slate-300 font-bold capitalize mb-8 text-center">
      {children}
    </h2>
  );
}
