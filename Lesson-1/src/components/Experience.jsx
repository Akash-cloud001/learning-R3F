import React from "react";
import { useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { extend, useFrame, useThree } from "@react-three/fiber";
import CustomObject from "./CustomObject";

extend( {OrbitControls} )


const Experience = () => {
  // const three = useThree();
  const {camera, gl} = useThree();

  const sphereRef = useRef();
  const groupRef = useRef();
  const cubeRef = useRef();
  
  useFrame((state, delta) => {
    // groupRef.current.rotation.y += delta;
    // const angel = state.clock.elapsedTime
    // state.camera.position.x = Math.sin( angel ) * 8
    // state.camera.position.z = Math.cos( angel ) * 8
    // state.camera.lookAt(0,0,0)
    sphereRef.current.rotation.y += delta * 0.1;
    cubeRef.current.rotation.y += delta * 0.1;
  });

  return (
    <>
      {/*  position={[2,0,0]} scale={[1,2,3]} */}
      {/* <sphereGeometry args={ [1.5, 32, 32] } /> */}
      {/* <meshBasicMaterial args={ [ { color:'red', wireframe:true } ] }/> */}


      <orbitControls args={ [camera, gl.domElement] }/> 


      <directionalLight position={[1,2,3]} intensity={1.5}/>
      <ambientLight intensity={1}/>


      <group ref={groupRef}>
        <mesh ref={cubeRef} scale={1.5} position-x={2} rotation-y={Math.PI * 0.25}>
          <boxGeometry />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>

        <mesh ref={sphereRef} position-x={-2}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" wireframe />
        </mesh>
      </group>

      <mesh rotation-x={-Math.PI * 0.5} scale={20} position-y={-3}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>


      <CustomObject/>
    </>
  );
};

export default Experience;
