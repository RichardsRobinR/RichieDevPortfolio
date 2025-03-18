import ProjectCard from "../ProjectCard.tsx";

const ThirdSection = () => {
    return(
        <div className=" w-full bg-zinc-900
         flex flex-col justify-around items-center xl:h-screen py-6 px-8">

            <h1 className="text-gray-300  text-3xl  md:text-6xl mb-5">Projects</h1>

            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  justify-items-center items-center ">
                <ProjectCard title="CI/CD Pipline for Django" des="Implemented a CI/CD pipeline using
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

