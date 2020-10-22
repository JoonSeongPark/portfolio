import React from "react";
import styled from "styled-components";

import TimeLineItem from "./TimeLineItem";

const TimeLine = ({ infoArr }) => {
  return (
    <StyledContainer>
      {infoArr.map((obj, idx) => (
        <TimeLineItem key={idx} period={obj.period} info={obj.info} />
      ))}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  padding: 50px 0;
`;

export default TimeLine;
