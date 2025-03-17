/**
 * RadioGroup Component
 * 
 * This component renders a group of radio buttons for Likert scale questions.
 * It features custom-styled radio buttons with improved visual design.
 * 
 * @param {string} name - The name attribute for the radio button group
 * @param {string[]} options - Array of option values (e.g., ['1', '2', '3', '4', '5'])
 * @param {Function} onChange - Callback function when a radio button is changed
 */
export default function RadioGroup({ name, options, onChange }) {
  return (
    <div className="flex justify-between">
      {options.map((option) => (
        <label 
          key={option} 
          className="flex flex-col items-center cursor-pointer"
        >
          <input
            type="radio"
            name={name}
            value={option}
            onChange={(e) => onChange(e.target.value)}
            className="appearance-none h-8 w-8 rounded-full border-2 border-[hsl(300, 0.60%, 32.00%)] bg-transparent checked:border-4 checked:bg-[hsl(56, 88.70%, 70%)] hover:border-[hsl(56, 88.70%, 80%)] transition-all cursor-pointer"
          />
          <span className="mt-1 text-xs text-white text-center">{option}</span>
        </label>
      ))}
    </div>
  );
} 