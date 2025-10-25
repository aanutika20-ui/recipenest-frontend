// src/components/RecipeList.js
import React, { useState, useMemo } from 'react';
import RecipeCard from '../components/RecipeCard';

const RecipeList = ({ recipes }) => {
  const [sortOption, setSortOption] = useState('title-asc');
  const [filterCuisine, setFilterCuisine] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 6;

  // Sorting
  const sortedRecipes = useMemo(() => {
    const sorted = [...recipes];
    switch (sortOption) {
      case 'title-asc':
        return sorted.sort((a, b) => a.title.localeCompare(b.title));
      case 'title-desc':
        return sorted.sort((a, b) => b.title.localeCompare(a.title));
      case 'date-asc':
        return sorted.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
      case 'date-desc':
        return sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      default:
        return sorted;
    }
  }, [recipes, sortOption]);

  // Filtering
  const filteredRecipes = useMemo(() => {
    if (!filterCuisine) return sortedRecipes;
    return sortedRecipes.filter(recipe => recipe.cuisine === filterCuisine);
  }, [sortedRecipes, filterCuisine]);

  // Pagination
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = filteredRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe);
  const totalPages = Math.ceil(filteredRecipes.length / recipesPerPage);

  // Handlers
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    setCurrentPage(1);
  };

  const handleFilterChange = (e) => {
    setFilterCuisine(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="p-4">
      {/* Controls */}
      <div className="flex flex-col md:flex-row justify-between mb-4">
        <div>
          <label className="mr-2">Sort By:</label>
          <select value={sortOption} onChange={handleSortChange} className="border p-1">
            <option value="title-asc">Title (A-Z)</option>
            <option value="title-desc">Title (Z-A)</option>
            <option value="date-asc">Date (Oldest)</option>
            <option value="date-desc">Date (Newest)</option>
          </select>
        </div>
        <div>
          <label className="mr-2">Filter by Cuisine:</label>
          <select value={filterCuisine} onChange={handleFilterChange} className="border p-1">
            <option value="">All</option>
            <option value="Italian">Italian</option>
            <option value="Mexican">Mexican</option>
            <option value="Indian">Indian</option>
            {/* Add more cuisines as needed */}
          </select>
        </div>
      </div>

      {/* Recipe Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="mx-1 px-3 py-1 border rounded disabled:opacity-50"
        >
          Previous
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`mx-1 px-3 py-1 border rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : ''}`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="mx-1 px-3 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default RecipeList;
