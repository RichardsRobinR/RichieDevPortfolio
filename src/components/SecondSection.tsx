

export default function SecondSection() {
    return (
        <div className="h-auto md:h-screen w-full flex flex-col md:flex-row items-center bg-gray-900 justify-around">

            <div className="md:ml-40">
            <img src="r_card.svg" alt="Rotated SVG" className="w-70 h-140 -rotate-12" />
            </div>

            <div className="md:w-1/2 w-[90%] mb-6">
                <p className="text-gray-300 text-left md:text-lg leading-relaxed ">
                    Enthusiastic Backend Developer with a strong foundation in building scalable APIs, database management,
                    and backend logic using Python, Django, and Node.js. Skilled in containerization with Docker, orchestration
                    using Kubernetes, and integrating CI/CD pipelines for efficient deployments. Passionate about writing clean,
                    maintainable code, optimizing system performance, and collaborating with cross-functional teams to deliver high
                    quality applications.
                </p>
            </div>
        </div>
    )
}

