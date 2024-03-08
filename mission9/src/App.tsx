import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import teamNames from "./CollegeBasketballTeams.json";

interface TeamProps {
  school: string;
  name: string;
  city: string;
  state: string;
  tid: number;
  cid: number;
  did: number;
  abbrev: string;
  pop: number;
  latitude: number;
  longitude: number;
}

function Heading() {
  return (
    <div>
      <h1>Welcome to March Madness!!!</h1>
      <p>Below are the NCAA teams that will compete.</p>
    </div>
  );
}

class Team extends React.Component<TeamProps> {
  render() {
    const oneTeam = this.props;

    return (
      <div>
        <h3>{oneTeam.school}</h3>
        <p>Mascot: {oneTeam.name}</p>
        <p>
          Location: {oneTeam.city}, {oneTeam.state}
        </p>
      </div>
    );
  }
}

function TeamList() {
  return (
    <div>
      {teamNames.teams.map((TeamNum) => (
        <Team {...TeamNum} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Heading />
      {/* <Card /> */}
      <TeamList />
    </div>
  );
}

export default App;
