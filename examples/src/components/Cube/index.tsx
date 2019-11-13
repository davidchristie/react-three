import React from "react";
import { BoxGeometry, Mesh, MeshNormalMaterial } from "three";
import SceneObject, { Props as SceneObjectProps } from "../SceneObject";

type Props = Omit<SceneObjectProps, "create">;

const Cube: React.FunctionComponent<Props> = props => (
  <SceneObject
    create={() => {
      const geometry = new BoxGeometry(1, 1, 1);
      const material = new MeshNormalMaterial();
      const object = new Mesh(geometry, material);
      return object;
    }}
    {...props}
  />
);

export default Cube;
