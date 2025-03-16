/**
 * QuestionMark Component
 * 
 * This component renders a question mark icon that shows help information when clicked.
 * When clicked, it updates the tooltip content in the sidebar.
 * 
 * @param {Function} onClick - Callback function when the question mark is clicked
 */
export default function QuestionMark({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="ml-2 shrink-0 rounded-full bg-white/20 text-xs text-white hover:bg-white/30"
      style={{ 
        width: '16px', 
        height: '16px',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        transform: 'translateY(-1px)'
      }}
      aria-label="Help"
    >
      ?
    </button>
  );
} 