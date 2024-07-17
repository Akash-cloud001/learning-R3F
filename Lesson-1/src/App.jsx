import './App.css'
import { Canvas }  from "@react-three/fiber"
import Experience from './components/Experience'
import * as THREE from 'three'
const App = ()=>{
  return (
    <>
    <section id='canvas-container'>
      <Canvas 
      // orthographic
      // flat  :: default color 
      // dpr={ [1,2]} :: this is being set by the R3F automatically
      gl={
        { 
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          // outputEncoding: THREE.LinearEnconding
        }
      }
        camera={
          {
            fov: 45, // in orthogrphic camera fov doesn't  work
            // zoom: 50,
            near: 0.1,
            far: 200,
            position: [3,2,6]
          }
        }
      >
        <Experience />
      </Canvas>
    </section>
    </>
  )
}

export default App
