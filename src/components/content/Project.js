import React from "react";
import styled from "styled-components";

import ProjectItem from "./ProjectItem";

import maskod from "../../../public/images/maskod.png";
import fwine from "../../../public/images/fwine.png";
import vqa from "../../../public/images/vqa.png";
import baseball from "../../../public/images/baseball.png";

const Project = () => {
  const projectData = [
    { image: maskod, gridColumn: "1/3" },
    { image: fwine, gridColumn: "3/4" },
    { image: vqa, gridColumn: "1/2" },
    { image: baseball, gridColumn: "2/4" },
  ];
  return (
    <StyledContainer>
      {projectData.map((data, idx) => (
        <ProjectItem
          key={idx}
          image={data.image}
          gridColumn={data.gridColumn}
        />
      ))}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  padding: 80px 0;
  margin: auto;
  width: 70vw;
  display: grid;
  grid-template-rows: 24vw 24vw;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1.2rem;
`;

export default Project;
