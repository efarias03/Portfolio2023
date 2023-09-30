import { Canvas } from "@react-three/fiber"
import { DavidModel } from "../../../David"
import { AsciiRenderer, Environment, Lightformer, OrbitControls, SpotLight } from "@react-three/drei"
import { DepthOfField, EffectComposer, Glitch, Noise, Scanline } from "@react-three/postprocessing"
import { useEffect, useState } from "react";

const isMobile = window.innerWidth < 768;


const Ground = () => {
    return (
        <group>
            <mesh rotation={[-Math.PI / 2, 0, 0]} scale={[10, 10, 1]} position={[0, -7, 0]} >
                <planeGeometry args={[10, 10, 10]} />
                <meshNormalMaterial color="hotpink" wireframe={false} />
            </mesh>
        </group>
    )
}


export function HeroCanvas() {

    return (
        <Canvas 
        id="hero-canvas" 
        style={{
            position: "absolute",
            top: "0%",
        }}
        dpr={[1, 2]}
        >
            {/* <color attach="background" args={['#0a0d14']} /> */}
            <OrbitControls
                enableZoom={false}
                enableRotate={true}
                minDistance={10}
                autoRotate
                autoRotateSpeed={1}
            />
            {/* <ambientLight intensity={0.1} /> */}

            <DavidModel />
            <Environment
                preset="night"
            />

        </Canvas>
    )
}

