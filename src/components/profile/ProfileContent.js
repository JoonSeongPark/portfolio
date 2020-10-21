import React from "react";
import styled from "styled-components";

const Content = ({ obj, aTag }) => {
  return (
    <>
      <StyledStrong>{obj.category}</StyledStrong>
      {aTag ? (
        <a href={obj.content}>
          <StyledP>{obj.content}</StyledP>
        </a>
      ) : (
        <StyledP>
          {typeof obj.content === "string"
            ? obj.content
            : obj.content.join(", ")}
        </StyledP>
      )}
    </>
  );
};

const StyledStrong = styled.strong`
  color: #0f4f81;
  font-size: 15px;
  font-weight: bold;
`;

const StyledP = styled.p`
  margin: 0.2rem 0 1.2rem;
  font-size: 14px;
  letter-spacing: 1px;
`;

export default Content;
