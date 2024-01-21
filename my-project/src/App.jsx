import React from 'react';
import './App.css'; // Make sure your CSS file path is correct
import Social from './Social';

export default function App() {
  return (
    <div>
      <nav className="bg-transparent">
        <div className="max-w-screen-xl flex items-start justify-between mx-auto p-4">
          <div className="flex items-center">
            <div className="ml-2">
              <h1 className="text-3xl font-bold text-neutral-800 dark:text-neutral-200">
                Text2Image
              </h1>
            </div>
          </div>
          <Social />
        </div>
      </nav>
    </div>
  );
}
