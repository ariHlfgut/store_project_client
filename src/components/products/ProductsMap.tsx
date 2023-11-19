import React, { useState, useEffect } from "react";
import Products from "./ProductsView";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./productsMap.css";
import getToken from "../../utiles/getToken";

interface ProductProps {
  _id: string;
  category_id: string;
  name: string;
  title: string;
  description: string;
  price: number;
  img_url: string;
  units_in_stock: number;
  rate: number;
  count_clicks: number;
  color: string;
  model: string;
}

const ProductsFather = () => {

  const navigate = useNavigate();

  const params = useParams();
  const [categoryProducts, setCategoryProducts] = useState<ProductProps[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      try {
        const response = await axios.get(
          `https://api-service-store-projects.onrender.com/api/products/category/${params.id}`,
          { headers: { authorization: getToken() } }
        );
        setCategoryProducts(response.data);
      } catch (error) {
        console.log("Error fetching products by category", error);
      }
    };
    fetchProductsByCategory();
  }, [params.id]);

  const handleSelectProduct = (productId: string) => {
    const updatedSelectedProducts = [...selectedProducts, productId];

    if (updatedSelectedProducts.length === 2) {
      navigate('/productComparison');
    }

    setSelectedProducts(updatedSelectedProducts);
    localStorage.setItem(
      "selectedProducts",
      JSON.stringify(updatedSelectedProducts)
    );
  };

  return (
    <div className="container_products">
      {categoryProducts.map((product) => (
        <div key={product._id} className="product-container">
          <Link className="navLink" to={`/product/${product._id}`}>
            <Products
              id={product._id}
              category_id={product.category_id}
              name={product.name}
              title={product.title}
              description={product.description}
              price={product.price}
              img_url={product.img_url}
              units_in_stock={product.units_in_stock}
              rate={product.rate}
              count_clicks={product.count_clicks}
              color={product.color}
              model={product.model}
            />
          </Link>
          <button
            onClick={() => handleSelectProduct(product._id)}
            className={selectedProducts.includes(product._id) ? "selected" : ""}
          >
            {selectedProducts.includes(product._id) ? "Selected" : "Select"}
          </button>
        </div>
      ))}
    </div>
  );
};
export default ProductsFather;
