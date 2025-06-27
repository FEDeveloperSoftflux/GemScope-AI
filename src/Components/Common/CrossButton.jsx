import React from "react";

const CrossButton = ({ onClick, className = "" }) => (
  <button
    onClick={onClick}
    className={`w-12 h-12 flex items-center justify-center rounded-xl shadow-lg ${className}`}
    style={{
      background: "linear-gradient(135deg, #d946ef 0%, #60a5fa 100%)",
    }}
    aria-label="Close"
  >
    <svg width="24" height="24" viewBox="0 0 24 24">
      <line x1="6" y1="6" x2="18" y2="18" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1="18" y1="6" x2="6" y2="18" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  </button>
);

export default CrossButton; 