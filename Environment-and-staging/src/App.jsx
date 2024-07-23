import './App.css'
import { Canvas }  from "@react-three/fiber"
import Experience from './components/Experience'
import { useEffect } from 'react'
import * as THREE from 'three'
const App = ()=>{
  // const created = ({scene})=>{
  //   console.log('created :: ', scene)
  //   scene.background = new THREE.Color('red')
  // }
  // const created = ({gl})=>{
  //   console.log('created :: ', gl)
  //   gl.setClearColor('#ff0000', 0.5)
  // }
  // const created = (state)=>{
  //   console.log('created :: ', state.gl)
  // }
  return (
    <>
    <section id='canvas-container'>
      <Canvas 
        shadows={false}
        camera={
          {
            fov: 45, // in orthogrphic camera fov doesn't  work
            near: 0.1,
            far: 200,
            position: [1,2,12]
          }
        }
        // onCreated={created}
      >
        <Experience />
      </Canvas>
    </section>
    </>
  )
}

export default App