import React from "react";
import { store } from "../../../src/Data/store";

const IntroA = () => {
  const { scene, setScene } = store();

  return (
    <div>
      <p>TestScene Intro A</p>
      <div onClick={() => setScene("intro")}>
        <p>Sending you back to intro</p>
      </div>
    </div>
  );
};

export default IntroA;
