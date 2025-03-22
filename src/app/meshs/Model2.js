'use client'
import { useLoader } from '@react-three/fiber'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'

export default function Model() {
  const materials = useLoader(MTLLoader, '/3d/flaps.mtl')
  const obj = useLoader(OBJLoader, '/3d/flaps.obj', (loader) => {
    loader.setMaterials(materials)
  })

  return (
    <group rotation={[-Math.PI / 2+0.8, 0, 2.8]}>
      <primitive object={obj} />
    </group>
  )
}