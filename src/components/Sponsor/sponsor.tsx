/* eslint-disable */

export default function Sponsor() {
  return (
    <div className="flex flex-col items-center">
      <div className="container py-20 text-center">
        <p className="text-2xl font-Mulish text-sky-400">Las empresas e instituciones que nos eligieron para acompañarnos en este sueño:</p>
      </div>
      {[
        "/doris/doris.mp4",
        "/LaMatera/COLEGIAL.mp4",
        "/belomely/belomely.mp4",
        "/grupotesta/Grupotesta.mp4",
        "/gentilucci/Gentilucci.mp4",
        "/lafacu/LaFacu.mp4",
        "/polark/PolarK.mp4",
        "/placerurbano/Placerurbano.mp4",
        "/alcon/alcon.mp4",
        "/marinamartoreli/marinamartorelli.mp4",
        "/midebilidad/Midebilidad.mp4",
        "/lavie/Lavie.mp4",
        "/chilapets/Chilapets.mp4",
        "/upack/Upack.mp4",
        "/molar/Molar.mp4",
        "/vetelinda/Vetelinda.mp4"
      ].map((src, index) => (
        <div key={index} className="w-full flex justify-center">
          <video
            width={src.includes("placerurbano")|| src.includes("midebilidad") ? "60%" : "80%" }
            src={`/sponsors/${src}`}
            className="mb-10"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      ))}
      <div className="container pt-20 pb-40 text-center">
        <p className="text-xl font-Mulish text-blue-400">Esta pagina esta administrada por la comisión de padres <q>Hinchada oficial de Vibra</q> queremos invitar a las empresas que gusten participar de este maravilloso sueño. Quienes gusten pueden comunicarse por los medios aportados en nuestro contacto agradecemos su tiempo</p>
      </div>
   </div>
  );
}