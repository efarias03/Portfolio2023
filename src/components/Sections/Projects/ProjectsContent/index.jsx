import ProjectGrid from "../ProjectsGrid"

export const ProjectsContent = () => {
    return (
        <section id="projects-section" className="default-section column flex">
            <div id="projects-section-header" className="default-container">
                <h1 className="title-small">Projects</h1>
            </div>

            <ProjectGrid />
        </section>
    )
}