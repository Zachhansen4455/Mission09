import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import teamNames from "./CollegeBasketballTeams.json";

// set the props for the json file
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

// function to dispay the heading for the page.
function Heading() {
  return (
    <div>
      <h1>Welcome to March Madness!!!</h1>
      <p>Below are the NCAA teams that will compete.</p>
    </div>
  );
}

// class that will make a card for each team with the required infomation.
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

// function that will make a list of all the teams in the json file
function TeamList() {
  return (
    <div>
      {teamNames.teams.map((TeamNum) => (
        <Team {...TeamNum} />
      ))}
    </div>
  );
}

// app function that will display the app.
function App() {
  return (
    <div className="App">
      <Heading />
      <TeamList />
    </div>
  );
}

export default App;
