import React from "react";
import { OrbitControls } from "@react-three/drei";
import { useControls, button } from "leva";
import {Perf} from 'r3f-perf'
const Experience = () => {
  const {perfVisible} = useControls({
    perfVisible: true
  })
  const { xAxis, yAxis, color, visible } = useControls("sphere", {
    xAxis: { value: -2, min: -4, max: 4, step: 0.01 },
    yAxis: { value: -2, min: -4, max: 4, step: 0.01 },
    color: { value: "#f00" },
    visible: true,
    clickMe: button(() => {
      console.log("first");
    }),
    choice: {
      options: ["a", "b", "c"],
    },
  });
  const { scale } = useControls("cube", {
    scale: { value: 1, min: 0, max: 4, step: 0.01 },
  });
  // ! this below code snippet has some error i think the library haD depricated the track pad debug pannel
  // const { position } = useControls({
  //   position: {
  //     value : {x:-2, y:1},
  //     step: 0.01
  //   }
  // })
  return (
    <>
      {perfVisible ? <Perf position="top-left"/> : null}
      <OrbitControls />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={1.5} />
      <mesh scale={scale} position-x={2} rotation-y={Math.PI * 0.25}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>

      <mesh position={[xAxis, yAxis, 0]} visible={visible}>
        <sphereGeometry />
        <meshStandardMaterial color={color} />
      </mesh>

      <mesh rotation-x={-Math.PI * 0.5} scale={20} position-y={-3}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </>
  );
};

export default Experience;
