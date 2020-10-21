import React from "react";
import styled from "styled-components";

const TimeLineItem = ({ period, info }) => {
  return (
    <StyledItem>
      <PeriodContainer>
        <StyledP>{period}</StyledP>
      </PeriodContainer>
      <InfoContainer>
        {info.map((string, idx) => (
          <StyledP key={idx}>{string}</StyledP>
        ))}
      </InfoContainer>
      <Circle />
    </StyledItem>
  );
};

const StyledItem = styled.div`
  width: 100%;
  display: flex;
  letter-spacing: 2px;
  font-size: 14px;
`;

const PeriodContainer = styled.div`
  color: #0f4f81;
  width: 50%;
  display: flex;
  justify-content: flex-end;
  padding: 0 2.5rem 2.5rem 0;
  border-right: 0.5px solid rgba(144, 144, 144, 0.3);
`;

const StyledP = styled.p`
  transform: translateY(-8px);
  padding: 0.2rem 0 0.5rem;
  margin: 0;
`;

const InfoContainer = styled.div`
  width: 50%;
  padding: 0 0 2.5rem 2.5rem;
  border-left: 0.5px solid rgba(144, 144, 144, 0.3);
`;

const Circle = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #0f4f81;
`;
export default TimeLineItem;
