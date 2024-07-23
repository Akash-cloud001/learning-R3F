import React, { useRef } from "react";
import {
  OrbitControls,
  useHelper,
  BakeShadows,
  SoftShadows,
  AccumulativeShadows,
  RandomizedLight,
  ContactShadows,
  Sky
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useControls, button } from "leva";

const Experience = () => {
  const cube = useRef();
  const directionalLight = useRef();
  useHelper(directionalLight, THREE.DirectionalLightHelper, 1);

  console.log(cube);
  useFrame((state, delta) => {
    //  const time = state.clock.elapsedTime
    //  cube.current.position.x = Math.sin(time) + 2
    cube.current.rotation.y += delta * 0.2;
  });

  const { color, opacity, blur } = useControls('cubeShadow', {
    color: '#1d8f75',
    blur: {value: 2.8, min: 0, max: 10, step: 0.001},
    opacity: {value: 0.4, min: 0, max: 1, step: 0.0001}
  })

  const {sunPosition} = useControls('sky',{
    sunPosition: {value: [1, 2, 3]}
  })
  return (
    <>
      {/* <SoftShadows /> */}
      {/* <BakeShadows /> */}

      <Perf position="top-left" />
      <color args={["ivory"]} attach="background" />

      <OrbitControls />

      {/* <AccumulativeShadows
        temporal
        frames={50}
        scale={20}
        position={[0, -1.99, 0]}
        color='#316d39'
        opacity={0.5}
        blend={100}
      >
        <RandomizedLight
          amount={8}
          radius={1}
          ambient={0.5}
          intensity={1}
          bias={0.001}
          position={[5, 5, -10]}
          
        />
      </AccumulativeShadows> */}
      <ContactShadows
        position={[0, -1.99, 0]}
        scale={10}
        resolution={512}
        far={2}
        color={color}
        blur={blur}
        opacity={opacity}
        frames={1}
      />
      <directionalLight
        ref={directionalLight}
        castShadow
        position={sunPosition}
        intensity={1.5}
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={1}
        shadow-camera-far={20}
        shadow-camera-top={5}
        shadow-camera-right={5}
        shadow-camera-bottom={-5}
        shadow-camera-left={-5}
      />

      <ambientLight intensity={1.5} />


        <Sky sunPosition={sunPosition}/>

      <mesh
        ref={cube}
        castShadow
        scale={1.5}
        position-x={2}
        rotation-y={Math.PI * 0.25}
      >
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>

      <mesh castShadow position-x={-2}>
        <sphereGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>

      <mesh rotation-x={-Math.PI * 0.5} scale={20} position-y={-2}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </>
  );
};

export default Experience;
