import React, { useEffect, useState } from "react";
import "./ProductComparison.css";

const ProductComparison = () => {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [productDetails, setProductDetails] = useState<any[]>([]);

  useEffect(() => {
    const storedProducts = JSON.parse(
      localStorage.getItem("selectedProducts") || "[]"
    );
    setSelectedProducts(storedProducts);

    const fetchProductDetails = async () => {
      try {
        const productPromises = storedProducts.map((productId: string) =>
          fetch(
            `https://api-service-store-projects.onrender.com/api/products/${productId}`
          ).then((response) => response.json())
        );

        const details = await Promise.all(productPromises);
        setProductDetails(details);
      } catch (error) {
        console.error("Error fetching product details", error);
      }
    };

    fetchProductDetails();
  }, []);

  return (
    <div className="container">
      {productDetails.map((product, index) => (
        <div key={index} className="product-container">
          <h2>{product.name}</h2>
          <img src={product.img_url} alt={product.name} />
          <p>{`Price: $${product.price}`}</p>
          <p>{`Units in Stock: ${product.units_in_stock}`}</p>
          <p>{`Rate: ${product.rate}`}</p>
          <p>{`Clicks: ${product.count_clicks}`}</p>
          <p>{`Color: ${product.color}`}</p>
          <p>{`Model: ${product.model}`}</p>
          <button className="selected-button">
            {selectedProducts.includes(product._id) ? "Selected" : "Select"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductComparison;
