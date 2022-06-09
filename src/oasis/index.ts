import {
  BlinnPhongMaterial,
  Camera,
  MeshRenderer,
  PrimitiveMesh,
  Vector3,
  WebGLEngine,
} from "oasis-engine";
import { initEngine } from "../utils/oasis-engine/basic/init";

export function createOasis() {
  const instance = new initEngine("canvas");
  instance.createScene("root").then((res) => {
    let cameraEntity = res.createChild("camera_entity");

    cameraEntity.transform.position = new Vector3(0, 5, 10);
    cameraEntity.transform.lookAt(new Vector3(0, 0, 0));

    let camera = cameraEntity.addComponent(Camera);
  });
}
