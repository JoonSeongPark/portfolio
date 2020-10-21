import React from "react";
import styled from "styled-components";

const Title = ({ title }) => {
  return (
    <StyledContainer>
      <StyledH3>{title}</StyledH3>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  color: #0f4f81;
  letter-spacing: 3px;
  padding: 30px 0;
  margin: 0;
  border-top: 1px solid rgba(144, 144, 144, 0.3);
  border-bottom: 1px solid rgba(144, 144, 144, 0.3);
  width: 100%;
  text-align: center;
  position: relative;
`;

const StyledH3 = styled.h3`
  &:after {
    content: "";
    position: absolute;
    top: 90px;
    left: 50%;
    width: 25px;
    border-bottom: 1px solid #0f4f81;
    transform: translate(-50%);
  }
`;

export default Title;
