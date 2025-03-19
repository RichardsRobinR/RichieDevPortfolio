import CopyButton from "./CopyButton.tsx";

const ContactDetails = ({info ="",isLink = false }) => {
    return (
        <div className="flex flex-row justify-start items-center w-full gap-4 py-2 ">
            <img src="logo.svg" alt="logo" className="w-6 h-6" />

            <div className="flex justify-start items-center gap-2">
                <a href={isLink ? `https://${info}` : "#"} className={`text-zinc-400 ${isLink ? "hover:underline" : ""}`}>
                    <p>{info}/</p>
                </a>
                <CopyButton info={info}/>
            </div>
        </div>
    );
}

export default ContactDetails;