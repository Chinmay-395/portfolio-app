import blogapp from "../../assets/projects_images/blog-app.PNG";
import hardware_store from "../../assets/projects_images/hardware_store.jpg";
import chat_app from "../../assets/projects_images/chat-app.png";
import sepsis_app from "../../assets/projects_images/sepsis-app.PNG";
import smart_spoon from "../../assets/projects_images/smart-spoon-img.png";
import taxi_app from "../../assets/projects_images/taxi-app.PNG";

const data_projects = [
  {
    name: "Parkinsons Support System",
    image: smart_spoon,
    deployed_url: "https://github.com/Chinmay-395/IOT-PROJECT",
    github_url: "https://github.com/Chinmay-395/IOT-PROJECT",
    category: ["C++", "IOT"],
  },
  {
    name: "Sepsis Diagnostic System",
    image: sepsis_app,
    deployed_url: "https://github.com/Chinmay-395/Sepsis-Website", //https://covid-19-tracker-by-sumit.web.app/
    github_url: "https://github.com/Chinmay-395/Sepsis-Website",
    category: ["react.js", "django", "postgres", "websocket"],
  },
  {
    name: "Uber Clone",
    image: taxi_app,
    deployed_url: "https://github.com/Chinmay-395/Ride-Hailing",
    github_url: "https://github.com/Chinmay-395/Ride-Hailing",
    category: ["react.js", "django", "postgres", "websocket"],
  },
  {
    name: "Realtime Chat App",
    image: chat_app,
    deployed_url: "https://github.com/Chinmay-395/Chat-Application",
    github_url: "https://github.com/Chinmay-395/Chat-Application",
    category: ["django", "websocket"],
  },
  {
    name: "Medium-blog Clone",
    image: blogapp,
    deployed_url: "https://github.com/Chinmay-395/Medium-Blog-Clone",
    github_url: "https://github.com/Chinmay-395/Medium-Blog-Clone",
    category: ["django", "react.js"],
  },
  // {
  //   name: "Ecommerce-Website",
  //   image: hardware_store,
  //   deployed_url: "http://sumaxtweetme.pythonanywhere.com/",
  //   github_url: "https://github.com/Dey-Sumit/tweetme",
  //   category: ["django", "react"],
  // },
  {
    name: "Zoom Clone",
    image: hardware_store,
    deployed_url: "!#",
    category: ["node.js", "WebRTC"],
  },
  // {
  //   name: "Slack Clone",
  //   image: blinking,
  //   deployed_url: "https://dey-sumit.github.io/Blinking_Bubbles/",
  //   github_url: "https://github.com/Dey-Sumit/Blinking_Bubbles",
  //   category: ["processing"],
  // },
  // {
  //   name: "Last-Pass Clone",
  //   image: new_year,
  //   deployed_url: "https://dey-sumit.github.io/NewYear/",
  //   category: ["vanilla"],
  // },

  // {
  //   name: "Loan Management System",
  //   image: color_classification,
  //   deployed_url: "!#",
  //   github_url: "https://github.com/Dey-Sumit/color-classification",
  //   category: ["node", "machine_learning"],
  // },
];

export default data_projects;
