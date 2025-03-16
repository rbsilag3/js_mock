/**
 * DonutChart Component
 * 
 * This component renders a donut chart showing completion progress.
 * It's responsive and adjusts its size based on the viewport.
 * 
 * @param {number} completed - Number of completed questions
 * @param {number} total - Total number of questions
 */
export default function DonutChart({ completed, total }) {
  // Calculate percentage completed
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
  
  // Calculate SVG parameters for the donut chart
  const size = 120; // Chart size
  const strokeWidth = 10; // Width of the donut ring
  const radius = (size - strokeWidth) / 2; // Radius of the donut
  const circumference = 2 * Math.PI * radius; // Circumference of the donut
  const strokeDashoffset = circumference - (percentage / 100) * circumference; // Stroke offset based on percentage
  
  return (
    <div className="flex flex-col items-center">
      {/* SVG for the donut chart */}
      <div className="relative h-24 w-24 md:h-32 md:w-32">
        <svg className="h-full w-full" viewBox={`0 0 ${size} ${size}`}>
          {/* Background circle */}
          <circle
            className="text-gray-700"
            stroke="currentColor"
            fill="transparent"
            strokeWidth={strokeWidth}
            r={radius}
            cx={size / 2}
            cy={size / 2}
          />
          
          {/* Progress circle */}
          <circle
            className="text-[hsl(280,100%,70%)] transition-all duration-1000 ease-in-out"
            stroke="currentColor"
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            r={radius}
            cx={size / 2}
            cy={size / 2}
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
          />
        </svg>
        
        {/* Percentage text in the center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl md:text-2xl font-bold text-white">{percentage}%</span>
        </div>
      </div>
      
      {/* Label below the chart */}
      <div className="mt-2 text-center">
        <p className="text-sm text-gray-300">
          <span className="font-medium text-white">{completed}</span>
          <span className="mx-1">/</span>
          <span>{total}</span>
          <span className="ml-1 text-xs">questions</span>
        </p>
      </div>
    </div>
  );
} 