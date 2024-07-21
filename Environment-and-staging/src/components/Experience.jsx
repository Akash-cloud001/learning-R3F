import React, { useRef } from "react";
import { OrbitControls, useHelper, BakeShadows } from "@react-three/drei";
import { Perf } from "r3f-perf";
import * as THREE from "three";

const Experience = () => {
  const cube = useRef();
  const directionalLight = useRef();
  useHelper(directionalLight, THREE.DirectionalLightHelper, 1);
  return (
    <>
      <BakeShadows />

      <Perf position="top-left" />
      <color args={["ivory"]} attach="background" />

      <OrbitControls />
      <directionalLight
        ref={directionalLight}
        castShadow
        position={[1, 2, 3]}
        intensity={1.5}
        shadow-mapSize={ [ 1024, 1024 ] }
        shadow-camera-near={1}
        shadow-camera-far={20}
        shadow-camera-top={5}
        shadow-camera-right={5}
        shadow-camera-bottom={-5}
        shadow-camera-left={-5}
      />

      <ambientLight intensity={1.5} />

      <mesh castShadow scale={1.5} position-x={2} rotation-y={Math.PI * 0.25}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>

      <mesh castShadow position-x={-2}>
        <sphereGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>

      <mesh
        receiveShadow
        rotation-x={-Math.PI * 0.5}
        scale={20}
        position-y={-3}
      >
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </>
  );
};

export default Experience;
