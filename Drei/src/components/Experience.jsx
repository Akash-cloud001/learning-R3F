import React from "react";
import * as THREE from 'three'
import {
  OrbitControls,
  TransformControls,
  PivotControls,
  Html,
  Text,
  Float,
  MeshReflectorMaterial
} from "@react-three/drei";
import { useRef } from "react";
const Experience = () => {
  const cube = useRef();
  const sphere =useRef()
  return (
    <>
      <OrbitControls makeDefault />

      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={1.5} />

      <mesh ref={cube} position-x={2} scale={1.5} rotation-y={Math.PI * 0.25}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>

      <TransformControls object={cube} mode="translate" />

      <PivotControls
        anchor={[0, 0, 0]}
        depthTest={false}
        lineWidth={2}
        axisColors={["#9381ff", "#ff4d6d", "#7ae582"]}
      >
        <mesh ref={sphere} position-x={-2}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
          <Html position={ [1,1,0]} wrapperClass="label" center distanceFactor={5} occlude={[sphere, cube]}>
            That's a sphere ✅
            </Html>
        </mesh>
      </PivotControls>
      <mesh rotation-x={-Math.PI * 0.5} scale={20} position-y={-1}>
        <planeGeometry />
        {/* <meshStandardMaterial color="greenyellow" /> */}
        <MeshReflectorMaterial resolution={512} side={THREE.DoubleSide} mixBlur={1} blur={[1000,1000]} mirror={0.25} color={'greenyellow'}/>
      </mesh>
      <Float speed={2} floatIntensity={2} >
        <Text font='./Bangers-Regular.woff' fontSize={1} color='salmon' position-y={2} maxWidth={4} textAlign="center" >
          Let's Code R3F
          <meshNormalMaterial side={THREE.DoubleSide}/>
        </Text>
      </Float>
    </>
  );
};

export default Experience;
