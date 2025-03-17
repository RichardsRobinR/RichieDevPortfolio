import LeetCodeStats from "./LeetCodeStats";
import Weather from "./Weather";
import YearProgressBar from "./YearProgressBar";
import {useEffect, useState} from "react";

interface ApiResponse {
    completed_percentage: number;
    weather_cleaned_data: WeatherCleanedData;
    leetcode_cleaned_data: {
        all_count: number;
        easy_count: number;
        medium_count: number;
        hard_count: number;
        all_completed_count: number;
        easy_completed_count: number;
        medium_completed_count: number;
        hard_completed_count: number;
    };
}

interface WeatherCleanedData {
    temperature: number;
    pressure: number;
    humidity: number;
    weather_description: string;
    location_name: string;
    date: string;
}


// const API_URL = "http://127.0.0.1:8000/";
const API_URL = "https://richiedevportfolio.onrender.com/";
const API_OPTIONS = {
    method : 'GET',
    headers: {
        accept : 'application/json',
    },
    mode: 'cors' as RequestMode
}


const Widgets = () => {

    const [apiData, setApiData] = useState<ApiResponse | null>(null);
    const [loading, setLoading] = useState(true);


    const fetchData = async ()=> {
        try {
            const response = await fetch(API_URL,API_OPTIONS);


            if (!response.ok) {
                throw new Error("Failed to fetch data.");
            }
            const data = await response.json();


            setApiData(data);


        }
        catch (error) {
            console.error(error);
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();

    }, []);

    return (
        <div className=" flex flex-col items-center justify-around h-screen w-full">

            <h1 className="text-gray-300 my-6  text-3xl md:text-8xl">Widgets</h1>
            <div className="grid md:grid-cols-2 place-items-center gap-4">
                {loading ? (<p>Loading</p>) : apiData &&
                    <>
                    <LeetCodeStats easy={apiData.leetcode_cleaned_data["easy_completed_count"]} hard={apiData.leetcode_cleaned_data["hard_completed_count"]} medium={apiData.leetcode_cleaned_data["medium_completed_count"]}/>
                    <YearProgressBar percentage={apiData.completed_percentage} />
                    <Weather weather_cleaned_data={apiData.weather_cleaned_data}/>
                    {/*<XTweet/>*/}
                    </>
                }

            </div>
        </div>
    );


}

export default Widgets;