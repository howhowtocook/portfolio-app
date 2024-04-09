import React from "react";
import PortfolioComponent from "../components/PortfolioComponent";

const projectsData = [
  {
    id: 1,
    title: "PM2.5 Prediction for Beijing",
    description:
      "I have conducted regression analysis on the observed data of PM2.5 and other pollutants, as well as meteorological conditions in Beijing in recent years. I have built regression models attempting to predict PM2.5 using known information about other pollutants and meteorological conditions. Secondly, I have conducted univariate time series analysis using the currently observed data to identify patterns of change and make simple predictions. This aims to provide early air quality warnings for the people of Beijing to plan their travels accordingly.",
    imageUrl: "../images/CO.png",
    demoLink: "https://blog.csdn.net/weixin_45529837/article/details/108805415",
  },
  {
    id: 2,
    title: "E-commerce Website",
    description:
      "An e-commerce website with features for browsing products, adding to cart, and checkout.",
    imageUrl: "/images/project2.jpg",
    demoLink: "https://example.com/demo",
  },
  // Add more projects as needed
];

const DSPortfolioPage = () => {
  return (
    <div>
      {/* Pass the project data as a prop to PortfolioComponent */}
      <PortfolioComponent projects={projectsData} />
    </div>
  );
};

export default DSPortfolioPage;
