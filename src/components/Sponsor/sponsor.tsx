/* eslint-disable */

export default function Sponsor() {
  return (
    <div className="flex flex-col items-center">
      <div className="container py-20 text-center">
        <p className="text-2xl font-Mulish text-sky-400">Las empresas e instituciones que nos eligieron para acompañarnos en este sueño:</p>
      </div>
      {[
        "/doris/Doris.webm",
        "/LaMatera/COLEGIAL.webm",
        "/belomely/Belomely.webm",
        "/grupotesta/Testa.webm",
        "/gentilucci/Gentilucci.webm",
        "/lafacu/LaFacu.webm",
        "/polark/Polark.webm",
        "/placerurbano/PlacerUrbano.webm",
        "/alcon/Alcon.webm",
        "/marinamartoreli/marinamartorelli.webm",
        "/midebilidad/Midebilidad.webm",
        "/lavie/Lavie.webm",
        "/chilapets/Chilapets.webm",
        "/upack/Upack.webm",
        "/molar/Molar.webm",
        "/vetelinda/Vetelinda.webm"
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