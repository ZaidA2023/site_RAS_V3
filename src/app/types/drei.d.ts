import { OrbitControls as OrbitControlsImpl } from 'three-stdlib'

declare module '@react-three/drei' {
  export class OrbitControls extends OrbitControlsImpl {}
}