import React from 'react'
import styled from "styled-components"

export default function Navigation() {
  return (
    <Nav>
      <div className='logo'>
        <p >devMito</p>
      </div>
      <div className='nav-item'>
        <ul>
          <li href="">About</li>
          <li href="">Steve</li>
          <li href="">Elon</li>
        </ul>
      </div>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
    justify-content: space-between;
    align-items : center;
    background-color: #0d6efd;
    padding: 2% 10%;
    color : #fff;
    .logo p{
        font-weight: bold;
        font-size : 2rem;
    }
  ul {
    display: flex;
    gap: 10px;
    list-style : none;
  }
`;
