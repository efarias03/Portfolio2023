import { ScrollCircle } from "../../../ScrollComponent";
import { HeroCanvas } from "../HeroCanvas";

const isMobile = window.innerWidth < 768;

const text = document.querySelector(".scroll-text p");

export const HeroContent = () => (
    <section id="hero-section" className="default-section flex">
        <div className="default-container">
            <div className="default-container column">
                <h1 className="title-large hero-content-left">
                    Creative Developer & Design Enthusiast
                </h1>
            </div>
            <div className="default-container column">
                <p className="text-large stroke-black hero-content-right">
                    <b>Brazilian</b> Front End Developer with a variety of tools for my team. I love working out, watching <b>anime</b>, listening some cool <b>songs</b>, playing <b>videogames</b> and of course <b>coding</b>
                </p>
                <a className="default-button" id="hero-button">Contact</a>
                <ScrollCircle />
            </div>
        </div>

        {/* <HeroCanvas /> */}
    </section>
)