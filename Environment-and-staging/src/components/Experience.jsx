import React from "react";
import {OrbitControls} from '@react-three/drei'
import {Perf} from 'r3f-perf'

const Experience = () => {
  return (
    <>
      <Perf position="top-left"/>
      <color args={ ['ivory']}  attach='background'/>

      <OrbitControls />
      <directionalLight position={[1,2,3]} intensity={1.5}/>
      <ambientLight intensity={1.5}/>
        <mesh scale={1.5} position-x={2} rotation-y={Math.PI * 0.25}>
          <boxGeometry />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>

        <mesh  position-x={-2}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>

      <mesh rotation-x={-Math.PI * 0.5} scale={20} position-y={-3}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </>
  );
};

export default Experience;
