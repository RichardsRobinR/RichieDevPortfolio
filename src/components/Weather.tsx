const Weather = () => {
//   const [weather, setWeather] = useState<WeatherData | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     fetchWeather().then((data) => {
//       setWeather(data);
//       setLoading(false);
//     });
//   }, []);

  return (
    <div>
      {/* {loading && <p>Loading...</p>}
      {weather && (
        <div>
          <h1>{weather.city}</h1>
          <p>{weather.temperature}°C</p>
          <p>{weather.description}</p>
        </div>
      )} */}


        <div className="relative bg-[#c9e5ff] rounded-2xl h-40 w-80 flex flex-col justify-between pb-3 pt-3 pr-2 pl-2">
            <div className="flex justify-between ">
                <div className="flex flex-col justify-start">
                    <p className="text-lg">Weather</p>
                    <p className="text-sm text-slate-500">sdjds</p>
                </div>
                
                <p>location_name</p>
            </div>

            <div className="flex justify-between items-end">
                <p>weather_description</p>
                <p className="text-7xl font-semibold" id="weather-text">°C</p>
            </div>
        </div>
    </div>
  );
}

export default Weather;