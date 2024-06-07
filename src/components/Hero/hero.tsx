"use client"

import React, { useState } from "react";
import "./style.css";

const imageMapping: { [key: string]: string } = {
  "Luli.png": "/hero/Luli.png",
  "Elena.png": "/hero/Elena.png",
  "Guada.png": "/hero/Guada.png",
  "Oli.png": "/hero/Oli.png",
  "Emi.png": "/hero/Emi.png",
  "Laia.png": "/hero/Laia.png",
  "Juana.png": "/hero/Juana.png",
  "Anna.png": "/hero/Ana.png",
};

const imageNames: string[] = Object.keys(imageMapping);

/* eslint-disable */

export function Hero() {
  const [mainImage, setMainImage] = useState("/hero/bailarina.png");
  const [mainImageName, setMainImageName] = useState("Bailarina");

  const changeMainImage = (imageName: string, name: string) => {
    setMainImage(imageMapping[imageName]);
    setMainImageName(name);
  };
  
  return (
    <div className="section pb-10">
      <div className="main-image-container">
        <img src={mainImage} alt="Imagen principal" className="main-image pb-3 loading='lazy'" />
      </div>
      <div className="main-image-name text-center font-AliviaRegular text-3xl text-sky-400 font-bold">{mainImageName}</div>
      <div className="container">
        <div className="carousel">
          {imageNames.map((imageName, index) => (
            <div className="box-uno pb-10" key={index} onClick={() => changeMainImage(imageName, imageName.replace(".png", ""))}>
              <div className="box-mask"></div>
              <img src={`/hero/Foto-perfil/${imageName}`} alt={`bailarina-${index}`} className="bailarina" loading='lazy'/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;

