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
  // // Init Engine
  // const engine = new WebGLEngine("canvas");
  // // Adapter to screen
  // engine.canvas.resizeByClientSize();

  // // Get root entity of current scene
  // const scene = engine.sceneManager.activeScene;
  // const rootEntity = scene.createRootEntity("root");

  // // Init Camera
  // let cameraEntity = rootEntity.createChild("camera_entity");
  // cameraEntity.transform.position = new Vector3(0, 5, 10);
  // cameraEntity.transform.lookAt(new Vector3(0, 0, 0));
  // cameraEntity.addComponent(Camera);
  // scene.background.solidColor.setValue(1, 1, 1, 1);

  // // Create a entity to add light component
  // let lightEntity = rootEntity.createChild("light");

  // // Create light component
  // let directLight = lightEntity.addComponent(DirectLight);
  // directLight.color = new Color(1.0, 1.0, 1.0);
  // directLight.intensity = 0.5;

  // // Control light direction by entity's transform
  // lightEntity.transform.rotation = new Vector3(45, 45, 45);

  // // Create Cube
  // let cubeEntity = rootEntity.createChild("cube");
  // let cube = cubeEntity.addComponent(MeshRenderer);
  // cube.mesh = PrimitiveMesh.createCuboid(engine, 2, 2, 2);
  // cube.setMaterial(new BlinnPhongMaterial(engine));

  // // Run Engine
  // engine.run();
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
