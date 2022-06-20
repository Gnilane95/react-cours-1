import React from 'react'
import styled from "styled-components"

export default function Footer() {
  return (
    <div>
      <Footercontainer>
        <h1>Mon joli footer</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in
          suscipit mauris. Ut aliquet lorem ut est volutpat tincidunt. Etiam
          pretium enim in nisl pellentesque, vitae semper nibh sodales. Sed ante
          ligula, suscipit sed dapibus in, condimentum id lacus. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Nunc quis mattis augue.
          Aenean a augue feugiat, suscipit elit quis, auctor libero. Etiam
          auctor quis risus id efficitur. Suspendisse porta ullamcorper gravida.
        </p>
      </Footercontainer>
    </div>
  );
}
const Footercontainer = styled.footer`
  background-color: #0d6efd;
  color: #fff ;
  text-align: center;
  padding: 2% 10%;
  margin-top: 22%;
`;
