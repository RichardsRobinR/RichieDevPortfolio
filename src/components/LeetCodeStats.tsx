import { useEffect } from 'react';

const LeetCodeStats = ({ easy = 0, medium = 0, hard = 0 }) => {
  useEffect(() => {
    document.documentElement.style.setProperty('--easy-percentage', easy.toString());
    document.documentElement.style.setProperty('--medium-percentage', medium.toString());
    document.documentElement.style.setProperty('--hard-percentage', hard.toString());
  }, [easy, medium, hard]);

  return (
    <div className="row-span-2 flex flex-col items-center justify-center h-96 w-80 rounded-2xl bg-gray-900">
      <div className="relative w-52 h-52">
        {/* Outer Ring (easy) */}
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="50%"
            cy="50%"
            r="80"
            className="fill-none stroke-gray-800"
            strokeWidth="16"
          />
          <circle
            cx="50%"
            cy="50%"
            r="80"
            className="fill-none stroke-red-500 transition-all duration-1000 ease-out"
            strokeWidth="16"
            strokeLinecap="round"
            strokeDasharray="565.48"
            strokeDashoffset="565.48"
            style={{
              strokeDashoffset: `calc(565.48 - (565.48 * ${easy} / 100)`
            }}
          />
        </svg>

        {/* Middle Ring (medium) */}
        <svg className="absolute top-0 left-0 w-full h-full transform -rotate-90">
          <circle
            cx="50%"
            cy="50%"
            r="60"
            className="fill-none stroke-gray-800"
            strokeWidth="16"
          />
          <circle
            cx="50%"
            cy="50%"
            r="60"
            className="fill-none stroke-green-400 transition-all duration-1000 ease-out delay-150"
            strokeWidth="16"
            strokeLinecap="round"
            strokeDasharray="439.82"
            strokeDashoffset="439.82"
            style={{
              strokeDashoffset: `calc(439.82 - (439.82 * ${medium} / 100)`
            }}
          />
        </svg>

        {/* Inner Ring (hard) */}
        <svg className="absolute top-0 left-0 w-full h-full transform -rotate-90">
          <circle
            cx="50%"
            cy="50%"
            r="40"
            className="fill-none stroke-gray-800"
            strokeWidth="16"
          />
          <circle
            cx="50%"
            cy="50%"
            r="40"
            className="fill-none stroke-blue-400 transition-all duration-1000 ease-out delay-300"
            strokeWidth="16"
            strokeLinecap="round"
            strokeDasharray="314.16"
            strokeDashoffset="314.16"
            style={{
              strokeDashoffset: `calc(314.16 - (314.16 * ${hard} / 100)`
            }}
          />
        </svg>
      </div>

      <svg width="0" height="0">
        <defs>
          <linearGradient id="easy-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#FF6B6B', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#FF9F43', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="medium-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#4cd964', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#5ac8fa', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="hard-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#5ac8fa', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#007aff', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>

      {/* <style>
        {`
          @keyframes ring-glow {
            0% { filter: drop-shadow(0 0 5px rgba(239, 68, 68, 0.5)); }
            50% { filter: drop-shadow(0 0 15px rgba(239, 68, 68, 0.8)); }
            100% { filter: drop-shadow(0 0 5px rgba(239, 68, 68, 0.5)); }
          }
          circle {
            animation: ring-glow 2s ease-in-out infinite;
          }
        `}
      </style> */}
    </div>
  );
};

export default LeetCodeStats;