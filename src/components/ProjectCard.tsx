
const ProjectCard = () => {
 
  return (
      <div className=" bg-zinc-950 h-[420px] max-w-[400px]
      flex flex-col  justify-between border border-zinc-800 rounded-lg overflow-hidden ">
            <div className="flex-1">
            <img src="empty.svg" alt="Rotated SVG" className=" h-[210px] w-full object-cover" />
            </div>


            <div className="mx-6 my-7 flex flex-col justify-start flex-1 " >
            <h1 className="text-3xl">Title</h1>
            <p>
              This is the description of the content below the image.
            </p>
            </div>

      </div>
  );
}


export default ProjectCard;