import React from 'react'
import styled from "styled-components";

export default function Card({ src, alt, title, description }) {
  return (
    <Cardcontainer>
      <div className="allblocks">
        <div className="">
          <img src={src} alt={alt} />
        </div>
        <div className="">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </Cardcontainer>
  );
}
const Cardcontainer = styled.main`
.allblocks{
    display:flex ;
    gap: 50px;
    padding : 3% 15%;
}
img{
width: 300px;
height: 350px;
}
`
