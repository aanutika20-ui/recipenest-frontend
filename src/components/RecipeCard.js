import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share';

// ReadMore component to toggle text display
const ReadMore = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleReadMore = () => setIsExpanded(!isExpanded);

  return (
    <div>
      <p>
        {isExpanded ? text : `${text.substring(0, 100)}...`}
      </p>
      <button onClick={toggleReadMore} className="text-blue-500 underline">
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
};

const RecipeCard = ({ recipe }) => {
  const shareUrl = `https://yourapp.com/recipes/${recipe.id}`;
  const title = recipe.title;

  return (
    <div className="border p-4 rounded shadow hover:shadow-md">
      <h2 className="text-xl font-bold mb-2">{recipe.title}</h2>
      <ReadMore text={recipe.description} />
      <Link to={`/recipe/${recipe.id}`} className="text-blue-500 mt-2 inline-block">
        View Full Recipe
      </Link>
      <div className="flex space-x-2 mt-4">
        <FacebookShareButton url={shareUrl} quote={title}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton url={shareUrl} title={title}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <WhatsappShareButton url={shareUrl} title={title}>
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
      </div>
    </div>
  );
};

export default RecipeCard;


