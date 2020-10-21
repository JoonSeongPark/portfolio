import React from "react";
import styled from "styled-components";

import { SiGoogletranslate } from "react-icons/si";

import logo from "../../../public/images/logo.png";

const navList = ["Home", "Education", "Experience", "Project"];

const Nav = ({ setKorean }) => {
  return (
    <StyledNavContainer>
      <img src={logo} height={"100%"} />
      <StyledUl>
        <StyledLi>
          <StyledIcon onClick={() => setKorean((prev) => !prev)} />
        </StyledLi>
        {navList.map((nav, idx) => (
          <StyledLi key={idx}>
            <StyledA href={`#${nav}`}>{nav}</StyledA>
          </StyledLi>
        ))}
      </StyledUl>
    </StyledNavContainer>
  );
};

const StyledNavContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  padding: 0.5rem 1.6rem;
  background-color: rgba(244, 244, 244, 0.9);
  border-bottom: 1px solid #ddd;
  width: 100vw;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  z-index: 100;
`;

const StyledUl = styled.ul`
  height: 100%;
  color: #0f4f81;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

const StyledLi = styled.li`
  margin: 0.2rem 1rem 0;
`;

const StyledIcon = styled(SiGoogletranslate)`
  cursor: pointer;
  &:hover {
    color: black;
  }
`;

const StyledA = styled.a`
  text-decoration: none;
  color: #0f4f81;
  &:hover {
    color: black;
  }
`;

export default Nav;
