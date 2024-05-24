import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '@/app/globals.css';

export function Footer() {
  return (
    <div>
      <hr className="text-white mx-5 inset-x-0 bottom-0" />
      <footer className="bg-black pb-5">
        <div className="max-w-screen-xl px-4 pt-8 mx-auto sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center text-teal-300 sm:justify-start">
              <Link href= "/">
                <Image src="/Logo/vibrasf.png" width="80" height="40" alt="Vibra" className='vibra' />
              </Link>
            </div>
            
            <p className="mt-4 text-l text-center text-gray-400 lg:text-right lg:mt-0">
              Creado por &nbsp; <Link href={'https://myprofile-delta-roan.vercel.app/'}>
                <span className='font-Changa text-2xl'>D-8</span>
              </Link>
            </p>
          </div>
          <div className="mt-4 text-center text-gray-400">
            &copy; {new Date().getFullYear()} HinchadaVibra. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
