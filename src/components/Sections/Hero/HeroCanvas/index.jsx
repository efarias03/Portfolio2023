import { Canvas } from "@react-three/fiber"
import { DavidModel } from "../../../David"
import { PerformanceMonitor } from "@react-three/drei"
import { useState } from "react"
import { round } from "lodash";


export function HeroCanvas() {
    const [dpr, setDpr] = useState(1);

    return (
        <>
            <Canvas
                id="hero-canvas"
                style={{
                    position: "absolute",
                    top: "0%",
                }}
                dpr={dpr}
            >
                <PerformanceMonitor onChange={({ factor }) => setDpr(round(0.5 + 1.5 * factor, 1))}>
                    <fog attach={"fog"} args={["#0a0d14", 2, 20]} />


                    <DavidModel />

                    <pointLight position={[-10, 0, 0]} />
                    <pointLight color={"#A75744"} position={[-10, 0, 0]} />
                    <pointLight color={"#000000"} position={[10, 0, 0]} />
                </PerformanceMonitor>
            </Canvas>
        </>
    )
}

