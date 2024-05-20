"use client"

import React, { useState } from "react";
import "./style.css";

const imageMapping: { [key: string]: string } = {
  "Luli.png": "/Hero/Luli.png",
  "Elena.png": "/Hero/Elena.png",
  "Guada.png": "/Hero/Guada.png",
  "Oli.png": "/Hero/Oli.png",
  "Emi.png": "/Hero/Emi.png",
  "Laia.png": "/Hero/Laia.png",
  "Juana.png": "/Hero/Juana.png",
  "Isa.png": "/Hero/Isa.png",
  "Anna.png": "/Hero/Ana.png",
};

const imageNames: string[] = Object.keys(imageMapping);

/* eslint-disable */

export function Hero() {
  const [mainImage, setMainImage] = useState("/Hero/bailarina.png");
  const [mainImageName, setMainImageName] = useState("Bailarina");

  const changeMainImage = (imageName: string, name: string) => {
    setMainImage(imageMapping[imageName]);
    setMainImageName(name);
  };
  
  return (
    <div className="section pb-10">
      <div className="main-image-container">
        <img src={mainImage} alt="Imagen principal" className="main-image pb-3" />
      </div>
      <div className="main-image-name text-center font-AliviaRegular text-3xl text-sky-400 font-bold">{mainImageName}</div>
      <div className="container">
        <div className="carousel">
          {imageNames.map((imageName, index) => (
            <div className="box-uno pb-10" key={index} onClick={() => changeMainImage(imageName, imageName.replace(".png", ""))}>
              <div className="box-mask"></div>
              <img src={`/Hero/Foto-perfil/${imageName}`} alt={`bailarina-${index}`} className="bailarina" />
              {/* <div className="image-name-diagonal text-center font-handlee text-l font-bold text-sky-400">{imageName.replace(".png", "")}</div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;

