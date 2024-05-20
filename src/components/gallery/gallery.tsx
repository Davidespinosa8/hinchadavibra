"use client"
import React, { useEffect } from 'react';
import "./style.css";

/* eslint-disable */
declare global {
  interface Document {
    startViewTransition?: (callback: () => void) => void;
  }
}

export function Gallery() {
  useEffect(() => {
    const gallery = document.getElementById('gallery');

    if (!gallery) return; // Verificación de nulidad

    document.querySelectorAll<HTMLInputElement>('#gallery input').forEach(radio => {
      radio.onclick = (e: MouseEvent) => {
        if (!document.startViewTransition) return;
        
        e.preventDefault();

        const target = e.target as HTMLInputElement;
        const parent = target.parentNode as HTMLElement;
        
        function mutate() {
          target.checked = true;
          if (parent) {
            parent.style.zIndex = '';
          }
        }

        if (parent) {
          parent.style.zIndex = '2';
        }
        
        document.startViewTransition
          ? document.startViewTransition(() => mutate())
          : mutate();
      };
    });

    function flipGallery() {
      if (!gallery) return; // Verificación de nulidad
      function mutate(vertical = false) {
        if (document.startViewTransition)
          document.startViewTransition(() =>
            vertical
              ? gallery.classList.add('portrait')
              : gallery.classList.remove('portrait')
          );
      }
      mutate(window.innerWidth <= 768);
    }

    (window as any).resizeEndTimer = null;
    window.onresize = () => {
      clearTimeout((window as any).resizeEndTimer);
      (window as any).resizeEndTimer = setTimeout(flipGallery, 100);
    };

    flipGallery();

    return () => {
      window.onresize = null;
    };
  }, []);

  return (
    <div className='content text-center grid place-content-center'>
      <fieldset id="gallery" className="hub text-center py-10">
        <div>
          <input type="radio" id="image-1" name="gallery" value="image-1" defaultChecked />
          <img src="/galeria/1.png"  />
          <label htmlFor="image-1">Cyber Wolf</label>
        </div>

        <div>
          <input type="radio" id="image-2" name="gallery" value="image-2" />
          <img src="/galeria/2.png" alt="Flying cars"  />
          <label htmlFor="image-2">Flying cars</label>
        </div>

        <div>
          <input type="radio" id="image-3" name="gallery" value="image-3" />
          <img src="/galeria/3.png" alt="Flying cars 2"  />
          <label htmlFor="image-3">Flying cars 2</label>
        </div>

        <div>
          <input type="radio" id="image-4" name="gallery" value="image-4" />
          <img src="/galeria/4.png" alt="Flying cars 3" />
          <label htmlFor="image-4">Flying cars 3</label>
        </div>

        <div>
          <input type="radio" id="image-5" name="gallery" value="image-5" />
          <img src="/galeria/5.png" alt="Cyber T-Rex"  />
          <label htmlFor="image-5">Cyber T-Rex</label>
        </div>

        <div>
          <input type="radio" id="image-6" name="gallery" value="image-6" />
          <img src="/galeria/6.png" alt="Cyber Raptor"  />
          <label htmlFor="image-6">Cyber Raptor</label>
        </div>

        <div>
          <input type="radio" id="image-7" name="gallery" value="image-7" />
          <img src="/galeria/7.png" alt="Cyber freeway"  />
          <label htmlFor="image-7">Cyber freeway</label>
        </div>

        <div>
          <input type="radio" id="image-8" name="gallery" value="image-8" />
          <img src="/galeria/8.png" alt="Cyber freeway"  />
          <label htmlFor="image-8">Cyber freeway</label>
        </div>

        <div>
          <input type="radio" id="image-9" name="gallery" value="image-9" />
          <img src="/galeria/9.png" alt="Cyber freeway"  />
          <label htmlFor="image-9">Cyber freeway</label>
        </div>
        </fieldset>
      </div>
  );
};