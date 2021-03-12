import React from "react";
import ClockItem from "./ClockItem";

export default function ClockList(props) {
  const { clocks } = props;
  return (
    <div className="clock-list">
      {clocks.map((clock) => (
        <ClockItem
          key={clock.key}
          id={clock.key}
          name={clock.name}
          time={clock.time}
          deleteClock={props.deleteClock}
        />
      ))}
    </div>
  );
}
