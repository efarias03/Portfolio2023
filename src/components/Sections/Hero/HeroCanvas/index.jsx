import { Canvas } from "@react-three/fiber"
import { DavidModel } from "../../../David"
import { Environment, Loader, OrbitControls } from "@react-three/drei"
import { Suspense } from "react"


export function HeroCanvas() {

    return (
        <>
            <Canvas
                id="hero-canvas"
                style={{
                    position: "absolute",
                    top: "0%",
                }}
                dpr={[1, 1]}
                frameloop="demand"
            >
                <fog attach={"fog"} args={["#0a0d14", 2, 20]} />
                <Suspense fallback={null}>
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

                    <pointLight position={[-10, 0, 0]} />
                    <pointLight color={"#000000"} position={[10, 0, 0]} />

                </Suspense>
            </Canvas>
            <Loader />
        </>
    )
}

