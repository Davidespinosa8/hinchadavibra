import { Banner } from "@/components/Banner/banner";
import Buttons from "@/components/Buttons/buttons";
import { Hero } from "@/components/Hero/hero";
import { TextHero } from "@/components/TextHero/texthero";
import { Eventos } from "@/components/Eventos/eventos"
import ClientOnlyMotion from "@/components/Transition/ClientOnlyMotion";

export default function About() {
  return (
    <ClientOnlyMotion>
      <div className="pt-16">
        <div className="flex flex-wrap text-center">
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
            <Hero />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
            <TextHero />
          </div>
        </div>
        <div className="pt-10">
          <Buttons />
        </div>
        <Banner />
        <div className="py-10 pb-20">
          <Eventos />
        </div>
      </div>
    </ClientOnlyMotion>
  )
}