/**
 * QuestionRow Component
 * 
 * This component renders a single question row in the survey table.
 * It includes the question text, radio buttons for Likert scale, and a comments field.
 * 
 * @param {Object} question - The question object with id, text, and helpText
 * @param {Function} onHelpClick - Callback function when help icon is clicked
 * @param {Function} onRadioChange - Callback function when a radio button is changed
 */
import RadioGroup from './RadioGroup';
import QuestionMark from './QuestionMark';

export default function QuestionRow({ question, onHelpClick, onRadioChange }) {
  // Likert scale options (1-5)
  const options = ['1', '2', '3', '4', '5'];
  
  return (
    <tr className="border-b border-white/10">
      {/* Question text with optional help icon */}
      <td className="py-4 pr-4">
        <div className="flex items-start">
          <span className="text-white">{question.text}</span>
          {question.helpText && (
            <QuestionMark onClick={() => onHelpClick(question.helpText)} />
          )}
        </div>
      </td>
      
      {/* Radio button group for Likert scale */}
      <td colSpan={5} className="py-4">
        <RadioGroup 
          name={question.id}
          options={options}
          onChange={(value) => onRadioChange(question.id, value)}
        />
      </td>
      
      {/* Comments text area */}
      <td className="py-4 pl-4">
        <textarea
          id={`${question.id}-comment`}
          className="h-10 w-full rounded bg-white/10 p-2 text-sm text-white placeholder-white/50 resize-none"
          placeholder="Optional comments"
        />
      </td>
    </tr>
  );
} 