import React from "react";
import { Scene } from "three";

interface Value {
  scene: Scene;
}

const defaultValue: Value = {
  scene: new Scene()
};

export default React.createContext(defaultValue);
