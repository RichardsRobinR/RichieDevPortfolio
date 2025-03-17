import ProjectCard from "./ProjectCard.tsx";

const ThirdSection = () => {
    return(
        <div className="h-auto w-full bg-zinc-900
         flex justify-center items-center md:h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
            </div>
        </div>
    );
}

export default ThirdSection;

