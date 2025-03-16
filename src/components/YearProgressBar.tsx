const YearProgressBar = () => {
  return (
    <div>
      <div className="relative bg-[#fdfffd] rounded-2xl h-40 w-80 flex flex-col justify-between pb-3 pt-3 pr-2 pl-2">
        <div id="progress-text" className="text-8xl font-semibold text-black">0</div>
        <div className="relative w-full bg-gray-200 rounded-md h-8">
        <div id="progress-bar" style={{ width: '10%' }} className="absolute flex items-center justify-end top-0 left-0 bg-black h-8 rounded-md" >
            <div className=" bg-white rounded-lg w-1 h-5 mr-1" ></div>
        </div>
        </div>
        </div>
    </div>
  );
}

export default YearProgressBar;