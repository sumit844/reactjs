import { Component, createRef } from "react";
import "../../css/style.css";

class MatchBall extends Component {
  state: any;
  setIntervalfun: any;
  inputRef: any;
  constructor(props: any) {
    super(props);
    this.state = {
      timerValue: 0,
      x: 0,
      y: 0,
      movingWidth: 50,
      movingHeight: 50,
      fixedy: 300,
      fixedx: 400,
    };
    this.inputRef = createRef();
  }
  startTheGame() {
    this.setIntervalfun = setInterval(() => {
      this.setState((prevState: any) => {
        return { ...prevState, timerValue: prevState?.timerValue + 1 };
      });
    }, 1000);
  }

  controlPostioningFn = (event: any) => {
    const { x, y, movingWidth, fixedx, fixedy } = this.state;

    const fixedRadius = 25;
    const movingRadius = 25;

    const distance = Math.sqrt((x - fixedx) ** 2 + (y - fixedy) ** 2);
    console.log("distance", distance);

    if (distance <= fixedRadius + movingRadius) {
      console.log("welcome", this.state);
      this.setState((prevState: any) => {
        console.log("welcome", prevState);
        return {
          ...prevState,
          movingWidth: prevState.movingWidth + 60,
        };
      });
    }
    if (this.state.timerValue > 0) {
      if (event.key === "ArrowUp") {
        console.log("this.state", this.state);
        this.setState((prevState: any) => {
          console.log("prevState", prevState);
          return { ...prevState, y: prevState?.y - 10 };
        });
      }
      if (event.key === "ArrowDown") {
        this.setState((prevState: any) => {
          return { ...prevState, y: prevState?.y + 10 };
        });
      }
      if (event.key === "ArrowLeft") {
        this.setState((prevState: any) => {
          return { ...prevState, x: prevState.x - 10 };
        });
      }
      if (event.key === "ArrowRight") {
        this.setState((prevState: any) => {
          return { ...prevState, x: prevState.x + 10 };
        });
      }
    }
  };
  componentDidMount() {
    window.addEventListener("keydown", this.controlPostioningFn);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.controlPostioningFn);
    clearInterval(this.setIntervalfun);
  }
  render() {
    return (
      <div style={{ height: "500px" }}>
        <h1>Welcome to the MatchBall Game</h1>
        <p>Please coincide both balls together in minimum time</p>
        <h3>{this.state.timerValue}</h3>
        <h3>{this.state.x}</h3>
        <h3>{this.state.y}</h3>
        <button
          onClick={() => {
            this.startTheGame();
          }}
          className="mb-5"
        >
          Start the game
        </button>
        <div>
          <div
            className="FixedBall"
            style={{
              top: `${this?.state?.fixedy}px`,
              left: `${this?.state?.fixedx}px`,
            }}
          ></div>
          {this?.state?.movingWidth && (
            <div
              className="MovingBall"
              ref={this.inputRef}
              style={{
                top: `${this?.state?.y}px`,
                left: `${this?.state?.x}px`,
                width: `${this?.state?.movingWidth}px`,
                height: "50px",
              }}
            ></div>
          )}
        </div>
      </div>
    );
  }
}

export default MatchBall;
