import React from "react";
import { useState } from "react";
import shortid from "shortid";
import AddClock from "./AddClock.jsx";
import ClockList from "./ClockList.jsx";
import MoscowTime from "./MoscowTime.jsx";

const clocksMapper = (rawClock) => ({
  key: rawClock.id,
  name: rawClock.name,
  time: rawClock.time,
});

export default function WorldTime() {
  const [state, setState] = useState([]);

  const onNewClock = (name, time) => {
    setState((prev) => {
      return [
        ...prev,
        {
          id: shortid.generate(),
          name: name,
          time: time,
        },
      ];
    });
  };

  const clocksViewData = state.map(clocksMapper);

  const deleteClock = (id) => {
    setState((prev) => {
      return prev.filter((item) => {
        return item.id !== id;
      });
    });
  };

  return (
    <>
      <MoscowTime />
      <AddClock onNewClock={onNewClock} />
      <ClockList clocks={clocksViewData} deleteClock={deleteClock} />
    </>
  );
}
