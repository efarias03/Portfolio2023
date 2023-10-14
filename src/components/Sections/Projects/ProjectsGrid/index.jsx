import { useState } from "react";


function Project({ i = "01", title = "Default", tags = ["Default"], description = "Description", image = "", url = "" }) {
    const [clicked, click] = useState(false);

    return (
        <div className={`project ${!clicked ? "" : "clicked"}`} onClick={() => click(!clicked)}>
            <div className="project-infos">
                <span className="project-number">{i}</span>
                <div className="project-header">
                    <span>{title}</span>
                </div>
                <div className="project-tags">
                    <ul>
                        {
                            tags.map((tag, i) =>
                                <li key={i}><div>{tag}</div></li>)
                        }
                    </ul>
                </div>
                <div className="project-expand">
                    <svg viewBox="0 -960 960 960"><path d="M440-320h80v-168l64 64 56-56-160-160-160 160 56 56 64-64v168Zm40 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                    </svg>
                </div>
            </div>
            <div className={"project-content"}>
                <div className="content-description">
                    <p>{`<h1>${description}</h1>`}</p>
                    <div className="description-images">
                        <img loading="lazy" draggable={false} src={image} />
                    </div>
                    <a className="project-link" href={url} target="blank">
                        Visit Project
                    </a>
                </div>
            </div>
        </div>
    )
}


export default function ProjectGrid() {
    let repos = [
        {
            title: "Pokedéx",
            tags: [
                "HTML5",
                "SCSS",
                "React.js",
                "StyledComponents"
            ],
            description: "Simple pokedéx consuming the PokeAPI in React.js, using StyledComponents to stylize cards based on pokemon's type.",
            image: "pokedex.jpg",
            url: "https://efarias03.github.io/PokeAPI-Consuming/"
        },
        {
            title: "Champions View",
            tags: [
                "HTML5",
                "SCSS",
                "React.js",
                "ReactRouterDom"
            ],
            description: "A challenge by Explow Studios",
            image: "explowchallenge.jpg",
            url: "https://efarias03.github.io/ExplowChallengeLOL/"
        },
        {
            title: "OpenWeatherApp",
            tags: [
                "HTML5",
                "SCSS",
                "React.js",
            ],
            description: "Consuming OpenWeather API with React.js.",
            image: "OpenWeatherApp.jpg",
            url: "https://efarias03.github.io/OpenWeatherAPI/"
        },
        {
            title: "Delivery App Wireframes",
            tags: [
                "Figma"
            ],
            description: "Basic wireframes for a Delivery App that I did long time ago.",
            image: "wireframedelivery.jpg",
            url: "https://www.figma.com/file/jI0D0oF7JY02FfU79LrS8W/Wireframes---Faculdade?type=design&node-id=0%3A1&mode=design&t=TJQCUPyGY5ABy9U5-1"
        },
        {
            title: "ToBuyList",
            tags: [
                "HTML",
                "CSS",
                "JavaScript"
            ],
            description: "Fluid To Buy List using Js, you can add, edit itens and even delete. The app stores your list with LocalStorage.",
            image: "tobuylist.jpg",
            url: "https://efarias03.github.io/To-buy-list-js/"
        },
        {
            title: "TaskManager",
            tags: [
                "HTML",
                "SCSS",
                "React.js",
                "Firebase",
                "ReactRouterDom"
            ],
            description: "TaskManager with account system using FireBase, just for college.",
            image: "whatnow.jpg",
            url: "https://efarias03.github.io/ToDoApp/"
        },
        {
            title: "Preloader GSAP",
            tags: [
                "HTML",
                "CSS",
                "JavaScript",
                "GSAP"
            ],
            description: "Preloader using CSS, and GSAP.",
            image: "preloadergsap.jpg",
            url: "https://efarias03.github.io/preloader-gsap/"
        },
        {
            title: "Luffy's hat (OnePiece)",
            tags: [
                "Blender",
            ],
            description: "Simple 3D model of Luffy's hat from One Piece",
            image: "luffyhat.jpg",
            url: "https://sketchfab.com/3d-models/luffys-strawhat-toon-shader-743af42bc42c4f10a3b69cfa0f55ff26"
        }
    ];


    return (
        <div className="projects-grid">
            {repos.map((project, i) =>
                <Project key={i} i={i + 1} title={project.title} tags={project.tags} description={project.description} image={project.image} url={project.url} />
            )}
        </div>
    )
}
