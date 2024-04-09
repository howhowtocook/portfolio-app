import React from "react";
import PortfolioComponent from "../components/PortfolioComponent";
import webDevImages from "../assets/images/webdev/WebDevImages"; // Importing the object containing image imports

const projectsData = [
  {
    id: 1,
    title: "Prisoner's Dilemma Advertising Simulation Game",
    description:
      "Users can choose to advertise or not, the computer generates decisions automatically. The webpage displays scores for both the user and the computer, and visualizes the scores using a bar chart. Users can choose the number of simulations to accumulate scores; they can also choose the computer's strategy, whether random, always advertising, never advertising, or imitating the user's previous decision",
    imageUrls: webDevImages.id1, // Using the imported images from webDevImages
    demoLink: "https://howhowtocook.github.io/odin-tic-tac-toe/",
  },
  {
    id: 2,
    title: "Personal Online Library,",
    description:
      "users can add new books, remove old ones, and update the read/unread status by pressing buttons. The book information is displayed on the webpage in card format.",
    imageUrls: webDevImages.id2,
    demoLink: "https://example.com/demo",
  },
  {
    id: 3,
    title: "Calculator",
    description:
      "Allowing addition, subtraction, multiplication, and division operations through buttons. It displays the selected numbers and operations on the screen and can clear the current operation.",
    imageUrls: webDevImages.id3,
    demoLink: "https://howhowtocook.github.io/odin-calculator/",
  },
  {
    id: 4,
    title: "Todo App",
    description:
      "Todo App is a simple web application for managing tasks. Users can create, edit, and delete todo items, organize them into projects, and set priorities and due dates.",
    imageUrls: webDevImages.id4,
    demoLink: "https://howhowtocook.github.io/odin-calculator/",
  },
  {
    id: 5,
    title: "Weather App",
    description:
      "The Weather App lets users check current weather by entering a location. It shows temperature, weather description, and offers Fahrenheit/Celsius options. It fetches data from WeatherAPI and displays a related GIF for visual appeal.",
    imageUrls: webDevImages.id5,
    demoLink: "https://howhowtocook.github.io/odin-calculator/",
  },
  // Add more projects as needed
];

const WebDevPortfolioPage = () => {
  return (
    <div>
      {/* Pass the project data as a prop to PortfolioComponent */}
      <PortfolioComponent projects={projectsData} />
    </div>
  );
};

export default WebDevPortfolioPage;
