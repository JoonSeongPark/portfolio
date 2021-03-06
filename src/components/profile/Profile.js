import React from "react";
import styled from "styled-components";

import background from "../../../public/images/background.jpg";
import profile from "../../../public/images/profile.jpeg";

import ProfileContent from "./ProfileContent";

const Profile = ({ korean }) => {
  const profileData = [
    { category: korean ? "생년월일" : "Birth", content: "1993.10.08." },
    {
      category: korean ? "전화번호" : "Phone",
      content: korean ? "010.2001.6554" : "+82-10-2001-6554",
    },
    { category: korean ? "이메일" : "E-mail", content: "rytt@yonsei.ac.kr" },
    {
      category: korean ? "깃허브" : "Github",
      content: "https://github.com/joonseongpark",
    },
    {
      category: korean ? "기술스택" : "Skills",
      content: ["JavaScript", "Webpack", "React", "Node", "Express", "Python"],
    },
  ];
  return (
    <BackgroundContainer>
      <PseudoDiv id={"Home"} />
      <ProfileContainer>
        <ProfileImage />
        <ContentContainer>
          <StyledH2>
            박 준 성 <small>(JoonSeong Park)</small>
          </StyledH2>

          <StyledSpan>Web Front-end Developer</StyledSpan>

          {profileData.map((obj, idx) => (
            <ProfileContent key={idx} obj={obj} aTag={idx === 3} />
          ))}
        </ContentContainer>
      </ProfileContainer>
    </BackgroundContainer>
  );
};

const BackgroundContainer = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 37.5rem;
  width: 100vw;
  margin-top: 4rem;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  &:after {
    content: "";
    position: absolute;
    top: 4rem;
    left: 0;
    height: 37.5rem;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

const PseudoDiv = styled.div`
  position: absolute;
  top: -4rem;
`;

const ProfileContainer = styled.div`
  width: 56rem;
  height: 28rem;
  z-index: 50;
  background-color: #f8f8ff;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  margin-bottom: 4.5rem;
`;

const ProfileImage = styled.div`
  background-image: url(${profile});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 100%;
  width: 50%;
`;

const ContentContainer = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 2.9rem;
`;

const StyledH2 = styled.h2`
  margin: 0;
`;

const StyledSpan = styled.span`
  color: rgba(144, 144, 144);
  margin-bottom: 2rem;
`;

export default Profile;
