import React from "react";

class About extends React.Component {
  render() {
    const skills = ["HTML", "CSS", "JS", "GitHub", "React"];
    const jsxSkills = skills.map((skill) => <li>{skill}</li>)
    return (
      <div>
        <h1>Cadu</h1>
        <p>Curto xadrez, skate e programação</p>
        <h2>Minhas Habilidades</h2>
        <ul>{jsxSkills}</ul>
      </div>
    );
  }
}

export default About;
