import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model() {
  // Loads the glTF model from the public folder
  const { scene } = useGLTF('/3d/duck.glb')
  return <primitive object={scene} dispose={null} />
}
