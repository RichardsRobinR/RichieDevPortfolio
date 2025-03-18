
const ProjectCard = ({title = "",des = ""}) => {
 
  return (
      <div className=" bg-zinc-950 h-[420px] max-w-[400px]
      flex flex-col  justify-between border border-zinc-800 rounded-lg overflow-hidden shadow-md shadow-zinc-800/50 ">
            <div className="flex-1">
            <img src="empty.svg" alt="Rotated SVG" className=" h-[210px] w-full object-cover" />
            </div>


            <div className="mx-6 my-7 flex flex-col justify-start flex-1 " >
            <h1 className="text-2xl tracking-tight mb-2">{title}</h1>
            <p>
                {des}
            </p>
            </div>

      </div>
  );
}


export default ProjectCard;