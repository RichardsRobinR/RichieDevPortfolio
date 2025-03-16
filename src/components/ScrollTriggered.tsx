import { motion } from "framer-motion"
import type { Variants } from "framer-motion"

interface CardProps {
    hueA: number
    hueB: number
}

const cardVariants: Variants = {
    offscreen: {
        y: 300,
    },
    onscreen: {
        y: 50,
        rotate: -10,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
}

export default function ScrollTriggered() {
    return (
        <div className="h-auto md:h-screen w-full flex flex-col md:flex-row md:items-center bg-gray-900">
            <div className="my-[100px] mx-auto max-w-[500px] w-full pb-[100px]">
                <Card hueA={290} hueB={320} />
            </div>

            <div className="w-full md:w-1/2 px-0 md:px-8">
                <p className="text-gray-300 text-left md:text-lg leading-relaxed max-w-3xl mx-4 md:mx-auto">
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

function Card({ hueA, hueB }: CardProps) {
    return (
        <motion.div
            className="overflow-hidden flex justify-center items-center relative pt-5 -mb-[120px]"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.8 }}
        >
            <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 500 450"
                preserveAspectRatio="none"
            >
                <defs>
                    <linearGradient id="gradient" gradientTransform={`rotate(306 250 225)`}>
                        <stop offset="0%" stopColor={`hsl(${hueA}, 100%, 50%)`} />
                        <stop offset="100%" stopColor={`hsl(${hueB}, 100%, 50%)`} />
                    </linearGradient>
                    <clipPath id="shapeClip">
                        <path d="M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z"/>
                    </clipPath>
                </defs>
                <rect
                    width="100%"
                    height="100%"
                    fill="url(#gradient)"
                    clipPath="url(#shapeClip)"
                />
            </svg>

            <motion.svg
                className="origin-[10%_60%]"
                viewBox="0 0 300 430"
                width="300px"
                height="430px"
                variants={cardVariants}
            >
                <defs>
                    <filter id="shadow">
                        <feDropShadow dx="0" dy="0" stdDeviation="0.5" floodOpacity="0.075"/>
                        <feDropShadow dx="0" dy="0" stdDeviation="1" floodOpacity="0.075"/>
                        <feDropShadow dx="0" dy="0" stdDeviation="2" floodOpacity="0.075"/>
                        <feDropShadow dx="0" dy="0" stdDeviation="4" floodOpacity="0.075"/>
                        <feDropShadow dx="0" dy="0" stdDeviation="8" floodOpacity="0.075"/>
                    </filter>
                </defs>

                <rect
                    width="280"
                    height="410"
                    x="10"
                    y="10"
                    rx="20"
                    ry="20"
                    fill="#f3f4f6"
                    filter="url(#shadow)"
                />
                <text
                    x="50%"
                    y="50%"
                    fontSize="164"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fill="#111827"
                >
                    R
                </text>
            </motion.svg>
        </motion.div>
    )
}