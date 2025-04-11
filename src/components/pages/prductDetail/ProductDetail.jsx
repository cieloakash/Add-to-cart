import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useProductDetail } from "../../store";
import "./ProductDetail.css";
const ProductDetail = () => {

  const { fetchSingleProduct, loading, error, singleProduct,addToCart,cart} =useProductDetail();
  const { productId } = useParams();

  useEffect(() => {
    fetchSingleProduct(productId);
    
  }, [fetchSingleProduct, productId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="product-detail">
        <div className="link">
        <Link to="/">Back to Home</Link>
          <Link to='/cart'>Cart:{Object.keys(cart).length}</Link>
        </div>
        <div className="product-header">
          <img src={singleProduct.thumbnail} alt={singleProduct.title} />
        </div>
        <div className="product-info">
          <h1>{singleProduct.title}</h1>
          <p>{singleProduct.description}</p>
          <p>
            <strong>Price:</strong> ${singleProduct.price}
          </p>
          <p>
            <strong>Stock Status:</strong> {singleProduct.availabilityStatus}
          </p>
          <p>
            <strong>Rating:</strong> {singleProduct.rating} ⭐
          </p>
          <p>
            <strong>Brand:</strong> {singleProduct.brand}
          </p>

          <button onClick={()=>addToCart(singleProduct.id)}>Add to cart</button>

        </div>
      </div>
      <div className="reviews-container">
        <h2>Reviews</h2>
        {singleProduct?.reviews?.map((review,index) => (
          <div className="review-card" key={index}>
            <h3>{review.reviewerName}</h3>
            <p>
              <strong>Rating:</strong> {review.rating} ⭐
            </p>
            <p>
              <strong>Comment:</strong> {review.comment}
            </p>
            <p>
              <strong>Date:</strong>{" "}
              {new Date(review.date).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductDetail;
