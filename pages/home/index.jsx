import About from "@/components/About"
import Campaigns from "@/components/Campaigns"
import Carusel from "@/components/Carusel"
import MenuWrapper from "@/components/protuct/MenuWrapper"

const Home
 = () => {
  return (
    <div>
        <Carusel/>
        <Campaigns/>
        <MenuWrapper/>
        <About/>

    </div>
  )
}

export default Home
