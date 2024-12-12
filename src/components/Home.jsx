import { Fade, Slide } from "react-awesome-reveal"

import Hero from "../pages/Hero"
import About from "../pages/About"
import Technologies from "../pages/Technologies"
import Projects from "../pages/Projects"
import ContactForm from "./ContactForm"

const Home = () => {
    return (
        <>
            <Fade>
                <Slide>
                    <Hero/>
                    <About />
                    <Technologies />
                    <Projects />
                    <ContactForm />
                </Slide>
            </Fade>
        </>
    )
}
export default Home