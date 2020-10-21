import React from "react";

import Title from "./Title";
import TimeLine from "./TimeLine";

const ContentList = ({ korean }) => {
  const contentData = [
    {
      id: "Education",
      title: "Education",
      infoArr: [
        {
          period: "2009.03 - 2012.02",
          info: [
            korean
              ? "대구 대륜고등학교 졸업"
              : "Daeryun High School, Daegu, Korea",
          ],
        },
        {
          period: "2013.03 - 2020.02",
          info: korean
            ? ["연세대학교", "정보산업공학과 졸업"]
            : [
                "Yonsei Univ, Seoul, Korea",
                "Informational & Industrial Engineering",
              ],
        },
      ],
    },
    {
      id: "Experience",
      title: "Experience",
      infoArr: [
        {
          period: "2017.02 - 2017.07",
          info: [
            "Kaplan, San Francisco, CA",
            "Intensive English - Proficiency",
          ],
        },
        {
          period: "2017.09 - 2017.12",
          info: ["CELOP, Boston, MA", "Intensive Program - Level 6"],
        },
        {
          period: "2018.03 - 2018.06",
          info: korean
            ? [
                "실전전략컨설팅학회, C-ESI",
                "킴스클럽 이랜드몰 직수입 상품 유통 컨설팅",
              ]
            : [
                "Strategic Consulting Society, C-ESI",
                "KIM'S CLUB (E-LAND Mall) Distribution Consulting",
              ],
        },
        {
          period: "2018.07 - 2019.12",
          info: [
            korean ? "빅데이터 학회, YBIGTA" : "BigData Society, YBIGTA",
            korean
              ? "데이터디자인 팀 (데이터분석, 시각화)"
              : "Data Design Team (Analysis, Visualization)",
            "2018-2 Conference",
            korean ? "\b: '명장의 조건' (Web)" : "\b: 'Treble vs Double' (Web)",
            "2019-1 Conference",
            korean
              ? "\b: '그 남자의 존' (Web)"
              : "\b: 'KBO - Strike Zone' (Web)",
            "2019-2 Conference",
            "\b: 'Visual Question Answering' (Mobile App)",
          ],
        },
        {
          period: "2020.05 - 2018.07",
          info: korean
            ? [
                "미디어 렙사, DPLAN360",
                "매출일지 웹 페이지 제작 (프론트엔드 + 백엔드)",
              ]
            : [
                "Digital Media Customizing Rep, DPLAN360",
                "Sales Log Web Page Outsourcing (Front + Back)",
              ],
        },
        {
          period: "2020.08 - 2020.10",
          info: korean
            ? ["NAVER, 메인플랫폼", "프론트엔드 인턴"]
            : ["NAVER, Main Platform", "Front-end Intern"],
        },
      ],
    },
    { id: "Project", title: "Project", infoArr: [] },
  ];

  return (
    <>
      {contentData.map((data) => (
        <div key={data.id}>
          <Title title={data.title} />

          <TimeLine infoArr={data.infoArr} />
        </div>
      ))}
    </>
  );
};

export default ContentList;
