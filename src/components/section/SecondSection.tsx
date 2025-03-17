
export default function SecondSection() {
    return (
        <div className="xl:h-screen w-full flex flex-col md:flex-row items-center bg-zinc-900/50
         justify-between xl:justify-center mx-auto px-24 gap-10  py-6">

            <img src="r_card.svg" alt="Rotated SVG" className="w-80 h-140 -rotate-12 px-8 object-contain" />

            <p className="text-zinc-400 text-left md:text-lg xl:w-[50%]">
                Enthusiastic Backend Developer with a strong foundation in building scalable APIs, database management,
                and backend logic using Python, Django, and Node.js. Skilled in containerization with Docker, orchestration
                using Kubernetes, and integrating CI/CD pipelines for efficient deployments. Passionate about writing clean,
                maintainable code, optimizing system performance, and collaborating with cross-functional teams to deliver high
                quality applications.
            </p>

            {/*<Button>Click me</Button>*/}
        </div>
    )
}

