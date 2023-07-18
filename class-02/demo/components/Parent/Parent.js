import React from "react";

import Child from "../Child/Child";

import { useState } from "react";

export default function Parent() {
  const name = "Bob";
  // let pats = 0;

  // const [state, setState] = useState(initialValue)
  // The initial value is the value you want to start with assigned to state
  // state is the current value and can be used inside your components
  // setState is the setter function, it can be used to update the value of state.
  // updating the value of state will cause a re-render.

  const [pats, setPats] = useState(0);

  function handleBobsPats() {
    setPats(pats + 1);
  }

  return (
    <div>
      <Child name={name} pats={pats} handleBobsPats={handleBobsPats} />
    </div>
  );
}
