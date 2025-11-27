import React from 'react';

export const Logo = ({ className }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <svg 
      width="32" 
      height="32" 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="text-primary"
    >
      <path 
        d="M16 2L4 7V14C4 21.5 9.2 28.4 16 30C22.8 28.4 28 21.5 28 14V7L16 2Z" 
        fill="currentColor"
      />
      <path 
        d="M16 22C17.6569 22 19 20.6569 19 19C19 17.3431 17.6569 16 16 16C14.3431 16 13 17.3431 13 19C13 20.6569 14.3431 22 16 22Z" 
        fill="white"
      />
      <path 
        d="M16 16V13" 
        stroke="white" 
        strokeWidth="2" 
        strokeLinecap="round"
      />
    </svg>
    <span className="font-heading font-bold text-xl tracking-tight text-foreground">
      SecureGen
    </span>
  </div>
);
