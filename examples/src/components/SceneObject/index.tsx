import React from "react";
import { Object3D, Vector3 } from "three";
import { useSceneContext } from "../SceneViewer";

export interface Props {
  create: () => Object3D;
  position?: Vector3;
  rotation?: Vector3;
  scale?: Vector3;
}

const SceneObject: React.FunctionComponent<Props> = ({
  create,
  position = new Vector3(0, 0, 0),
  rotation = new Vector3(0, 0, 0),
  scale = new Vector3(1, 1, 1)
}) => {
  const { scene } = useSceneContext();
  const object = React.useRef<Object3D>();
  React.useEffect(() => {
    const createdObject = create();
    object.current = createdObject;
    scene.add(createdObject);
    return () => {
      scene.remove(createdObject);
    };
  }, [create, scene]);
  React.useEffect(() => {
    if (object.current) {
      object.current.position.set(position.x, position.y, position.z);
    }
  }, [position]);
  React.useEffect(() => {
    if (object.current) {
      object.current.rotation.set(rotation.x, rotation.y, rotation.z);
    }
  }, [rotation]);
  React.useEffect(() => {
    if (object.current) {
      object.current.scale.set(scale.x, scale.y, scale.z);
    }
  }, [scale]);
  return null;
};

export default SceneObject;
