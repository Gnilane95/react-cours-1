import React from 'react'
import styled from "styled-components"
import {useLocation } from "react-router-dom";

export default function Footer() {
  let currentPage = useLocation();
  console.log(currentPage.pathname);
  let bgColor = "";
  if (currentPage.pathname == "/") {
    bgColor = "#f00";
  } else if (currentPage.pathname == "/steve") {
    bgColor = "#0d6efd";
  } else {
    bgColor = "#ffcd41";
  }
  return (
    <div>
      <Footercontainer className="" style={{ backgroundColor: bgColor }}>
        <h1 className=''>Mon joli footer</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in
          suscipit mauris. Ut aliquet lorem ut est volutpat tincidunt. Etiam
          pretium enim in nisl pellentesque, vitae semper nibh sodales.
        </p>
      </Footercontainer>
    </div>
  );
}
const Footercontainer = styled.footer`
  background-color: #0d6efd;
  color: #fff ;
  text-align: center;
  padding: 1% 10%;
  margin-top: 0;
  h1{
    font-size: 30px;
  }
`;
