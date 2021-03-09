import React, { Component } from "react";
import moment from "moment";
moment.locale("ru");

export default class ClockItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      time: moment().format("LTS"),
    };
  }

  tick() {
    this.setState({
      time: moment().format("LTS"),
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

  render() {
    return (
      <div className="moscow-time">Московское время: {this.state.time}</div>
    );
  }
}
