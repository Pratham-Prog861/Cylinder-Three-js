import { Canvas } from '@react-three/fiber'
import React from 'react'
import "./style.css"
import { OrbitControls } from '@react-three/drei'
import Scene from "./Scene"
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing'

const App = () => {
  return (
    <>
      <Canvas flat camera={{ fov: 35 }}>
        <ambientLight />
        <Scene />
        <EffectComposer>
          <Bloom
            minmapBlur
            intensity={11.0} // The bloom intensity.
            luminanceThreshold={0.36} // luminance threshold. Raise this value to mask out darker elements in the scene.
            luminanceSmoothing={0.2} // smoothness of the luminance threshold. Range is [0, 1]
          />
        </EffectComposer>
      </Canvas >
    </>
  )
}

export default App