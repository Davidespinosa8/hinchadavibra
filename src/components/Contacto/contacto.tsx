"use client"

import Link from 'next/link';
import React, { useState } from 'react';
import "@/app/globals.css";

interface FormData {
  yourName: string;
  yourEmail: string;
  yourMessage: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    yourName: '',
    yourEmail: '',
    yourMessage: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappURL = `https://wa.me/5492364357363?text=Nombre:%20${encodeURIComponent(formData.yourName)}%0AEmail:%20${encodeURIComponent(formData.yourEmail)}%0AMensaje:%20${encodeURIComponent(formData.yourMessage)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="contact-container flex flex-col lg:flex-row text-center">
      <div className="contact-info w-full lg:w-1/2 py-32 bg-transparent text-white rounded-md text-center">
        <h2 className="text-3xl font-bold mb-4">Contáctanos</h2>
        <div className="flex justify-center gap-4 mb-8">
          <Link href="mailto:legionserviciosdigitales@gmail.com" target="_blank" rel="noopener noreferrer" className="icon-bg p-2 rounded-full flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
          </Link>
          <Link href="https://wa.me/5492364357363" target="_blank" rel="noopener noreferrer" className="icon-bg p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
            </svg>
          </Link>
        </div>
        <h2 className="text-2xl font-bold my-4">Redes sociales</h2>
        <div className="social-icons flex justify-center gap-4">
          <Link href="https://www.instagram.com/somosgelatina/" target="_blank" rel="noopener noreferrer" className="bg-pink-500 p-2 rounded-full hover:bg-pink-400">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8" fill="white" stroke-width="2">
              <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z" /></svg>
          </Link>
          <Link href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="bg-red-500 p-2 rounded-full hover:bg-red-400">
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" className="w-8 h-8" fill="white" stroke-width="2"><path fill-rule="evenodd" d="M 13 5 L 16 14 L 16 20 L 18 20 L 18 14 L 21 5 L 19 5 L 17 11 L 15 5 Z M 24 9 C 22.933594 9 22.410156 9.167969 21.757813 9.703125 C 21.132813 10.230469 20.960938 10.636719 21 12 L 21 17 C 21 17.996094 21.164063 18.652344 21.765625 19.234375 C 22.390625 19.816406 22.980469 20 24 20 C 25.066406 20 25.648438 19.816406 26.25 19.234375 C 26.875 18.675781 27 17.996094 27 17 L 27 12 C 27 11.117188 26.84375 10.28125 26.238281 9.722656 C 25.613281 9.148438 24.96875 9 24 9 Z M 29 9 L 29 18 C 29 18.972656 29.980469 20 31 20 C 32.019531 20 32.558594 19.488281 33 19 L 33 20 L 35 20 L 35 9 L 33 9 L 33 17 C 32.988281 17.683594 32.183594 18 32 18 C 31.792969 18 31 17.957031 31 17 L 31 9 Z M 24 11 C 24.300781 11 25 10.996094 25 12 L 25 17 C 25 17.96875 24.324219 18 24 18 C 23.699219 18 23 17.988281 23 17 L 23 12 C 23 11.183594 23.433594 11 24 11 Z M 25.457031 21.921875 C 20.414063 21.910156 15.375 21.921875 10.332031 22 C 9.652344 22.019531 8.972656 22.117188 8.324219 22.328125 C 7.800781 22.503906 7.300781 22.746094 6.847656 23.0625 C 6.3125 23.4375 5.851563 23.910156 5.492188 24.453125 C 5.238281 24.832031 5.035156 25.246094 4.882813 25.675781 C 4.632813 26.367188 4.519531 27.097656 4.5 27.828125 C 4.449219 31.109375 4.449219 34.390625 4.5 37.671875 C 4.519531 38.296875 4.601563 38.914063 4.765625 39.519531 C 5.082031 40.660156 5.6875 41.726563 6.570313 42.527344 C 6.824219 42.757813 7.097656 42.964844 7.390625 43.144531 C 7.75 43.367188 8.136719 43.550781 8.539063 43.6875 C 9.117188 43.882813 9.722656 43.980469 10.332031 44 C 20.441406 44.1875 30.558594 44.15625 40.667969 44 C 41.347656 43.980469 42.027344 43.882813 42.675781 43.671875 C 43.199219 43.496094 43.699219 43.253906 44.152344 42.9375 C 44.6875 42.5625 45.148438 42.089844 45.511719 41.546875 C 45.761719 41.167969 45.964844 40.753906 46.121094 40.324219 C 46.367188 39.632813 46.480469 38.902344 46.5 38.171875 C 46.550781 34.753906 46.515625 31.332031 46.5 27.917969 C 46.488281 27.179688 46.382813 26.441406 46.140625 25.746094 C 45.996094 25.3125 45.796875 24.894531 45.546875 24.511719 C 45.195313 23.964844 44.738281 23.484375 44.210938 23.105469 C 43.742188 22.765625 43.222656 22.507813 42.675781 22.328125 C 42 22.109375 41.292969 22.011719 40.582031 22 C 35.542969 21.976563 30.5 21.933594 25.457031 21.921875 Z M 33.09375 23.9375 C 35.605469 23.941406 38.117188 23.960938 40.625 24 C 41.023438 24.011719 41.421875 24.058594 41.808594 24.15625 C 42.429688 24.320313 43.015625 24.628906 43.464844 25.089844 C 43.617188 25.246094 43.75 25.414063 43.871094 25.597656 C 44.039063 25.859375 44.171875 26.144531 44.265625 26.441406 C 44.421875 26.902344 44.484375 27.386719 44.5 27.875 C 44.550781 31.292969 44.550781 34.710938 44.5 38.125 C 44.484375 38.613281 44.421875 39.097656 44.265625 39.558594 C 44.171875 39.855469 44.039063 40.140625 43.871094 40.402344 C 43.75 40.585938 43.617188 40.753906 43.464844 40.910156 C 43.015625 41.371094 42.429688 41.679688 41.808594 41.84375 C 41.421875 41.941406 41.023438 41.988281 40.625 42 C 30.566406 42.15625 20.503906 42.0625 10.441406 42 C 10.011719 41.992188 9.589844 41.929688 9.179688 41.792969 C 8.921875 41.703125 8.671875 41.585938 8.441406 41.441406 C 8.253906 41.328125 8.074219 41.195313 7.914063 41.046875 C 7.296875 40.484375 6.890625 39.730469 6.679688 38.933594 C 6.566406 38.507813 6.515625 38.066406 6.5 37.625 C 6.449219 34.398438 6.484375 31.167969 6.5 27.9375 C 6.507813 27.445313 6.570313 26.957031 6.71875 26.488281 C 6.8125 26.1875 6.941406 25.902344 7.109375 25.636719 C 7.230469 25.441406 7.375 25.253906 7.535156 25.089844 C 8 24.613281 8.601563 24.304688 9.242188 24.144531 C 9.65625 24.042969 10.082031 24.003906 10.503906 24 C 18.035156 24 25.566406 23.914063 33.09375 23.9375 Z M 11 26 L 11 28 L 13 28 L 13 40 L 15 40 L 15 28 L 17 28 L 17 26 Z M 26 26 L 26 40 L 28 40 L 28 39 C 28.386719 39.449219 28.949219 40.011719 30 40 C 30.621094 39.992188 31.101563 39.492188 31.421875 39.097656 C 31.75 38.703125 32 38.242188 32 37.5 L 32 31.5 C 32 30.636719 31.726563 30.050781 31.378906 29.609375 C 31.03125 29.171875 30.523438 28.9375 29.875 28.9375 C 29.546875 28.9375 29.222656 29.03125 28.902344 29.195313 C 28.574219 29.355469 28.230469 29.640625 28 30 L 28 26 Z M 18 29 L 18 38 C 18 38.625 18.269531 38.933594 18.5 39.234375 C 18.757813 39.5625 19.308594 40 19.792969 40 C 20.183594 40 20.605469 40.015625 21.019531 39.78125 C 21.4375 39.574219 21.628906 39.4375 22 39 L 22 40 L 24 40 L 24 29 L 22 29 L 22 37 C 21.820313 37.234375 21.8125 37.992188 21 38 C 20.269531 38.007813 20 37.230469 20 37 L 20 29 Z M 36.199219 29 C 35.25 29 34.371094 29.230469 33.902344 29.710938 C 33.320313 30.308594 33.003906 30.980469 33.003906 31.886719 L 33.003906 36.59375 C 33.003906 37.613281 33.28125 38.40625 33.8125 38.984375 C 34.34375 39.5625 35.085938 39.84375 36.035156 39.84375 C 37.074219 39.84375 37.867188 39.585938 38.375 39.027344 C 38.914063 38.496094 39 37.683594 39 36.59375 L 39 36 L 37 36 L 37 36.5 C 37 37.101563 36.941406 37.566406 36.800781 37.730469 C 36.664063 37.914063 36.40625 37.996094 36 38 C 35.632813 38.003906 35.355469 37.902344 35.21875 37.671875 C 35.074219 37.460938 35 37.105469 35 36.546875 L 35 35 L 39 35 L 39 31.886719 C 39 30.886719 38.835938 30.265625 38.320313 29.734375 C 37.816406 29.203125 37.148438 29 36.199219 29 Z M 29 30.5 C 29.550781 30.5 30 31 30 32 L 30 37.023438 C 30 37.574219 29.550781 38 29 38 C 28.449219 38 28.007813 37.789063 28 37.5 L 28 31.5 C 28.007813 30.996094 28.449219 30.5 29 30.5 Z M 36 31 C 36.550781 31 37 31.386719 37 32 L 37 33 L 35 33 L 35 32 C 35.007813 31.464844 35.449219 31 36 31 Z"/></svg>
          </Link>
          <Link href="https://www.tiktok.com/@bailarinasinfantiles?_t=8mRRadASq7Z&_r=1" target="_blank" rel="noopener noreferrer" className="bg-blue-600 p-2 rounded-full hover:bg-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-8 h-8" fill="white" stroke-width="2">
              <path d="M 9 4 C 6.2495759 4 4 6.2495759 4 9 L 4 41 C 4 43.750424 6.2495759 46 9 46 L 41 46 C 43.750424 46 46 43.750424 46 41 L 46 9 C 46 6.2495759 43.750424 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.671576 6 44 7.3284241 44 9 L 44 41 C 44 42.671576 42.671576 44 41 44 L 9 44 C 7.3284241 44 6 42.671576 6 41 L 6 9 C 6 7.3284241 7.3284241 6 9 6 z M 26.042969 10 A 1.0001 1.0001 0 0 0 25.042969 10.998047 C 25.042969 10.998047 25.031984 15.873262 25.021484 20.759766 C 25.016184 23.203017 25.009799 25.64879 25.005859 27.490234 C 25.001922 29.331679 25 30.496833 25 30.59375 C 25 32.409009 23.351421 33.892578 21.472656 33.892578 C 19.608867 33.892578 18.121094 32.402853 18.121094 30.539062 C 18.121094 28.675273 19.608867 27.1875 21.472656 27.1875 C 21.535796 27.1875 21.663054 27.208245 21.880859 27.234375 A 1.0001 1.0001 0 0 0 23 26.240234 L 23 22.039062 A 1.0001 1.0001 0 0 0 22.0625 21.041016 C 21.906673 21.031216 21.710581 21.011719 21.472656 21.011719 C 16.223131 21.011719 11.945313 25.289537 11.945312 30.539062 C 11.945312 35.788589 16.223131 40.066406 21.472656 40.066406 C 26.72204 40.066409 31 35.788588 31 30.539062 L 31 21.490234 C 32.454611 22.653646 34.267517 23.390625 36.269531 23.390625 C 36.542588 23.390625 36.802305 23.374442 37.050781 23.351562 A 1.0001 1.0001 0 0 0 37.958984 22.355469 L 37.958984 17.685547 A 1.0001 1.0001 0 0 0 37.03125 16.6875 C 33.886609 16.461891 31.379838 14.012216 31.052734 10.896484 A 1.0001 1.0001 0 0 0 30.058594 10 L 26.042969 10 z M 27.041016 12 L 29.322266 12 C 30.049047 15.2987 32.626734 17.814404 35.958984 18.445312 L 35.958984 21.310547 C 33.820114 21.201935 31.941489 20.134948 30.835938 18.453125 A 1.0001 1.0001 0 0 0 29 19.003906 L 29 30.539062 C 29 34.707538 25.641273 38.066406 21.472656 38.066406 C 17.304181 38.066406 13.945312 34.707538 13.945312 30.539062 C 13.945312 26.538539 17.066083 23.363182 21 23.107422 L 21 25.283203 C 18.286416 25.535721 16.121094 27.762246 16.121094 30.539062 C 16.121094 33.483274 18.528445 35.892578 21.472656 35.892578 C 24.401892 35.892578 27 33.586491 27 30.59375 C 27 30.64267 27.001859 29.335571 27.005859 27.494141 C 27.009759 25.65271 27.016224 23.20692 27.021484 20.763672 C 27.030884 16.376775 27.039186 12.849206 27.041016 12 z" /></svg>
          </Link>
        </div>
      </div>
      <div className="contact-form w-full lg:w-1/2 py-32 bg-black text-white rounded-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className='mx-10 overflow-hidden'>
            <div className="flex flex-col">
              <label htmlFor="your-name" className="mb-1">Nombre</label>
              <input
                id="your-name"
                type="text"
                name="yourName"
                placeholder="Nombre"
                required
                className="p-2 bg-zinc-700 rounded-md"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="your-email" className="mb-1">E-mail</label>
              <input
                id="your-email"
                type="email"
                name="yourEmail"
                placeholder="E-mail"
                required
                className="p-2 bg-zinc-700 rounded-md"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="your-message" className="mb-1">Mensaje</label>
              <textarea
                id="your-message"
                name="yourMessage"
                placeholder="Mensaje"
                required
                className="bg-zinc-700 rounded-md"
                onChange={handleChange}
              ></textarea>
            </div>
            <div>
              <input
                type="submit"
                value="Enviar"
                className="bg-blue-500 p-2 rounded-md hover:bg-blue-400 cursor-pointer"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
