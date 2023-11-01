import { ScrollCircle } from "../../../ScrollComponent";

export const HeroContent = () => (
    <section id="hero-section" className="default-section flex">
        <div className="default-container">
            <div id="hero-left-text" className="default-container column">
                <h1 className="title-large hero-content-left">
                    Creative Developer & Design Enthusiast
                </h1>
            </div>
            <div id="hero-right-text" className="default-container column">
                <p className="text-large stroke-black hero-content-right">
                    <b>Brazilian</b> Front End Developer with a variety of tools for my team. I love working out, watching <b>anime</b>, listening some cool <b>songs</b>, playing or creating <b>videogames</b>, modeling 3D stuff and of course <b>coding</b>.
                </p>
                <a className="default-button" id="hero-button" href="#footer-section">Contact</a>
                <ScrollCircle />
            </div>
        </div>
    </section>
)