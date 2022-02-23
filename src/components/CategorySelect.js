import React, {useState,useEffect}from 'react';
import "./CategorySelect.css";

const CategorySelect = ({ categories, onCategoryChange }) => {

  const [value, setValue] = useState("default");



  return (
    <div className="sel-container">
      <select data-testid="category-select"  
           defaultValue={value}  
           name="categories"
            onChange={(e) =>onCategoryChange(e.target.value)}            
            className="category-select" 
            >
      <option value="default" disabled>Please choose a category</option>
     
      {categories.map(category => <option
        key={category}
        value={category}
      >
        {category}
      </option>)
      }
    </select>
    </div>
    
  )
}

export { CategorySelect }

