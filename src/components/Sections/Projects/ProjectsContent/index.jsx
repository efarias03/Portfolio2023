import ProjectGrid from "../ProjectsGrid"
import { useInView } from 'react-intersection-observer';

export function ProjectsContent() {
    const { ref, inView, entry } = useInView();

    const text = "Here are some things I did.".split(" ");
    let words = [];

    text.forEach(word => {
        let obj = {
            name: word,
            letters: [
                word.split("")
            ]
        }

        words.push(obj);
    })

    return (
        <section id="projects-section" className="default-section column flex">
            <div id="projects-section-header" className="default-container">
                <div ref={ref} className="splitted-text">
                    {words.map((word, i) =>
                        <div className={"splitted-word"}>
                            {word.letters.map((letter, j) =>
                                <>
                                    {letter.map((l, k) => 
                                    <div className="splitted-letters">
                                        <span style={inView ? { animation: "animateChar 1s ease", animationFillMode: "forwards", animationDelay: `${k * 0.1}s` } : {}}>
                                            {l}
                                        </span>
                                        <span style={inView ? { animation: "animateChar 1s ease", animationFillMode: "forwards", animationDelay: `${k * 0.1}s` } : {}}>
                                            {l}
                                        </span>
                                        <span style={inView ? { animation: "animateChar 1s ease", animationFillMode: "forwards", animationDelay: `${k * 0.1}s` } : {}}>
                                            {l}
                                        </span>
                                        <span style={inView ? { animation: "animateChar 1s ease", animationFillMode: "forwards", animationDelay: `${k * 0.1}s` } : {}}>
                                            {l}
                                        </span>
                                    </div>
                                    )}
                                </>
                            )}
                        </div>
                    )}
                </div>
            </div>

            <ProjectGrid />
        </section>
    )
}