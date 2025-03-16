export default function RadioGroup({ name, onChange }) {
  const likertOptions = ['1', '2', '3', '4', '5'];
  
  return (
    <>
      {likertOptions.map((option, index) => (
        <td key={index} className="py-4 text-center">
          <div className="relative mx-auto h-8 w-8">
            <input
              type="radio"
              id={`${name}-${index}`}
              name={name}
              value={index + 1}
              className="h-6 w-6 cursor-pointer appearance-none rounded-full border-2 border-[hsl(280,100%,70%)] bg-transparent transition-all checked:border-4 checked:bg-[hsl(280,100%,70%)] hover:border-[hsl(280,100%,80%)]"
              required
              onChange={(e) => onChange?.(name, e.target.value)}
            />
          </div>
        </td>
      ))}
    </>
  );
} 