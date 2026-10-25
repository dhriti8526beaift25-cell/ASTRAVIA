/**
 * AstraSuggestions Component
 * Displays curated prompt chips above the message input to guide user discovery.
 */

const SUGGESTED_PROMPTS = [
  "Discover peaceful destinations",
  "Find adventure experiences",
  "Explore Kashmir virtually",
  "Help me choose my next destination",
  "Show me cultural experiences"
];

export function AstraSuggestions({ onSelectPrompt, disabled = false }) {
  return (
    <div className="astra-prompt-chips-tray" role="group" aria-label="Suggested questions">
      {SUGGESTED_PROMPTS.map((prompt, idx) => (
        <button
          key={idx}
          type="button"
          className="astra-prompt-chip"
          onClick={() => onSelectPrompt(prompt)}
          disabled={disabled}
        >
          {prompt}
        </button>
      ))}
    </div>
  );
}

export default AstraSuggestions;
