/**
 * Main App Component
 * 
 * This is the root component of the survey application that orchestrates all other components.
 * It manages the overall state, handles form submission, and renders the main layout.
 */
import { useState, useMemo } from "react";
import Tooltip from "./components/Tooltip";
import TopNavigation from "./components/TopNavigation";
import SideNavigation from "./components/SideNavigation";
import SurveySection from "./components/survey/SurveySection";
import { sections as initialSections } from "./data/surveyData";
import { useSurveyForm } from "./hooks/useSurveyForm";
import { saveSurveyResponse } from "./utils/sharepoint";

export default function App(props) {
  // State for managing the help tooltip message
  const [tooltipMessage, setTooltipMessage] = useState("Select a question mark icon to see help information");
  
  // State for tracking form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Use the custom hook to manage survey form state
  const { 
    sections,            // Array of survey sections with their questions and completion status
    handleRadioChange,   // Function to handle radio button changes
    completionStats,     // Statistics about survey completion
    activeSection,       // ID of the currently active section
    setActiveSection,    // Function to change the active section
    answers              // Object containing all question answers
  } = useSurveyForm(initialSections);

  /**
   * Check if all questions have been answered
   * This is memoized to avoid recalculating on every render
   */
  const canSubmit = useMemo(() => {
    // Get total number of questions across all sections
    const totalQuestions = sections.reduce((total, section) => 
      total + section.questions.length, 0
    );
    
    // Check if all questions have answers
    return Object.keys(answers).length === totalQuestions;
  }, [sections, answers]);

  /**
   * Handle form submission
   * Collects all responses and submits them to SharePoint if available
   * @param {Event} e - Form submission event
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Don't submit if not all questions are answered
    if (!canSubmit) {
      alert('Please answer all questions before submitting.');
      return;
    }
    
    try {
      // Set submitting state to show loading indicators
      setIsSubmitting(true);
      
      // Collect all responses from sections and questions
      const responseData = sections.map(section => ({
        sectionId: section.id,
        sectionTitle: section.title,
        questions: section.questions.map(question => ({
          questionId: question.id,
          questionText: question.text,
          answer: answers[question.id] ?? 'Not answered',
          comments: document.getElementById(`${question.id}-comment`)?.value ?? ''
        }))
      }));
      
      // If SharePoint context is available, save to SharePoint
      if (props.context && props.sharepointConfig?.siteUrl) {
        await saveSurveyResponse({
          title: 'Survey Response',
          data: responseData
        });
        alert('Survey submitted successfully to SharePoint!');
      } else {
        // Otherwise, just show a success message
        alert('Survey submitted successfully!');
        console.log('Survey data:', responseData);
      }
    } catch (error) {
      // Handle any errors during submission
      console.error('Submission error:', error);
      alert(`Failed to submit survey: ${error.message}`);
    } finally {
      // Reset submitting state regardless of success or failure
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar navigation showing sections and completion status */}
      <SideNavigation 
        sections={sections} 
        completionStats={completionStats}
        activeSection={activeSection}
        onSectionClick={setActiveSection}
      />
      
      <div className="flex flex-1 flex-col">
        {/* Top navigation bar with submit button */}
        <TopNavigation 
          isSubmitting={isSubmitting} 
          canSubmit={canSubmit}
        />
        
        {/* Main content area with the survey form */}
        <main className="flex flex-1 overflow-y-auto bg-[#2e026d] pt-16">
          <form 
            id="survey-form" 
            className="w-[calc(100%-24rem)] space-y-8 p-8"
            onSubmit={handleSubmit}
          >
            {/* Only show the currently active section */}
            {sections
              .filter((section) => section.id === activeSection)
              .map((section) => (
                <SurveySection 
                  key={section.id}
                  id={section.id}
                  title={section.title}
                  questions={section.questions} 
                  onHelpClick={setTooltipMessage}
                  onRadioChange={(questionId, value) => {
                    handleRadioChange(section.id, questionId, value);
                  }}
                />
              ))}
          </form>
          
          {/* Help tooltip that displays contextual help information */}
          <Tooltip message={tooltipMessage} />
        </main>
      </div>
    </div>
  );
} 