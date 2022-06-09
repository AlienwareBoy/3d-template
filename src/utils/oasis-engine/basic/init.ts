import { Entity, WebGLEngine } from "oasis-engine";

export class initEngine {
  private instance: WebGLEngine | null = null;

  constructor(canvasId: string) {
    this.instance = new WebGLEngine(canvasId);
    this.instance.canvas.resizeByClientSize();
  }
  createScene(sceneName = "root") {
    const scene = this.instance?.sceneManager.activeScene;
    return new Promise((resolve: (params:Entity) => void, reject) => {
      const rootEntity = scene?.createRootEntity(sceneName)as Entity
      resolve(rootEntity);
    });
  }
}
