import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import search from "../assets/search.png";
import logo from "../assets/logo.png";
import { axiosClient } from "../apiConfig/config";

const Header = () => {
  const [keyword, setKeyword] = useState("");
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setKeyword(event.target.value);
  };
  const home = () => {
    setKeyword("");
    navigate("/");
    setCategories([]);
  };
  
  const handleSearch = (evt) => {
    evt.preventDefault();
    setKeyword(keyword.trim());

    if (keyword.length > 0) {
      axiosClient
        .get(keyword)
        .then((res) => {
          if (res.data.filters[0]?.values) {
            setCategories(res.data.filters[0].values);
            navigate(
              { pathname: `/items?search=${keyword}` },
              {
                state: { categories: res.data.filters[0].values },
              }
            );
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <>
      <div className="header">
        <div className="header__container">
          <form className="header__input-container" onSubmit={handleSearch}>
            <img className="logo" src={logo} alt="" onClick={home} />
            <input
              type="text"
              placeholder="Nunca dejes de buscar"
              value={keyword}
              onChange={handleChange}
            />
            <button type="submit" className="search-button">
              <img className="search-icon" src={search} alt="search" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Header;
