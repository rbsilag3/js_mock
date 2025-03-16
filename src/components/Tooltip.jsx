export default function Tooltip({ message }) {
  return (
    <div className="fixed right-0 top-0 h-screen w-96 bg-[#1a1744] p-6 shadow-lg">
      <div className="mt-16 rounded-lg bg-white/10 p-6 text-white">
        <h3 className="mb-4 text-xl font-semibold">Help Information</h3>
        <p className="text-sm leading-relaxed text-gray-200">{message}</p>
      </div>
    </div>
  );
} 