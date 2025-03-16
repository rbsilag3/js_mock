/**
 * TopNavigation Component
 * 
 * This component renders the top navigation bar of the application.
 * It contains the application title and action buttons (Save Draft and Submit).
 * 
 * @param {boolean} isSubmitting - Whether the form is currently being submitted
 * @param {Function} onSubmit - Callback function for form submission
 * @param {boolean} canSubmit - Whether the form can be submitted (all questions answered)
 */
export default function TopNavigation({ isSubmitting, onSubmit, canSubmit }) {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex h-16 items-center justify-between bg-[#15162c] px-6 shadow-lg">
      {/* Application title */}
      <h1 className="text-2xl font-bold text-white">Feedback Survey</h1>
      
      {/* Action buttons container */}
      <div className="flex gap-4">
        {/* Save Draft button */}
        <button
          type="button"
          className="rounded-lg bg-white/10 px-4 py-2 text-white transition-colors hover:bg-white/20 disabled:opacity-50"
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
          className="rounded-lg bg-[hsl(280,100%,70%)] px-4 py-2 text-white transition-colors hover:bg-[hsl(280,100%,60%)] disabled:opacity-50"
          disabled={isSubmitting || !canSubmit} // Disable when submitting or not all questions answered
          title={!canSubmit ? "Please answer all questions to submit" : "Submit your survey"} // Tooltip explaining disabled state
        >
          {isSubmitting ? 'Submitting...' : 'Submit Survey'} {/* Dynamic button text */}
        </button>
      </div>
    </header>
  );
} 