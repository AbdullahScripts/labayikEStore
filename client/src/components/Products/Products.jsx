import "./Products.scss";
import Product from "./Product/Product";
const Products = ({ innerPage, HeadingText, products }) => {
  return (
    <div className="Products-container">
      {!innerPage && (
        <div className="sec-heading">
          {HeadingText} <span className="heading-line"></span>
        </div>
      )}
      <div className="products">
        {products?.data?.map((item) => {
         
         return <Product key={item.id} id={item.id} data={item.attributes} />
      })}</div>
    </div>
  );
};

export default Products;
