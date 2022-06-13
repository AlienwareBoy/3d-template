import { Camera, Entity, Scene, WebGLEngine } from "oasis-engine";

export class initEngine {
  private instance: WebGLEngine | null = null;
  private camera: Camera | null = null;
  private sceneBg: number[] = [];
  private Entiry: Entity | null = null;
  private scene: Scene | undefined = undefined;
  constructor(canvasId: string) {
    this.instance = new WebGLEngine(canvasId);
    this.instance.canvas.resizeByClientSize();
  }
  get getCamera() {
    return this.camera;
  }
  get getEngine() {
    return this.instance as WebGLEngine;
  }
  addComponent(Component: any) {
    if (this.Entiry) {
      this.Entiry.addComponent(Camera);
    } else {
      new Error("未创建实体");
    }
  }
  get getSceneBg() {
    return this.camera;
  }
  run() {
    this.instance?.run();
  }
  pause() {
    this.instance?.pause();
  }
  resume() {
    this.instance?.resume();
  }
  set setSceneBg(arr: number[]) {
    if (this.scene) {
      this.scene.background.solidColor.setValue(arr[0], arr[1], arr[2], arr[3]);
      this.sceneBg = arr;
    }
  }
  /**
   *  创建场景之后，自动创建实体，基于实体基础上 加入各类组件进行操作
   * */
  createEntiry(sceneName = "root") {
    const scene = this.instance?.sceneManager.activeScene;
    this.scene = scene;
    return new Promise((resolve: (params: Entity) => void, reject) => {
      const rootEntity = scene?.createRootEntity(sceneName) as Entity;
      this.Entiry = rootEntity;
      resolve(rootEntity);
    });
  }
  /**
   *  创建场景之后，自动创建实体，基于实体基础上 加入各类组件进行操作
   * */
  createCamera(cameraName = "camera", config: { [data: string]: string }) {
    if (!this.Entiry) {
      new Error("先创建实体");
      return;
    }
    const camera = this.Entiry?.createChild(cameraName) as Entity;
    type key = keyof Camera;
    for (let item in config) {
      camera[item] = config[item];
    }
    this.Entiry?.addComponent(Camera);
  }
}
