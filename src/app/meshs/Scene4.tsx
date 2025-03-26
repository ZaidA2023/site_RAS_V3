import React from 'react'
import dynamic from 'next/dynamic'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei/core'

// Import the Model component dynamically to avoid SSR issues
const Model = dynamic(() => import('./Model4'), { ssr: false })

export default function umidk() {
  return (
    <Canvas
    camera={{
      fov: 75,
      position: [0, 0, 0.3],  // Initial camera position [x, y, z]
      near: 0.1,
      far: 1000
    }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} />
      <OrbitControls 
        target = {[0,0,0]}
        enableZoom = {false}
        />
      <Model />
    </Canvas>
  )
}