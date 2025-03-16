import ProjectCard from "./ProjectCard";

const ProjectCards = () => {
    return (
        <div className="h-screen w-full flex flex-col items-center justify-around py-44">
           <ProjectCard/>
           <ProjectCard/>
           <ProjectCard/>
        </div>
    )
}

export default ProjectCards;