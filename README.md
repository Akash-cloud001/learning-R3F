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
