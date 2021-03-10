import React, { Component } from "react";
import moment from "moment";
moment.locale("ru");

export default class ClockItem extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      id: "",
      name: "",
      time: this.convertedTime(this.props.time),
    };
    this.onCloseClock = this.onCloseClock.bind(this);
  }

  convertedTime(number) {
    let correctTime = moment().add(number, "hours").format("HH:mm:ss");
    return correctTime;
  }

  tick() {
    this.setState({
      time: this.convertedTime(this.props.time),
    });
  }

  componentDidMount() {
    this.watch = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.watch);
  }

  onCloseClock() {
    this.props.deleteClock(this.props.id);
  }

  render() {
    return (
      <div className="clock-item">
        <div className="clock-info">
          <div className="name">{this.props.name}</div>
          <div className="time">{this.state.time}</div>
        </div>
        <div className="input-button-delete">
          <input type="submit" value="X" onClick={this.onCloseClock} />
        </div>
      </div>
    );
  }
}
