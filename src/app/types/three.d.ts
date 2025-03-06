
declare module 'three/examples/jsm/loaders/GLTFLoader' {
  export class GLTFLoader extends THREE.Loader {
    load(
      url: string,
      onLoad: (gltf: GLTF) => void,
      onProgress?: (event: ProgressEvent) => void,
      onError?: (event: ErrorEvent) => void
    ): void
  }
}