import React from 'react'
import styled from "styled-components";
import {style} from '../helpers/helper';
import {Link, useLocation} from "react-router-dom";

export default function Navigation() {
  const items = [
    {
      name: "Emily",
      slug: "/",
      id: 1,
    },
    {
      name: "Steve",
      slug: "/steve",
      id: 2,
    },
    {
      name: "Elon",
      slug: "/elon",
      id: 3,
    }
  ];
  let currentPage = useLocation ();
  console.log (currentPage.pathname)
  let bgColor ="";
  if (currentPage.pathname=="/") {
    bgColor= "#f00"
  }else if (currentPage.pathname == "/steve") {
    bgColor = "#0d6efd";
  }else {
    bgColor = "#ffcd41";
  }
  return (
    <header className='' style={{backgroundColor:bgColor}}>
      <Nav>
        <div className="logo">
          <Link className='logo' to="/">
            <p>devMito</p>
          </Link>
        </div>
        <div className="nav-item">
          <ul>
            {items.map((item) => (
              <Link className='items' to={item.slug} key={item.id}>
                <li >{item.name}</li>
              </Link>
            ))}
          </ul>
        </div>
      </Nav>
    </header>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: ${style.bgcolor}; */
  padding: 0 10%;
  color: ${style.textcolor};
  .logo p {
    font-weight: bold;
    font-size: 2rem;
  }
  ul {
    display: flex;
    gap: 30px;
    list-style: none;
  }
  /* .logo {
    text-decoration: none;
    color: #fff;
  }
  .items {
    text-decoration: none;
    color: #fff;
    font-size: 1.5rem;
  } */
  a {
    text-decoration: none;
    color: #fff;
  }
`;
