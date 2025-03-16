import DataComponent from "../Api/DataComponent";
import ErrorBoundary from "../Api/ErrorBoundary";
import LeetCodeStats from "./LeetCodeStats";
import Weather from "./Weather";
import YearProgressBar from "./YearProgressBar";



interface WeatherData {
    temperature: number;
    pressure: number;
    humidity: number;
    weather_description: string;
    location_name: string;
    date: string;
  }
  
  interface LeetCodeData {
    all_count: number;
    easy_count: number;
    medium_count: number;
    hard_count: number;
    all_completed_count: number;
    easy_completed_count: number;
    medium_completed_count: number;
    hard_completed_count: number;
  }
  
  interface Metrics {
    completed_percentage: number;
    weather_cleaned_data: WeatherData;
    leetcode_cleaned_data: LeetCodeData;
  }

const Widgets = () => {
    return (
    <ErrorBoundary fallback={<div>Critical error occurred!</div>}>
    <DataComponent<Metrics>
      endpoint=""
      render={(MetricsData) => (
          <div className="bg-slate-950 flex flex-col items-center justify-around h-screen ">

            <h1 className="text-gray-300 text-8xl">Hi, Richie</h1>
            <div className="grid grid-cols-2 place-items-center gap-4">
                <LeetCodeStats easy={MetricsData.leetcode_cleaned_data.easy_completed_count} medium={MetricsData.leetcode_cleaned_data.medium_completed_count} hard={MetricsData.leetcode_cleaned_data.hard_completed_count}/>
                <YearProgressBar/>
                <Weather/>
            </div>
        </div>
      )}
      loadingFallback={<div className="h-screen">Loading users...</div>}
      errorFallback={(error) => <div>User Error: {error}</div>}
    />
  </ErrorBoundary>
    );

//   return (
//     <div className="bg-slate-950 flex flex-col items-center justify-around h-screen ">

//     <h1 className="text-gray-300 text-8xl">Hi, Richie</h1>
//     <div className="grid grid-cols-2 place-items-center gap-4">
//         <LeetCodeStats/>
//         <YearProgressBar/>
//         <Weather/>
//     </div>
//     </div>
//   );
}

export default Widgets;