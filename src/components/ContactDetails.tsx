
const ContactDetails = ({info =""}) => {
    return (
        <div className="flex flex-row justify-start items-center w-full gap-4 py-2 ">
            <img src="logo.svg" alt="logo" className="w-6 h-6" />
            <p>{info}/</p>
        </div>
    );
}

export default ContactDetails;