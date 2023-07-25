import "./SingleProduct.scss";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";

import { useParams } from "react-router-dom";

import useFetch from "../../hooks/useFetch";
import { useState, useContext } from "react";
import { Context } from "../../utils/context";



const SingleProduct = () => {

  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((prevstate) => prevstate + 1);
  };
  const decrement = () => {
    setQuantity((prevstate) => {
      if (prevstate === 1) return 1;
      else return prevstate - 1;
    });
  };

  const { id } = useParams();
  const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);

  const {handleAddToCart}=useContext(Context)


  if (!data) return;

  const product = data.data[0].attributes;
  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img
              src={
                process.env.REACT_APP_DEV_URL +
                product.img.data[0].attributes.url
              }
              alt=""
            />
          </div>
          <div className="right">
            <span className="name">{product.title}</span>
            <span className="price">${product.price}</span>
            <span className="desc">{product.desc}</span>
            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span onClick={increment}>+</span>
                <span>{quantity}</span>
                <span onClick={decrement}>-</span>
              </div>
              <button className="add-to-cart-button" onClick={()=>{
                handleAddToCart(data.data[0],quantity)
                setQuantity(1)
              }} >
                <FaCartPlus size={20} />
                Add to cart
              </button>
            </div>
            <span className="divider" />
            <div className="info-item">
              <span className="text-bold">
                Category:{" "}
                <span>{product.categories.data[0].attributes.title}</span>
              </span>
              <span className="text-bold">
                share
                <span className="social-icons">
                  <FaFacebookF />
                  <FaInstagram />
                  <FaLinkedinIn />
                  <FaTwitter />
                  <FaPinterest />
                </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProducts
          productId={id}
          categoryId={product.categories.data[0].id}
        />
      </div>
    </div>
  );
};

export default SingleProduct;
