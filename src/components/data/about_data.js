import React from "react";
import api from "../../assets/icons/api.svg";
import backend from "../../assets/icons/backend.svg";
import computer from "../../assets/icons/computer.svg";
import repair from "../../assets/icons/repair.svg";
import puzzle from "../../assets/icons/puzzle.svg";

const skills = [
  {
    icon: computer,
    title: "Frontend Development",
    about: "I can build a beautiful and scalable SPA ReactJS",
  },
  {
    icon: backend,
    title: "Backend  Development",
    about: [
      <>
        Developing rhobust backend using frameworks like
        <strong> ASP.NET core</strong>,<strong> ExpressJS </strong>&{" "}
        <strong> Django</strong>
      </>,
    ],
  },
  {
    icon: api,
    title: "Technologies",
    about: [
      <>
        Worked with REST and GraphQL for APIs and Web-Assembly, Web-RTC,
        Web-Sockets
      </>,
      // {"               "}  <strong key={1}> django-rest-api </strong>,
    ],
  },
  {
    icon: repair,
    title: "Database",
    about:
      "Worked with SqLite & Postgres for SQL, MongoDB as NoSQL and Redis key-value database",
  },
  {
    icon: puzzle,
    title: "Test-Driven Developer",
    about: [
      <>
        <strong> CypressIO </strong>for UI testing and for backend
        <strong> PyTest framework </strong>for django &<strong> Jest </strong>
        for ExpressJs
      </>,
    ],
  },
  {
    icon: computer,
    title: "DevOps",
    about: [
      <>
        Used <strong> Docker </strong>for containerizing and
        <strong> Travis-CI </strong>for CI/CD pipeline
      </>,
    ],
  },
];

export default skills;
