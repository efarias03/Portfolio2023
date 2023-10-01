import { useEffect, useState } from "react";


function Project({ i = "01", title = "Default", tags = ["Default"], description = "Description", image = "", url = "" }) {
    const [clicked, click] = useState(false);

    // useEffect(() => {
    //     console.log(clicked);
    // }, [clicked])

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
                    \
                </div>
            </div>
            <div className={"project-content"}>
                <div className="content-description">
                    <p>{`<p>${description}</p>`}</p>
                    <div className="description-images">
                        <img loading="lazy" draggable={false} src={image} />
                    </div>
                    <a className="project-link" href={url} target="blank">
                        See Project
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
                "Firebase"
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
