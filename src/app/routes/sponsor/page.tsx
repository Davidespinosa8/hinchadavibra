import Sponsor from "@/components/Sponsor/sponsor";
import ClientOnlyMotion from "@/components/Transition/ClientOnlyMotion";

export default function Sponsors() {
  return (
    <ClientOnlyMotion>
      <div>
        <Sponsor />
      </div >
    </ClientOnlyMotion>
  )
}