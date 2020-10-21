import React from "react";
import styled from "styled-components";

import background from "../../../public/images/background.jpg";
import profile from "../../../public/images/profile.jpeg";

import Content from "./Content";

const Profile = () => {
  const profileData = [
    { category: "생년월일", content: "1993.10.08." },
    { category: "전화번호", content: "010.2001.6554" },
    { category: "이메일", content: "rytt@yonsei.ac.kr" },
    { category: "깃허브", content: "https://github.com/joonseongpark" },
    {
      category: "기술스택",
      content: ["JavaScript", "Webpack", "React", "Node.js", "Python"],
    },
  ];
  return (
    <BackgroundContainer>
      <ProfileContainer>
        <ProfileImage />
        <ProfileContent>
          <StyledH2>
            박 준 성 <small>(JoonSeong Park)</small>
          </StyledH2>

          <StyledSpan>Web Front-end Developer</StyledSpan>

          {profileData.map((obj, idx) => (
            <Content key={idx} obj={obj} aTag={idx === 3} />
          ))}
        </ProfileContent>
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
  margin-top: 3.5rem;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  &:after {
    content: "";
    position: absolute;
    top: 3.5rem;
    left: 0;
    height: 37.5rem;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.7);
  }
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

const ProfileContent = styled.div`
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
