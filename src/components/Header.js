import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  let navData = [
    {
      id: 1001,
      title: "Home",
      link: "/",
    },
    {
      id: 1002,
      title: "About",
      link: "/about",
    },
    {
      id: 1003,
      title: "Pages",
      link: "/pages",
    },
    {
      id: 1004,
      title: "Product",
      link: "/product",
    },
    {
      id: 1005,
      title: "Contact",
      link: "/contact",
    },
  ];
  return (
    <div>
      <header>
        <ul>
          {navData.map((item) => (
            <NavLink to={item.link}>
              <li key={item.id}>{item.title}</li>
            </NavLink>
          ))}
        </ul>
      </header>
    </div>
  );
};

export default Header;
