import About from "@/components/About"
import Campaigns from "@/components/Campaigns"
import Carusel from "@/components/Carusel"
import Input from "@/components/form/input"
import MenuWrapper from "@/components/protuct/MenuWrapper"

const Home
 = () => {
  return (
    <div>
        <Carusel/>
        <Campaigns/>
        <MenuWrapper/>
        <About/>
        <div className="container px-40 mt-4">
        <Input/>

        </div>

    </div>
  )
}

export default Home
