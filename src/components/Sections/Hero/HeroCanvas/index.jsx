import { Canvas } from "@react-three/fiber"
import { DavidModel } from "../../../David"
import { Environment, OrbitControls } from "@react-three/drei"


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

