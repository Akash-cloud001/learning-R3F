import './App.css'
import { Canvas }  from "@react-three/fiber"
import Experience from './components/Experience'
const App = ()=>{
  return (
    <>
    <section id='canvas-container'>
      <Canvas 
        camera={
          {
            fov: 45, // in orthogrphic camera fov doesn't  work
            near: 0.1,
            far: 200,
            position: [1,2,12]
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