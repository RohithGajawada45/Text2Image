import React from 'react';
import './App.css'; // Make sure your CSS file path is correct
import Social from './Social';

export default function App() {
  return (
    <div>
      <nav className="bg-transparent">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a className='text-white' href="http://www.instagram.com/codewithbiki" target='_blank' rel="noopener noreferrer">
            <span className="self-center text-sm font-semibold whitespace-nowrap">Text2Image</span>
          </a>
           <Social />
        </div>
      </nav>
    </div>
  );
}
