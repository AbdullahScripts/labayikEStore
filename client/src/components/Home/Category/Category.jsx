import { useNavigate } from "react-router-dom";

import "./Category.scss";

const Category = (props) => {
const navigate=useNavigate();

  return (
    <div className="shop-by-category">
      <div className="categories">
        {props.categories?.data?.map((item) => {
          return (
            <div className="category" onClick={()=>navigate(`/category/${item.id}`)} key={item.id}>
              <img
                src={
                  process.env.REACT_APP_DEV_URL +
                  item.attributes.img.data.attributes.url
                }
                alt=""
              />
            </div>
          );
        })}

    
      </div>
    </div>
  );
};

export default Category;
