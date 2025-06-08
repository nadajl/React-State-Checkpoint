import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "John Doe",
        bio: "Software engineer with a passion for learning.",
        imgSrc: "https://via.placeholder.com/150",
        profession: "Full Stack Developer",
      },
      shows: false,
      timeSinceMounted: 0,
    };

    this.toggleShow = this.toggleShow.bind(this);
  }

  componentDidMount() {
    // Timer to update time since component mounted
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        timeSinceMounted: prevState.timeSinceMounted + 1,
      }));
    }, 1000); // 1 second interval
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  toggleShow() {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  }

  render() {
    const { person, shows, timeSinceMounted } = this.state;

    return (
      <div className="App">
        <h1>React Class Component Profile</h1>
        <button onClick={this.toggleShow}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>

        {shows && (
          <div className="profile">
            <img src={person.imgSrc} alt={person.fullName} />
            <h2>{person.fullName}</h2>
            <p>
              <strong>Bio:</strong> {person.bio}
            </p>
            <p>
              <strong>Profession:</strong> {person.profession}
            </p>
          </div>
        )}

        <p>Time since component mounted: {timeSinceMounted} seconds</p>
      </div>
    );
  }
}

export default App;
