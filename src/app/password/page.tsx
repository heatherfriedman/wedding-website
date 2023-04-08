'use client';
import { useState } from 'react';

export default function Page() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <main>
      <p> Please input password</p>
      <form>
        <div className='relative mt-6 w-1/2 rounded border border-gray-600 bg-gray-100 p-4'>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder='password'
            className='peer bg-gray-100 placeholder-transparent focus:outline-none '
          />
          <label
            htmlFor=''
            className='pointer-events-none absolute left-4 top-1 text-sm text-gray-600 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400'
          >
            Password
          </label>
          <label
            onClick={() => setShowPassword(!showPassword)}
            className='cursor-pointer rounded bg-gray-300 px-2 py-1 font-mono text-sm text-gray-600 hover:bg-gray-400'
            htmlFor='toggle'
          >
            {showPassword ? 'hide' : 'show'}
          </label>
        </div>

        <button>Enter Website</button>
      </form>
    </main>
  );
}
