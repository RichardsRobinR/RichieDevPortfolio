
const ContactForm = () => {
    return (
        <div className="bg-zinc-900 w-[33%] p-6 rounded-lg">

            <div className="mb-4">
                <h1 className="text-3xl font-semibold tracking-tight">Send a Message</h1>
                <p className="text-sm text-zinc-400">Fill out the form below and I'll get back to you as soon as possible.</p>
            </div>

            <form className="flex flex-col items-start justify-center">
                <p>Name</p>
                <input type="text" placeholder="Your Name" className="p-2 my-2 border-2 border-zinc-800 rounded-md w-full" />
                <p>Email</p>
                <input type="email" placeholder="Your Email" className="p-2 my-2 border-2 border-zinc-800 rounded-md w-full" />
                <p>Message</p>
                <textarea placeholder="Your Message" className="p-2  my-2 min-h-40 border-2 border-zinc-800 rounded-md w-full" ></textarea>
                <button className="p-2 my-2 bg-white text-black rounded-md w-full">Submit</button>
            </form>
        </div>
    );
}

export default ContactForm;