import React from "react";
import { Scene } from "three";
import SceneContext from "./SceneContext";
import createScene from "./createScene";

const SceneViewer: React.FunctionComponent = ({ children }) => {
  const container = React.useRef<HTMLDivElement>(null);
  const [scene, setScene] = React.useState<Scene>();
  React.useEffect(() => {
    if (container.current) {
      setScene(createScene(container.current));
    }
  }, []);
  return (
    <div ref={container} style={{ height: 500 }}>
      {scene && (
        <SceneContext.Provider value={{ scene }}>
          {children}
        </SceneContext.Provider>
      )}
    </div>
  );
};

export default SceneViewer;
