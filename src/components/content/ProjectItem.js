import React, { useState } from "react";
import styled from "styled-components";

import { MdLock } from "react-icons/md";

const ProjectItem = ({ data }) => {
  const [hover, setHover] = useState(false);

  const mouseOverHandler = () => {
    setHover(true);
  };

  const mouseLeaveHandler = () => {
    setHover(false);
  };

  const clickHandler = () => {
    if (data.url !== "private") {
      window.open(data.url);
    }
  };

  return (
    <StyledContainer
      gridColumn={data.gridColumn}
      type={data.url}
      onMouseOver={mouseOverHandler}
      onMouseLeave={mouseLeaveHandler}
      onClick={clickHandler}
    >
      <StyledImage image={data.image} />
      {hover && (
        <StyledCover>
          {data.name}
          {data.url === "private" && <MdLock size="30" />}
        </StyledCover>
      )}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  position: relative;
  padding: 1rem;
  border: 1px solid rgba(144, 144, 144, 0.5);
  border-radius: 5px;
  transition: all ease 0.5s;
  box-shadow: 1px 1px 7px rgba(0, 0, 0, 0.2);
  grid-column: ${({ gridColumn }) => gridColumn};
  &:hover {
    transform: scale(1.03);
  }
  ${({ type }) => type !== "private" && "cursor: pointer"};
`;
const StyledImage = styled.div`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  background-image: url(${({ image }) => image});
`;

const StyledCover = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.5s;
  opacity: 0.8;
  background-color: rgba(0, 0, 0);
  color: #fff;
  font-size: 24px;
  letter-spacing: 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default ProjectItem;
