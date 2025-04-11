import React, { useEffect, useState } from "react";
import axios from "axios";
import './ProductListing.css'
import { useProductDetail } from "../store";
import { Link } from "react-router-dom";
const ProductListing = () => {
  // zustand global value set
  const {products,fetchProducts,loading,error} = useProductDetail()


  useEffect(()=>{
    fetchProducts()
  },[fetchProducts])
  

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="product-grid">
      {
        products?.map((product) => (
          <Link to={`/store/pd/${product.id}`} key={product.id}>
             <div className="product-card" >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="product-image"
            />
            <div className="product-info">
              <h2 className="product-title">{product.title}</h2>
              <p className="product-price">
                <strong>Price:</strong> ${product.price}
              </p>
              <p className="product-stock">
                <strong>Stock Status:</strong> {product.availabilityStatus}
              </p>
              <p className="product-rating">
                <strong>Rating:</strong> {product.rating} ⭐
              </p>
              <p className="product-brand">
                <strong>Brand:</strong> {product.brand}
              </p>
            </div>
          </div>
          </Link>
         
        ))
      }
    </div>
  );  
};

export default ProductListing;
