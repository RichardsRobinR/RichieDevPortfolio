import ProjectCard from "../ProjectCard.tsx";

const ThirdSection = () => {
    return(
        <div className=" w-full bg-zinc-900
         flex justify-center items-center xl:h-screen py-6 px-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
            </div>
        </div>
    );
}

export default ThirdSection;

