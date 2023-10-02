/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 public/michelangelos_david_optimised.glb -o src/components/David.jsx -r public 
Author: Thomas Flynn (https://sketchfab.com/nebulousflynn)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/head-of-michelangelos-david-optimised-d29af50360624e5e9b1855666475380d
Title: Head Of Michelangelo's David, Optimised
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function DavidModel(props) {
  const { nodes, materials } = useGLTF('/michelangelos_david_optimised.glb')
  // console.log(materials);
  materials.material_0.metalness = 0.5;
  materials.material_0.roughness = 1;
  materials.material_0.color.r = 180;
  materials.material_0.color.g = 150;
  materials.material_0.color.b = 100;

  return (
    <group {...props} dispose={null}>
      <mesh 
      geometry={nodes.Object_2.geometry} 
      material={materials.material_0}
      position={[-4, -5, 3.5]} 
      rotation={[3.129, 0, 0]} 
      scale={0.05}
      />
    </group>
  )
}

useGLTF.preload('/michelangelos_david_optimised.glb')
