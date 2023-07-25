import "./Search.scss";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/speaker-prod-5.webp";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";

const Search = ({ setShowSearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  let { data } = useFetch(
    `/api/products?populate=*&filters[title][$contains]=${query}`
  );

  if (!query.length) {
    data = null;
  }

  return (
    <div className="search-modal">
      <div className="form-field">
        <input
          autoFocus
          placeholder="Search for Product"
          value={query}
          onChange={handleChange}
          type="text"
        />
        <MdClose onClick={() => setShowSearch(false)} className="close-btn" />
      </div>
      <div className="search-result-content">
        <div className="search-results">
          {data?.data?.map((item) => {
            return (
              <div key={item.id} className="search-result-item"  onClick={()=>{navigate("/product/" + item.id)
              setShowSearch(false)}} >
                <div className="img-container">
                  <img src={ process.env.REACT_APP_DEV_URL +
                item.attributes.img.data[0].attributes.url} alt="" />
                </div>
                <div className="prod-details">
                  <span className="name">{item.attributes.title}</span>
                  <span className="desc">{item.attributes.desc}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Search;
