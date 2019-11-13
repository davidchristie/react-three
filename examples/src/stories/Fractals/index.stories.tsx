import React from "react";
import { Vector3 } from "three";
import SceneViewer from "../../components/SceneViewer";
import MoselySnowflake from "./components/MoselySnowflake";

export default {
  title: "Fractals"
};

export const moselySnowflake: React.FunctionComponent = () => (
  <SceneViewer>
    <MoselySnowflake scale={new Vector3(100, 100, 100)} steps={2} />
  </SceneViewer>
);
