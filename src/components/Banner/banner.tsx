"use client"

import React, { useState, useEffect } from 'react';
import "./style.css"

/* eslint-disable */ 
export function Banner(){
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Cambia este valor según lo que consideres como un dispositivo móvil
    };

    handleResize(); // Llama a la función para establecer el estado inicial

    window.addEventListener('resize', handleResize); // Agrega un event listener para detectar cambios en el tamaño de la ventana

    return () => {
      window.removeEventListener('resize', handleResize); // Limpia el event listener al desmontar el componente
    };
  }, []);

  const openModal = (imageUrl: string) => {
    if (isMobile) {
      setModalImage(imageUrl);
    }
  }

  const closeModal = () => {
    setModalImage(null);
  }

  return (
    <div>
      <p className='text-center text-4xl pt-20 font-mono text-slate-200'>Nosotras en acción</p>
      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 ${isMobile ? 'mobile' : ''}`}>
        <div className="wrapper overflow-hidden">
          <div className="items flex flex-wrap justify-center">
            <div className="item w-full" tabIndex={0} style={{backgroundImage: "url(/Vibra/vibra1.jpg)"}} onClick={() => openModal("/Vibra/vibra1.jpg")}></div>
            <div className="item w-full" tabIndex={0} style={{backgroundImage: "url(/Vibra/vibra2.jpg)"}} onClick={() => openModal("/Vibra/vibra2.jpg")}></div>
            <div className="item w-full " tabIndex={0} style={{backgroundImage: "url(/Vibra/vibra3.jpg)"}} onClick={() => openModal("/Vibra/vibra3.jpg")}></div>
            <div className="item w-full " tabIndex={0} style={{backgroundImage: "url(/Vibra/vibra4.jpg)"}}onClick={() => openModal("/Vibra/vibra4.jpg")}></div>
            <div className="item w-full " tabIndex={0} style={{backgroundImage: "url(/Vibra/vibra5.jpg)"}} onClick={() => openModal("/Vibra/vibra5.jpg")}></div>
            <div className="item w-full " tabIndex={0} style={{backgroundImage: "url(/Vibra/vibra6.jpg)"}} onClick={() => openModal("/Vibra/vibra6.jpg")}></div>
            <div className="item w-full " tabIndex={0} style={{backgroundImage: "url(/Vibra/vibra7.jpg)"}} onClick={() => openModal("/Vibra/vibra7.jpg")}></div>
            <div className="item w-full " tabIndex={0} style={{backgroundImage: "url(/Vibra/vibra8.jpg)"}} onClick={() => openModal("/Vibra/vibra8.jpg")}></div>
            <div className="item w-full " tabIndex={0} style={{backgroundImage: "url(/Vibra/vibra9.jpg)"}} onClick={() => openModal("/Vibra/vibra9.jpg")}></div>
            <div className="item w-full " tabIndex={0} style={{backgroundImage: "url(/Vibra/vibra10.jpg)"}} onClick={() => openModal("/Vibra/vibra10.jpg")}></div>
            <div className="item w-full " tabIndex={0} style={{backgroundImage: "url(/Vibra/vibra11.jpg)"}} onClick={() => openModal("/Vibra/vibra11.jpg")}></div>
            {/* Aquí agregar el resto de las imágenes con sus respectivos onClick */}
          </div>
        </div>
        {modalImage && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal">
              <img src={modalImage} alt="modal" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Banner;
