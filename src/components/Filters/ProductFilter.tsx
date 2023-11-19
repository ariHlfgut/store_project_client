// import { useState } from "react";

// export const ProductFilter = ({ products }) => {
//   const [filters, setFilters] = useState({});

//   const handleFilterChange = (event) => {
//     const { name, value } = event.target;
//     setFilters((prevFilters) => ({
//       ...prevFilters,
//       [name]: value,
//     }));
//   };

//   const filterProducts = () => {
//     return products.filter((product) => {
//       // Filter by category attributes
//       if (filters.categoryAttribute) {
//         const attrs = product.category.possible_category_attribute_keys;
//         if (!attrs.includes(filters.categoryAttribute)) {
//           return false;
//         }
//       }

//       // Filter by specifications
//       return Object.keys(filters).every((key) => {
//         if (key === "categoryAttribute") return true;
//         if (!filters[key]) return true; // no filter
//         return product.specifications[key] === filters[key];
//       });
//     });
//   };

//   return (
//     <div>
//       <select
//         name="categoryAttribute"
//         value={filters.categoryAttribute}
//         onChange={handleFilterChange}
//       >
//         <option value="">Filter by Attribute</option>
//         {/* Loop through possible category attributes */}
//       </select>

//       {/* Filter by specifications */}
//       <select name="size" value={filters.size} onChange={handleFilterChange}>
//         <option value="">Filter by Size</option>
//         <option value="Small">Small</option>
//         <option value="Medium">Medium</option>
//         <option value="Large">Large</option>
//       </select>

//       <div>
//         {/* Display filtered products */}
//         {filterProducts().map((product) => (
//           <div key={product.id}>{product.name}</div>
//         ))}
//       </div>
//     </div>
//   );
// };
