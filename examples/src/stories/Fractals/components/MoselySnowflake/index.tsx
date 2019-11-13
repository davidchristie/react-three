import React from "react";
import Cube from "../../../../components/Cube";
import { Vector3 } from "three";

interface Props {
  position?: Vector3;
  scale?: Vector3;
  steps: number;
}

const MoselySnowflake: React.FunctionComponent<Props> = ({
  position = new Vector3(0, 0, 0),
  scale = new Vector3(1, 1, 1),
  steps
}) => {
  if (steps <= 0) {
    return <Cube position={position} scale={scale} />;
  } else {
    const nextScale = scale.clone().multiplyScalar(1 / 3);
    const nextSteps = steps - 1;
    const children = [];
    let index = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        for (let k = -1; k <= 1; k++) {
          if (Math.abs(i) + Math.abs(j) + Math.abs(k) < 3) {
            if (i !== 0 || j !== 0 || k !== 0) {
              children.push(
                <MoselySnowflake
                  key={index++}
                  position={
                    new Vector3(
                      position.x + (scale.x / 3) * i,
                      position.y + (scale.y / 3) * j,
                      position.z + (scale.z / 3) * k
                    )
                  }
                  scale={nextScale}
                  steps={nextSteps}
                />
              );
            }
          }
        }
      }
    }
    return <>{children}</>;
  }
};

export default MoselySnowflake;
