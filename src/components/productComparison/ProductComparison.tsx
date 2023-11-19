import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ProductComparison.css";
import { RootState } from "../../redux/reduxStore";
import { clearSelectedProducts } from "../../redux/features/selectedProductsSlice";

const ProductComparison = () => {
  const dispatch = useDispatch();
  const selectedProducts = useSelector(
    (state: RootState) => state.selectedProducts.selectedProducts
  );
  const [productDetails, setProductDetails] = React.useState<any[]>([]);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const productPromises = selectedProducts.map((productId: string) =>
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

    if (selectedProducts.length > 0) {
      fetchProductDetails();
    } else {
      setProductDetails([]);
    }
  }, [dispatch, selectedProducts]);

  useEffect(() => {
    return () => {
      dispatch(clearSelectedProducts());
    };
  }, [dispatch]);

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
          <p>{`Model: ${product.model}`}</p>{" "}
        </div>
      ))}
    </div>
  );
};

export default ProductComparison;
