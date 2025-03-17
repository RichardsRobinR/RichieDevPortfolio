import ContactDetails from "./ContactDetails.tsx";

const LetsConnectCard = () => {
    return (
        <div className="bg-zinc-900 p-6 rounded-lg max-h-[270px]">
            <h1 className="text-3xl font-semibold tracking-tight">Let's Connect</h1>

            <div className="my-6 flex flex-col">
                <ContactDetails img="" info="linkedin.com/in/richards-robin-r"/>
                <ContactDetails img="" info="richardsrobin.r15@gmail.com"/>
                <ContactDetails img="" info="github.com/RichardsRobinR"/>
                <ContactDetails img="" info="+91 9945789825"/>
            </div>

        </div>
    );
}

export default LetsConnectCard;