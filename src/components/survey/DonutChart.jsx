export default function DonutChart({ completed, total }) {
  // Ensure we have valid numbers and prevent division by zero
  const safeTotal = total || 1; // Use 1 if total is 0
  const safeCompleted = completed || 0; // Use 0 if completed is undefined/null
  
  const percentage = Math.round((safeCompleted / safeTotal) * 100);
  // Calculate the circumference of the circle
  const circumference = Math.round(2 * Math.PI * 40); // 40 is the radius
  // Calculate the dash offset based on the percentage
  const dashOffset = Math.round(circumference - (percentage / 100) * circumference);

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative h-24 w-24">
        {/* Background circle */}
        <svg className="h-full w-full -rotate-90 transform" viewBox="0 0 100 100">
          <circle
            className="stroke-white/10"
            cx="50"
            cy="50"
            r="40"
            strokeWidth="10"
            fill="transparent"
          />
          {/* Progress circle */}
          <circle
            className="stroke-emerald-500 transition-all duration-500"
            cx="50"
            cy="50"
            r="40"
            strokeWidth="10"
            fill="transparent"
            strokeDasharray={`${circumference}`}
            strokeDashoffset={String(dashOffset)} // Cast to string explicitly
          />
        </svg>
        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <span className="text-2xl font-bold">{percentage}%</span>
        </div>
      </div>
      <div className="text-center text-sm text-white">
        <span className="font-bold text-emerald-500">{safeCompleted}</span>
        <span className="text-white/70"> / </span>
        <span className="font-bold text-white/90">{safeTotal}</span>
        <div className="text-white/70">Questions Answered</div>
      </div>
    </div>
  );
} 