import QuestionMark from './QuestionMark';
import RadioGroup from './RadioGroup';

export default function QuestionRow({ question, onHelpClick, onRadioChange }) {
  return (
    <tr className="border-b border-white/10">
      {/* Question text and help icon */}
      <td className="py-4 pr-4 text-white">
        <div className="flex items-baseline gap-2">
          <span className="flex-1">{question.text}</span>
          <QuestionMark helpText={question.helpText} onHelpClick={onHelpClick} />
        </div>
      </td>
      {/* Radio button group for Likert scale */}
      <RadioGroup 
        name={question.id} 
        onChange={(name, value) => onRadioChange(name, value)}
      />
      {/* Comment field for additional feedback */}
      <td className="py-4 pl-4">
        <textarea
          id={`${question.id}-comment`}
          name={`${question.id}-comment`}
          rows={2}
          className="w-full resize-none rounded-lg border border-gray-600 bg-white/5 p-2.5 text-white placeholder-gray-400"
          placeholder="Additional comments..."
        />
      </td>
    </tr>
  );
} 