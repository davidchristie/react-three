import React from "react";
import { Mesh, MeshNormalMaterial, TetrahedronGeometry } from "three";
import SceneObject, { Props as SceneObjectProps } from "../SceneObject";

type Props = Omit<SceneObjectProps, "create">;

const Tetrahedron: React.FunctionComponent<Props> = props => (
  <SceneObject
    create={() => {
      const geometry = new TetrahedronGeometry(1);
      const material = new MeshNormalMaterial();
      const object = new Mesh(geometry, material);
      return object;
    }}
    {...props}
  />
);

export default Tetrahedron;
