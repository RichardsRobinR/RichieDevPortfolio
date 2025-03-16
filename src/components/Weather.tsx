// @ts-ignore
const Weather = ({weather_cleaned_data }) => {

  return (
    <div>


        <div className="relative bg-[#c9e5ff] rounded-2xl h-40 w-80 flex flex-col justify-between pb-3 pt-3 pr-2 pl-2">
            <div className="flex justify-between ">
                <div className="flex flex-col justify-start">
                    <p className="text-lg text-black">Weather</p>
                    <p className="text-sm text-slate-500">{weather_cleaned_data.date}</p>
                </div>
                
                <p className="text-black">{weather_cleaned_data.location_name}</p>
            </div>

            <div className="flex justify-between items-end">
                <p className="text-black">{weather_cleaned_data.weather_description}</p>
                <p className="text-7xl text-black font-semibold" id="weather-text">{weather_cleaned_data.temperature + "°C"}</p>
            </div>
        </div>
    </div>
  );
}

export default Weather;