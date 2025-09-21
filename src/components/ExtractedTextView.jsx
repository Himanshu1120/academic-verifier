import React from "react";

const ExtractedTextView = ({ text }) => {
  if (!text) return null;

  return (
    <div className="extracted-text-box">
      <h3>Raw Extracted Text</h3>
      <div className="extracted-text-container">
        <pre className="extracted-text">
          {text}
        </pre>
      </div>
    </div>
  );
};

export default ExtractedTextView;