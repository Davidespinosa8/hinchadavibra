import { Help } from "@/components/TextHero/help";
/* eslint-disable */
export function TextHero () {
  return (
    <div className="content-center mt-10">
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="overflow-hidden text-slate-100 font-thin text-xl">
        ¡HOLA HOLA! NOS PRESENTAMOS SOMOS UN GRUPO DE DANZA DE LA LOCALIDAD DE JUNÍN, QUE BUSCA COMPETIR A GRAN ESCALA. HACE YA VARIOS AÑOS VENIMOS JUNTAS Y HOY SE NOS PRESENTA LA OPORTUNIDAD DE PODER COMPETIR A NIVEL INTERNACIONAL REPRESENTANDO A NUESTRO PAÍS. ESTA WEB FUE CREADA CON LA FINALIDAD DE RECAUDAR DINERO PARA PODER CUMPLIR NUESTRA META. ESPERAMOS PUEDAS SUMAR Y AYUDARNOS CON LO QUE PUEDAS. HACE CLICK EN EL BOTÓN Y ...
        </p>
      </div>
      <div className="text-center mt-4">
        <Help />
      </div>
    </div>
  );
};