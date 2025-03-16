/**
 * SideNavigation Component
 * 
 * This component renders the sidebar navigation for the survey application.
 * It displays a list of survey sections with completion status indicators
 * and a donut chart showing overall completion progress.
 * 
 * @param {Object[]} sections - Array of survey section objects
 * @param {Object} completionStats - Object containing completion statistics
 * @param {number} completionStats.totalQuestions - Total number of questions in the survey
 * @param {number} completionStats.completedQuestions - Number of questions that have been answered
 * @param {string} activeSection - ID of the currently active section
 * @param {Function} onSectionClick - Callback function when a section is clicked
 * @param {Function} onClose - Callback function to close the sidebar on mobile
 */
import DonutChart from './survey/DonutChart';

export default function SideNavigation({ 
  sections, 
  completionStats, 
  activeSection, 
  onSectionClick,
  onClose
}) {
  return (
    <aside className="w-full md:w-64 bg-[#1a1744] p-4 pt-16 md:pt-20 shadow-lg flex flex-col justify-between h-full overflow-y-auto">
      {/* Mobile close button - only visible on mobile */}
      <button 
        className="md:hidden absolute top-4 right-4 text-white"
        onClick={onClose}
        aria-label="Close menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      
      <div>
        {/* Title for the sidebar navigation */}
        <div className="mb-4 text-xl font-bold text-white">Framework Domains</div>
        
        {/* Navigation menu containing section buttons */}
        <nav className="space-y-2">
          {/* Map through each section to create navigation buttons */}
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => onSectionClick(section.id)} // Handle section selection
              className={`flex w-full items-center justify-between rounded-lg px-4 py-2 text-left text-gray-300 transition-colors hover:bg-white/10 hover:text-white ${
                // Highlight the active section
                activeSection === section.id ? 'bg-white/10 text-white' : ''
              }`}
            >
              {/* Section title */}
              <span className="flex-1">{section.title}</span>
              
              {/* Completion status checkmark on the right side */}
              <div className={`ml-2 flex h-6 w-6 items-center justify-center rounded-full ${
                // Change background color based on completion status
                section.isComplete ? 'bg-green-500' : 'bg-gray-600/50'
              }`}>
                {/* Checkmark icon - changes opacity based on completion status */}
                <svg 
                  className={`h-4 w-4 ${section.isComplete ? 'text-white' : 'text-white/40'}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </button>
          ))}
        </nav>
      </div>

      {/* Donut Chart showing overall completion progress */}
      <div className="mb-8 flex justify-center">
        <DonutChart 
          completed={completionStats.completedQuestions} // Number of completed questions
          total={completionStats.totalQuestions} // Total number of questions
        />
      </div>
    </aside>
  );
} 