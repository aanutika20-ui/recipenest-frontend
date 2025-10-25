// src/components/ReadMore.js
import React, { useState } from 'react';

const ReadMore = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleReadMore = () => setIsExpanded(!isExpanded);

  const preview = text.length > 100 ? `${text.substring(0, 100)}...` : text;

  return (
    <div>
      <p>{isExpanded ? text : preview}</p>
      {text.length > 100 && (
        <button onClick={toggleReadMore} className="text-blue-500 underline mt-2">
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      )}
    </div>
  );
};

export default ReadMore;
