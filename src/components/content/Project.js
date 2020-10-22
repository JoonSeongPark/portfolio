import React from "react";
import styled from "styled-components";

import ProjectItem from "./ProjectItem";

import maskod from "../../../public/images/maskod.png";
import fwine from "../../../public/images/fwine.png";
import vqa from "../../../public/images/vqa.png";
import baseball from "../../../public/images/baseball.png";
import dplan from "../../../public/images/dplan.png";
import mychat from "../../../public/images/mychat.png";

const Project = ({ korean }) => {
  const projectData = [
    {
      name: korean ? "마스크어디?" : "MASKOD?",
      image: maskod,
      gridColumn: "1/3",
      url: "https://maskod.kr",
    },
    {
      name: "fwine",
      image: fwine,
      gridColumn: "3/4",
      url: "https://github.com/joonseongpark/fwine",
    },
    {
      name: "VQA",
      image: vqa,
      gridColumn: "1/2",
      url: "https://github.com/joonseongpark/vqa",
    },
    {
      name: korean ? "그 남자의 존" : "KBO: Strike Zone",
      image: baseball,
      gridColumn: "2/4",
      url: "https://joonseongpark.github.io/ybigtabaseball/",
    },
    {
      name: "DPLAN360",
      image: dplan,
      gridColumn: "1/3",
      url: "private",
    },
    {
      name: "My Chat App",
      image: mychat,
      gridColumn: "3/4",
      url: "private",
    },
  ];
  return (
    <StyledContainer>
      {projectData.map((data, idx) => (
        <ProjectItem key={idx} data={data} />
      ))}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  padding: 80px 0;
  margin: auto;
  width: 65vw;
  display: grid;
  grid-template-rows: 24vw 24vw 24vw;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1.2rem;
`;

export default Project;
