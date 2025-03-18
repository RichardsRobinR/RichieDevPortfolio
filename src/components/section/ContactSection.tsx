import ContactForm from "../ContactForm.tsx";
import LetsConnectCard from "../LetsConnectCard.tsx";


const ContactSection = () => {
    return (

        <div className=" w-full bg-zinc-900/50
         flex justify-center items-center xd:h-screen px-16">
            <div className=" container grid grid-cols-1 md:grid-cols-2 gap-6 py-6 max-w-[360px] md:max-w-4xl">
                <LetsConnectCard/>
                <ContactForm/>
            </div>
        </div>
    );
}

export default ContactSection;