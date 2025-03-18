import ProjectCard from "../ProjectCard.tsx";

const ThirdSection = () => {
    return(
        <div className=" w-full bg-zinc-900
         flex justify-center items-center xl:h-screen py-6 px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                <ProjectCard title="CI/CD Pipline for Django App" des="Successfully designed and implemented a CI/CD pipeline using
Jenkins, automating the build, test, and deployment processes for a Django application."/>
                <ProjectCard title="CodeQuote Bot" des="Developed an automated bot that tweets computer science-themed meme quotes, engaging the tech community
with humorous and relatable content"/>
                <ProjectCard title="CodeQuote Bot" des="Developed an automated bot that tweets computer science-themed meme quotes, engaging the tech community
with humorous and relatable content"/>
            </div>
        </div>
    );
}

export default ThirdSection;

