import { useState } from "react";
import React from "react";

interface Filters {
  [key: string]: string | undefined;
}

const ProductFilter = ({ products }) => {
  const [filters, setFilters] = useState<Filters>({});

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const filterProducts = () => {
    return products.filter((product) => {
      return Object.keys(filters).every((key) => {
        if (!filters[key]) return true;
        return product.specifications[key] === filters[key];
      });
    });
  };

  return (
    <div>
      <select name="size" value={filters.size} onChange={handleFilterChange}>
        <option value="">Filter by Size</option>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select>

      <select name="color" value={filters.color} onChange={handleFilterChange}>
        <option value="">Filter by Color</option>
        <option value="Red">Red</option>
        <option value="Blue">Blue</option>
        <option value="Green">Green</option>
      </select>

      <div>
        {filterProducts().map((product) => (
          <div key={product._id}>{product.name}</div>
        ))}
      </div>
    </div>
  );
};
