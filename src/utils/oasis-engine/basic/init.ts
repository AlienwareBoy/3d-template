import { WebGLEngine } from "oasis-engine";

export class initEngine {
  private instance: WebGLEngine | null = null;
  constructor(canvasId:string) {
      this.instance=new WebGLEngine(canvasId)
      this.instance.canvas.resizeByClientSize()
  }
}
