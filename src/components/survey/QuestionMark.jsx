export default function QuestionMark({ helpText, onHelpClick }) {
  return (
    <button
      type="button"
      onClick={() => onHelpClick(helpText)}
      className="ml-2 shrink-0 rounded-full bg-white/20 text-xs text-white hover:bg-white/30"
      style={{ 
        width: '16px', 
        height: '16px',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        transform: 'translateY(-1px)'
      }}
    >
      ?
    </button>
  );
} 