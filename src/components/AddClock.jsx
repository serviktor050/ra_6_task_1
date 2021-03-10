import React from "react";
import { useState } from "react";

const DEFAULT_FORM = {
  name: "",
  time: "",
};

export default function AddClock(props) {
  const { onNewClock } = props;

  const [state, setState] = useState(DEFAULT_FORM);

  const onFormFieldChangeName = (e) => {
    setState((prev) => {
      const newState = {
        ...prev,
        name: e.target.value,
      };

      return newState;
    });
  };

  const onFormFieldChangeTime = (e) => {
    setState((prev) => {
      const newState = {
        ...prev,
        time: e.target.value,
      };
      return newState;
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onNewClock(state.name, state.time);

    setState((prev) => ({ ...prev, name: "", time: "" }));
  };

  return (
    <>
      <form className="clock-form" onSubmit={onSubmit}>
        <div className="clock-form-name">
          <p>Название</p>
          <input
            type="text"
            id="clock-name"
            name="clock-name"
            onChange={onFormFieldChangeName}
            value={state.name}
          />
        </div>
        <div className="clock-form-time">
          <p>Временная зона</p>
          <input
            type="text"
            id="clock-time"
            name="clock-time"
            onChange={onFormFieldChangeTime}
            value={state.time}
          />
        </div>
        <div className="input-button-add">
          <input type="submit" value="Добавить" />
        </div>
      </form>
    </>
  );
}
