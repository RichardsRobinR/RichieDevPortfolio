
export default function SecondSection() {
    return (
        <div className="xl:h-screen w-full  flex flex-col items-center bg-zinc-900/50
         justify-around mx-auto py-6 px-8 gap-12 ">
            <h1 className="text-gray-300  text-3xl  md:text-6xl">About</h1>

            <div className="container grid md:grid-cols-2 gap-8 justify-items-center items-center">
                <img src="r_card.svg" alt="Rotated SVG" className="w-64 h-80 -rotate-12 object-fill" />

                <p className="text-zinc-400 text-left md:text-lg ">
                    Enthusiastic Backend Developer with a strong foundation in building scalable APIs, database management,
                    and backend logic using Python, Django, and Node.js. Skilled in containerization with Docker, orchestration
                    using Kubernetes, and integrating CI/CD pipelines for efficient deployments. Passionate about writing clean,
                    maintainable code, optimizing system performance, and collaborating with cross-functional teams to deliver high
                    quality applications.
                </p>
            </div>

            {/*<Button>Click me</Button>*/}
        </div>
    )
}

