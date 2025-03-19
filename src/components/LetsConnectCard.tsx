import ContactDetails from "./ContactDetails.tsx";

const LetsConnectCard = () => {
    return (
        <div className="bg-zinc-900 p-6 rounded-lg max-h-[320px]">
            <h1 className="text-3xl font-semibold tracking-tight">Let's Connect</h1>

            <div className="my-6 flex flex-col">
                <ContactDetails  info="linkedin.com/in/richards-robin-r" isLink={true}/>
                <ContactDetails  info="richardsrobin.r15@gmail.com" isLink={false}/>
                <ContactDetails  info="github.com/RichardsRobinR" isLink={true}/>
                <ContactDetails  info="+91 9945789825" isLink={false}/>
            </div>

        </div>
    );
}

export default LetsConnectCard;