/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: CG DEADPOOL (https://sketchfab.com/Osman23)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/spiderman-far-from-suit-5f6157f8b0b1405fa63aca154b2debd1
title: Spiderman Far From Suit
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/spiderman_far_from_suit.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[908.25, 799.27, 1187.83]} rotation={[-Math.PI, Math.PI / 4, 2.8]} />
          <primitive object={nodes._rootJoint} />
          <skinnedMesh geometry={nodes.Object_246.geometry} material={materials.Cristal_Eyes} skeleton={nodes.Object_246.skeleton} />
          <skinnedMesh geometry={nodes.Object_248.geometry} material={materials.Eyes_Tom} skeleton={nodes.Object_248.skeleton} />
          <skinnedMesh geometry={nodes.Object_250.geometry} material={materials.Eyes_Black} skeleton={nodes.Object_250.skeleton} />
          <skinnedMesh geometry={nodes.Object_252.geometry} material={materials.Eyes_Black} skeleton={nodes.Object_252.skeleton} />
          <skinnedMesh geometry={nodes.Object_254.geometry} material={materials.Eyes_Black} skeleton={nodes.Object_254.skeleton} />
          <skinnedMesh geometry={nodes.Object_256.geometry} material={materials.Tom_Mask} skeleton={nodes.Object_256.skeleton} />
          <skinnedMesh geometry={nodes.Object_258.geometry} material={materials.Tom_Webshooters} skeleton={nodes.Object_258.skeleton} />
          <skinnedMesh geometry={nodes.Object_260.geometry} material={materials.Tom_Arms} skeleton={nodes.Object_260.skeleton} />
          <skinnedMesh geometry={nodes.Object_262.geometry} material={materials.Tom_Torso} skeleton={nodes.Object_262.skeleton} />
          <skinnedMesh geometry={nodes.Object_264.geometry} material={materials.Tom_Suit} skeleton={nodes.Object_264.skeleton} />
          <skinnedMesh geometry={nodes.Object_266.geometry} material={materials.Tom_Boots} skeleton={nodes.Object_266.skeleton} />
          <skinnedMesh geometry={nodes.Object_268.geometry} material={materials.Tom_legs} skeleton={nodes.Object_268.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/spiderman_far_from_suit.glb')