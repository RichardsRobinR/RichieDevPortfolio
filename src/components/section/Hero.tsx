import { motion } from "framer-motion";
import HeroTyping from "../HeroTying.tsx";

const Hero = () => {
    return(
        <div className="h-screen w-full flex flex-col items-center justify-center px-16 ">
            
            <motion.h1
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.4,
                scale: { type: "spring", bounce: 0.5 },
            }}
            className="text-5xl text-white text-center md:text-8xl font-bold"
            >
                Hi, I'm <span className="text-emerald-500">Richards Robin R</span>

            </motion.h1>
        
            <HeroTyping/>
            
        </div>
    );
}

export default Hero;



