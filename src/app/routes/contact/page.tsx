import Contacto from "@/components/Contacto/contacto";
import ClientOnlyMotion from "@/components/Transition/ClientOnlyMotion";

export default function Contact() {
  
  return (
    <ClientOnlyMotion>
      <div>
        <Contacto />
      </div>
    </ClientOnlyMotion>
  )
}