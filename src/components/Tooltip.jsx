/**
 * Tooltip Component
 * 
 * This component displays help information in two different ways:
 * - On desktop: A sidebar on the right side of the screen
 * - On mobile: A compact popup that appears when help is requested
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
      
      {/* Mobile tooltip (popup) - only shown when isVisible is true */}
      {isVisible && (
        <>
          {/* Semi-transparent overlay */}
          <div 
            className="md:hidden fixed inset-0 bg-black/50 z-40 animate-fade-in"
            onClick={onClose}
          ></div>
          
          {/* Popup content */}
          <div className="md:hidden fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[85%] bg-[#1a1744] rounded-lg p-5 shadow-lg z-50 animate-popup-in">
            <div className="flex flex-col">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-white">Help</h3>
                <button 
                  className="text-white/70 hover:text-white"
                  onClick={onClose}
                  aria-label="Close help"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="text-sm text-white">{message}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
} 