import * as motion from "motion/react-client"
import type { Variants } from "motion/react"

export default function ScrollTriggered() {
    return (
        // <div style={container}>
        //     {food.map(([emoji, hueA, hueB], i) => (
        //         <Card i={i} emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} />
        //     ))}
        // </div>

        <div className="h-screen w-full flex flex-row items-center justify-between">
            <div style={container}>
                <Card i={0} emoji={<span className="text-gray-900">R</span>} hueA={290} hueB={320} key={"R"} />
            </div>
            {/* <div style={container}>
                <Card i={0} emoji={"🍅"} hueA={340} hueB={10} key={"🍅"} />
            </div> */}
            <div className="w-1/2 px-8">
            <p className="text-lg leading-relaxed max-w-2xl">
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

interface CardProps {
    emoji: React.ReactNode
    hueA: number
    hueB: number
    i: number
}

function Card({ emoji, hueA, hueB, i }: CardProps) {
    const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`

    return (
        <motion.div
            className={`card-container-${i}`}
            style={cardContainer}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.8 }}
        >
            <div style={{ ...splash, background }} />
            <motion.div style={card} variants={cardVariants} className="card">
                {emoji}
            </motion.div>
        </motion.div>
    )
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

const hue = (h: number) => `hsl(${h}, 100%, 50%)`

/**
 * ==============   Styles   ================
 */

const container: React.CSSProperties = {
    // margin: "100px auto",
    // maxWidth: 500,
    // paddingBottom: 100,
    // width: "100%",

    margin: "100px auto",
    maxWidth: 500,
    paddingBottom: 100,
    width: "100%",
}

const cardContainer: React.CSSProperties = {
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    paddingTop: 20,
    marginBottom: -120,
}

const splash: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
}

const card: React.CSSProperties = {
    fontSize: 164,
    width: 300,
    height: 430,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    background: "#f5f5f5",
    boxShadow:
        "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
    transformOrigin: "10% 60%",
}

/**
 * ==============   Data   ================
 */

// const food: [string, number, number][] = [
//     ["🍅", 340, 10],
//     ["🍊", 20, 40],
//     ["🍋", 60, 90],
//     ["🍐", 80, 120],
//     ["🍏", 100, 140],
//     ["🫐", 205, 245],
//     ["🍆", 260, 290],
//     ["🍇", 290, 320],
// ]
