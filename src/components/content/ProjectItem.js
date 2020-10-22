import React from "react";
import styled from "styled-components";

const ProjectItem = ({ image, gridColumn }) => {
  return <StyledContainer image={image} gridColumn={gridColumn} />;
};

const StyledContainer = styled.div`
  border: 1px solid rgba(144, 144, 144, 0.5);
  border-radius: 5px;
  transition: all ease 0.5s;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  box-shadow: 1px 1px 7px rgba(0, 0, 0, 0.2);
  background-image: url(${({ image }) => image});
  grid-column: ${({ gridColumn }) => gridColumn};
`;

export default ProjectItem;
