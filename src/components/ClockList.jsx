import React from "react";
import ClockItem from "./ClockItem";

export default function ClockList(props) {
  const { clocks, onDelete } = props;
  console.log(props);
  return (
    <div className="clock-list">
      {clocks.map((clock) => (
        <ClockItem
          id={clock.key}
          name={clock.name}
          time={clock.time}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
