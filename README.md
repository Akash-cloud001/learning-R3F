# React Three Fiber Learning Journey

### Welcome to the React Three Fiber learning journey repository! This repository covers the basics of using react-three-fiber (r3f) to create 3D scenes in React, including examples and lessons.

### Table of Contents

- Installation
- Getting Started
- Introduction
- Lesson 1
- Template
- Drei Directory
- Debug and Performance
- Background, Lights, Shadows, Sky, Environment

### Installation

To get started with react-three-fiber using Vite, follow these steps:

` npm create vite my-app `

Select React as the framework.

` cd my-app `
` npm install three @react-three/fiber `

Start Development Server

` npm run dev `

After setting up the project, you can start creating and exploring 3D scenes using **react-three-fiber**. 

### Introduction

This repository documents the process of learning react-three-fiber, a React renderer for three.js. We start with a basic scene and gradually incorporate more advanced features and helper functions provided by react-three-drei

### Lesson 1

In Lesson 1, we learned how to implement three.js in React using react-three-fiber and react-three. We recreated the basic scene from the template and added orbital controls, similar to what we did in native JavaScript.

![image](https://github.com/user-attachments/assets/1ae79801-ab75-4177-835a-46bbd968baeb)

### Template

The template contains a boilerplate project with a basic scene, including sphere, box, and plane geometry. Initially, this scene does not include orbital controls.

### Drei

In the Drei Directory, we explored react-three-drei, a collection of helpful pre-written helper functions for react-three-fiber. These utilities simplify common tasks and enhance the development experience.

To install react drei in the project use this command: `npm install @react-three/drei`

![image](https://github.com/user-attachments/assets/032c1a2e-8fd0-402e-afed-9a9ac9f481aa)

### Lesson 4: DEBUG & PERFORMANCE

#### Debugging with Leva
In React development, using strict.mode can handle many debugging scenarios. When it comes to debugging in react-three-fiber (R3F), there are several useful tools available. For this lesson, we'll use Leva to tweak geometries and other scene parameters. Leva provides an intuitive interface for real-time adjustments, making it easier to fine-tune your 3D scenes.

#### Monitoring with R3F-Perf
For monitoring performance, traditional solutions like stats.js are still viable. However, in this lesson, we'll utilize R3F-Perf. R3F-Perf offers a wealth of information, including drawn points, memory usage, GPU usage, time to render the scene, and more. This comprehensive tool is invaluable for gaining insights into your scene's performance and ensuring smooth and efficient rendering.

![image](https://github.com/user-attachments/assets/39a0a672-9863-44db-8b3a-d5c8f3bcf61f)


### Lesson 5: Background, Lights, Shadows, Sky, Environment

#### Background

There are multiple ways to set the background in R3F, including:

- Using background property in CSS:
  ```
  <Canvas style={{ background: '#000000' }}>
  {/* Your scene components */}
  </Canvas>
  ```
- Using setClearColor on the renderer:
  ```
  <Canvas gl={{ setClearColor: '#000000' }}>
    {/* Your scene components */}
  </Canvas>
  ```
- Using scene background:
  ```
  <Canvas>
  <color attach="background" args={['#000000']} />
  {/* Your scene components */}
  </Canvas>
  ```

#### Light:

Using lights in R3F is straightforward, with predefined components such as:

- `<ambientLight />`
- `<hemisphereLight />`
- `<directionalLight />`
- `<pointLight />`
- `<spotLight />`

#### LighHelper:

You can use light helpers in R3F with useHelper from Drei, associating the light using a ref in the useHelper hook:

```
import { useRef } from 'react';
import { useHelper } from '@react-three/drei';
import { DirectionalLightHelper } from 'three';

const Scene = () => {
  const directionalLight = useRef();
  useHelper(directionalLight, DirectionalLightHelper, 1);

  return (
    <Canvas>
      <directionalLight ref={directionalLight} intensity={1.5} />
      {/* Your scene components */}
    </Canvas>
  );
};
```

#### Shadows:

In R3F, you can manage shadows using various techniques:

- Default three.js shadows system: Use castShadow and receiveShadow attributes on components, and the shadows attribute on the canvas.
  ```
  <Canvas shadows>
  <mesh castShadow receiveShadow>
    {/* Mesh properties */}
  </mesh>
  {/* Other scene components */}
  </Canvas>
  ```
- Baked shadows: Ideal for static scenes for better performance. Use the Drei helper ` <BakeShadows /> `which bakes shadows the first time the scene renders.
  ```
  import { BakeShadows } from '@react-three/drei';
  
  <Canvas>
    <BakeShadows />
    {/* Your scene components */}
  </Canvas>
  ```
- DreiShadows:
  - SoftShadow: For softer shadows as default shadows are too sharp.
    ```
    import { SoftShadow } from '@react-three/drei';
    
    <Canvas>
      <SoftShadow />
      {/* Your scene components */}
    </Canvas>
    ```
  - AccumulativeShadow: Accumulates multiple shadows at render time, randomly creating shadows of the scene. It can only be rendered on a plane.
    ```
    import { AccumulativeShadow } from '@react-three/drei';
    
    <Canvas>
      <AccumulativeShadow />
      {/* Your scene components */}
    </Canvas>
    ```
  - ContactShadow: Does not rely on three.js shadows nor require light, and casts only on a plane.
    ```
    import { ContactShadow } from '@react-three/drei';

    <Canvas>
      <ContactShadow />
      {/* Your scene components */}
    </Canvas>
    ```
### Sky

You can add a sky to your scene using Drei's <Sky /> component and control the sun's position with Leva:
```
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
```
![image](https://github.com/user-attachments/assets/7e8a846c-4e38-42a4-88f8-327492da1a9b)

  
