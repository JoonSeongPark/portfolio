import React from "react";
import styled from "styled-components";

const Footer = () => {
  return <StyledContainer>© 2020 Created by. JoonSeong Park</StyledContainer>;
};

const StyledContainer = styled.footer`
  background-color: #0f4f81;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 5rem;
  color: #fff;
  font-size: 13px;
`;

export default Footer;
