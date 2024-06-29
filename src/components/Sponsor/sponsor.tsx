/* eslint-disable */

export default function Sponsor() {
  return (
    <div className="flex flex-col items-center">
      <div className="container py-20 text-center">
        <p className="text-2xl font-Mulish text-sky-400">Las empresas e instituciones que nos eligieron para acompañarnos en este sueño:</p>
      </div>
<<<<<<< HEAD
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
=======
      <div className="w-full flex justify-center">
        <img width="80%" src="/sponsors/doris/doris.gif" className="mb-10" alt="Sponsor GIF"/>
      </div>
      <div className="w-full flex justify-center">
        <img width="80%" src="/sponsors/LaMatera/COLEGIAL.gif" className="mb-10" alt="Sponsor GIF 2"/>
      </div>
      <div className="w-full flex justify-center">
        <img width="80%" src="/sponsors/belomely/belomely.gif" className="mb-10" alt="Sponsor GIF 3"/>
      </div>
      <div className="w-full flex justify-center">
        <img width="80%" src="/sponsors/grupotesta/Grupotesta.gif" className="mb-10" alt="Sponsor GIF 4"/>
      </div>
      <div className="w-full flex justify-center">
        <img width="80%" src="/sponsors/gentilucci/Gentilucci.gif" className="mb-10" alt="Sponsor GIF 5"/>
      </div>
      <div className="w-full flex justify-center">
        <img width="80%" src="/sponsors/lafacu/LaFacu.gif" className="mb-10" alt="Sponsor GIF 6"/>
      </div>
      <div className="w-full flex justify-center">
        <img width="80%" src="/sponsors/polark/PolarK.gif" className="mb-10" alt="Sponsor GIF 7"/>
      </div>
      <div className="w-full flex justify-center">
        <img width="65%" src="/sponsors/placerurbano/Placerurbano.gif" className="mb-10" alt="Sponsor GIF 8"/>
      </div>
      <div className="w-full flex justify-center">
        <img width="80%" src="/sponsors/alcon/Alcon.gif" className="mb-10" alt="Sponsor GIF 9"/>
      </div>
      <div className="w-full flex justify-center">
        <img width="80%" src="/sponsors/marinamartoreli/marinamartorelli.gif" className="mb-10" alt="Sponsor GIF 10"/>
      </div>
      <div className="w-full flex justify-center">
        <img width="55%" src="/sponsors/midebilidad/Midebilidad.gif" className="mb-10" alt="Sponsor GIF 11"/>
      </div>
      <div className="w-full flex justify-center">
        <img width="80%" src="/sponsors/lavie/Lavie.gif" className="mb-10" alt="Sponsor GIF 12"/>
      </div>
>>>>>>> b36dcc583a275b5ca04c5a149c6d3ce143b3381d
      <div className="container pt-20 pb-40 text-center">
        <p className="text-xl font-Mulish text-blue-400">Esta pagina esta administrada por la comisión de padres <q>Hinchada oficial de Vibra</q> queremos invitar a las empresas que gusten participar de este maravilloso sueño. Quienes gusten pueden comunicarse por los medios aportados en nuestro contacto agradecemos su tiempo</p>
      </div>
   </div>
  );
}