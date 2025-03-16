/**
 * Tooltip Component
 * 
 * This component displays help information in two different ways:
 * - On desktop: A sidebar on the right side of the screen
 * - On mobile: A small popup at the bottom of the screen that can be dismissed
 * 
 * @param {string} message - The message to display in the tooltip
 * @param {boolean} isVisible - Whether the mobile tooltip is visible
 * @param {Function} onClose - Function to call when closing the mobile tooltip
 */
export default function Tooltip({ message, isVisible, onClose }) {
  return (
    <>
      {/* Desktop tooltip (sidebar) - hidden on mobile */}
      <div className="hidden md:block fixed right-0 top-0 h-screen w-96 bg-[#1a1744] p-6 shadow-lg">
        <div className="mt-16 rounded-lg bg-white/10 p-6 text-white">
          <h3 className="mb-4 text-xl font-semibold">Help Information</h3>
          <p className="text-sm leading-relaxed text-gray-200">{message}</p>
        </div>
      </div>
      
      {/* Mobile tooltip (bottom popup) - only shown when isVisible is true */}
      {isVisible && (
        <div className="md:hidden fixed bottom-4 left-4 right-4 bg-[#1a1744] rounded-lg p-4 shadow-lg z-50 animate-fade-in">
          <div className="flex justify-between items-start">
            <p className="text-sm text-white">{message}</p>
            <button 
              className="ml-2 text-white/70 hover:text-white"
              onClick={onClose}
              aria-label="Close help"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
} 