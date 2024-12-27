import React, { useRef } from 'react'
import { useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

const Scene = () => {
    let tex = useTexture("https://plus.unsplash.com/premium_photo-1668024966086-bd66ba04262f?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
    let cyl = useRef(null)
    useFrame((state, delta) => {
        cyl.current.rotation.y += delta;
    })
    return (
        <group rotation={[0, 1.2, 0.3]}>
            <mesh ref={cyl}>
                <cylinderGeometry args={[1, 1, 1, 60, 60, true]} />
                <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} />
            </mesh>
        </group>
    )
}

export default Scene