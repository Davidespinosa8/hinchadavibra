/* eslint-disable */

export default function Sponsor() {
  return (
    <div className="flex flex-col items-center">
      <div className="container py-20 text-center">
        <p className="text-2xl font-Mulish text-sky-400">Las empresas e instituciones que nos eligieron para acompañarnos en este sueño:</p>
      </div>
      {[
        "/BannerDorys.webp",
        "/BannerLaMatera.webp",
        "/BannerBelomely.webp",
        "/BannerGrupoTesta.webp",
        "/BannerGentilucci.webp",
        "/BannerLaFacu.webp",
        "/BannerPolarK.webp",
        "/BannerplacerUrbano.webp",
        "/BannerAlcon.webp",
        "/BannerMarinaMartorelli.webp",
        "/BannerMiDebilidadTuLenceria.webp",
        "/BannerLaVie.webp",
        "/BannerChilapets.webp",
        "/BannerUpack.webp",
        "/BannerMolar.webp",
        "/BannerVetelinda.webp",
        "/BannerAlciati.webp",
        "/BannerLabaguette.webp",
        "/BannerDisalfri.webp",
        "/BannerLaSoñada.webp",
        "/BannerLabaguette.webp",
        "/bannerCreatore.webp",
      ].map((src, index) => (
        <div key={index} className="w-full flex justify-center">
          <img
            width={src.includes("BannerPlacerUrbano") ? "60%" :
              src.includes("BannerMiDebilidadTuLenceria") ? "60%" :
              src.includes("BannerLaSoñada") ? "60%" :
              src.includes("bannerCreatore") ? "30%" : "80%"}
            src={`/sponsors/${src}`}
            className="mb-10"
          />
        </div>
      ))}
      <div className="container pt-20 pb-40 text-center">
        <p className="text-xl font-Mulish text-blue-400">Esta pagina esta administrada por la comisión de padres <q>Hinchada oficial de Vibra</q> queremos invitar a las empresas que gusten participar de este maravilloso sueño. Quienes gusten pueden comunicarse por los medios aportados en nuestro contacto agradecemos su tiempo</p>
      </div>
   </div>
  );
}
