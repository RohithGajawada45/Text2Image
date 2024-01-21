import React from 'react';
import './App.css'; // Make sure your CSS file path is correct
import Social from './Social';

export default function App() {
  return (
    <div>
      <nav className="bg-transparent">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a className='text-white' href="http://www.instagram.com/codewithbiki" target='_blank' rel="noopener noreferrer">
            <div className="flex w-full flex-wrap items-center justify-between px-3">
              <div className="ml-2">
                <h1 className="text-3xl font-bold text-neutral-800 dark:text-neutral-200">
                  Text2Image
                </h1>
              </div>
            </div>
          </a>
          <Social />
        </div>
      </nav>
    </div>
  );
}
