import About from "@/components/About"
import Campaigns from "@/components/Campaigns"
import Carusel from "@/components/Carusel"
import Reservatinon from "@/components/Reservation"
import MenuWrapper from "@/components/protuct/MenuWrapper"

const Home
 = () => {
  return (
    <div>
        <Carusel/>
        <Campaigns/>
        <MenuWrapper/>
        <About/>
        <Reservatinon/> 
     

    </div>
  )
}

export default Home
