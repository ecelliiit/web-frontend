import React from "react";
import TeamCard from './TeamCard/TeamCard';
import dp from '../../../../assets/illustrations/lamp.svg';
import "./Teams.scss";

const data = [
  {
    name: "Ravi Sehrawat",
    position: "President",
    img: dp
  },
  {
    name: "Harshit Joshi",
    position: "Co - Founder",
    img: dp
  },
  {
    name: "Chandra Mauli",
    position: "Illustrator",
    img: dp
  },
  {
    name: "Prashant Kumar",
    position: "Designer",
    img: dp
  },
  {
    name: "Aditya Rawat",
    position: "PR Team",
    img: dp
  },
  {
    name: "Prateek Yadhuvanshi",
    position: "Video Editor",
    img: dp
  },
  {
    name: "Prateek Gupta",
    position: "Social Media Manager",
    img: dp
  },
  {
    name: "Shivansh Verma",
    position: "React Developer",
    img: dp
  }
  ,
  {
    name: "Abhyuday",
    position: "Designer",
    img: dp
  },
  {
    name: "Ansh Bhalla",
    position: "Quote Writer",
    img: dp
  },
  {
    name: "Dipankar Yadav",
    position: "News Team",
    img: dp
  },
  {
    name: "Aryan Gupta",
    position: "News Team",
    img: dp
  },
  {
    name: "Pranjal",
    position: "Designer",
    img: dp
  },
  {
    name: "Siddhant",
    position: "React Developer",
    img: dp
  },
  {
    name: "Tamish Bajaj",
    position: "Illustrator",
    img: dp
  },
  {
    name: "Vaishnav Jha",
    position: "PR Team",
    img: dp
  },
  {
    name: "Naman Kumawat",
    position: "Designer",
    img: dp
  },
  {
    name: "Abhishek Sindhe",
    position: "React Developer",
    img: dp
  },
  {
    name: "Vasu Bajaj",
    position: "Designer",
    img: dp
  },
  {
    name: "Bhav Khushwaha",
    position: "PR Team",
    img:dp 
  },
  {
    name: "Rishi Bachhuka",
    position: "PR Team",
    img: dp
  },
  {
    name: "Ayush Kumar",
    position: "PR Team",
    img: dp
  }
];

function createCard(props) {
  return (
    <TeamCard
      name={props.name}
      Position={props.position}
      Photo={props.img}
    />
  );
}

const Teams = () => {

  return (
    <div className="home-event" id="Teams">
      <div className="heading">Our Team</div>
      <div className="subheading">
        Well organized event. Loved the enthusiasm of the students. One of the
        most growing E-Cell of India. A very hardworking team walking with a
        zeal.
      </div>
      <div className="joinTeamButton"><a href="https://ik.imagekit.io/officialprashant/Brochure/E_Cell_IIIT_Sonepat_uJjfnSY1c.pdf?ik-sdk-version=javascript-1.4.3&updatedAt=1656340749523" target="_blank" rel="noopener noreferrer">Brochure</a></div>
      <div className="TeamsHeading">Core Team</div>
      <div className="CoreTeam">
        {data.map(createCard)}
      </div>
    </div>
  );
};

export default Teams;


