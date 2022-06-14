import {
  BlinnPhongMaterial,
  Camera,
  Color,
  DirectLight,
  MeshRenderer,
  PrimitiveMesh,
  Vector3,
  WebGLEngine,
} from "oasis-engine";
import { initEngine } from "../utils/oasis-engine/basic/init";

export function createOasis() {
  const instance = new initEngine("canvas");
  instance.createEntiry("root").then((rootEntity) => {
    const engine = instance.getEngine;
    const cameraEntity = rootEntity.createChild("camera_entity");
    cameraEntity.transform.position = new Vector3(0, 5, 10);
    cameraEntity.transform.lookAt(new Vector3(0, 0, 0));
    cameraEntity.addComponent(Camera);
    instance.setSceneBg = [1, 1, 1, 1];
    // scene.background.solidColor.setValue();

    const lightEntity = rootEntity.createChild("light");
    const directLight = lightEntity.addComponent(DirectLight);
    directLight.color = new Color(1, 1, 1);
    directLight.intensity = 0.5;
    lightEntity.transform.rotation = new Vector3(45, 45, 45);

    let cubeEntity = rootEntity.createChild("cube");
    let cube = cubeEntity.addComponent(MeshRenderer);
    cube.mesh = PrimitiveMesh.createCuboid(engine, 2, 2, 2);
    cube.setMaterial(new BlinnPhongMaterial(engine));

    instance.run();
    // console.log(res)
  });
}
export default createOasis;
