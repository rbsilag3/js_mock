/**
 * TopNavigation Component
 * 
 * This component renders the top navigation bar of the application.
 * It contains the application title, action buttons, and mobile menu toggle.
 * 
 * @param {boolean} isSubmitting - Whether the form is currently being submitted
 * @param {boolean} canSubmit - Whether the form can be submitted (all questions answered)
 * @param {Function} onMenuToggle - Callback function for toggling the mobile sidebar
 * @param {boolean} isSidebarOpen - Whether the sidebar is currently open on mobile
 */
export default function TopNavigation({ isSubmitting, canSubmit, onMenuToggle, isSidebarOpen }) {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex h-16 items-center justify-between bg-[#15162c] px-4 md:px-6 shadow-lg">
      {/* Mobile menu toggle button - only visible on mobile */}
      <button 
        className="md:hidden flex items-center justify-center w-10 h-10 text-white"
        onClick={onMenuToggle}
        aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
      >
        {isSidebarOpen ? (
          // X icon for close
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          // Hamburger icon for open
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>
      
      {/* Application title */}
      <h1 className="text-xl md:text-2xl font-bold text-white">Feedback Survey</h1>
      
      {/* Action buttons container */}
      <div className="flex gap-2 md:gap-4">
        {/* Save Draft button - hidden on smallest screens */}
        <button
          type="button"
          className="hidden sm:block rounded-lg bg-white/10 px-3 py-2 md:px-4 text-sm md:text-base text-white transition-colors hover:bg-white/20 disabled:opacity-50"
          onClick={() => {
            // Add save draft functionality
            console.log('Saving draft...');
          }}
          disabled={isSubmitting} // Disable when form is submitting
        >
          Save Draft
        </button>
        
        {/* Submit Survey button */}
        <button
          type="submit"
          form="survey-form" // Associates button with the form
          className="rounded-lg bg-[hsl(280,100%,70%)] px-3 py-2 md:px-4 text-sm md:text-base text-white transition-colors hover:bg-[hsl(280,100%,60%)] disabled:opacity-50"
          disabled={isSubmitting || !canSubmit} // Disable when submitting or not all questions answered
          title={!canSubmit ? "Please answer all questions to submit" : "Submit your survey"} // Tooltip explaining disabled state
        >
          {isSubmitting ? 'Submitting...' : 'Submit'} {/* Shorter text on mobile */}
          <span className="hidden md:inline"> Survey</span>
        </button>
      </div>
    </header>
  );
} 