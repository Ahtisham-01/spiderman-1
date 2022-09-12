import * as THREE from 'three'
import { Suspense, useEffect,useRef, useLayoutEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { ScrollControls, Sky, useScroll, useGLTF, useAnimations,Stars } from '@react-three/drei'
import Content from './content'
import './styles.css'
export default function App() {

  return (
    <div>

  
    <Canvas className='canv' dpr={[1, 2]} shadows camera={{ position: [0, 0, 10], near: 0.1, far: 1000 }} 
 >


      <ambientLight intensity={1} />
      {/* <fog attach="fog" args={['#ffd0d0', 5, 18]} /> */}
      <spotLight angle={0.14} color="#ffd0d0" penumbra={1} position={[25, 50, -20]} shadow-mapSize={[2048, 2048]} shadow-bias={-0.0001} castShadow />
      {/* <Sky scale={1000} sunPosition={[2, 0.4, 10]} /> */}
      <Suspense fallback={null}>
      <Stars radius={500} depth={50} count={1000} factor={10} />
        {/* Wrap contents you want to scroll into <ScrollControls> */}
        <ScrollControls pages={3}>
          <LittlestTokyo scale={2.2} position={[0, -5, 0]} rotation={[0,2.3,0]} />
   
        </ScrollControls>

      </Suspense>
    
    </Canvas>

 
    </div>
    
  )
}

function LittlestTokyo({ ...props }) {
  // This hook gives you offets, ranges and other useful things
  const scroll = useScroll()
  const { scene, nodes, animations } = useGLTF('/spiderman_far_from_suit.glb')
  const { actions } = useAnimations(animations, scene)
  useLayoutEffect(() => Object.values(nodes).forEach((node) => (node.receiveShadow = node.castShadow = true)))
 
  useFrame((state, delta) => {
    const action = actions['Take 001']
    // The offset is between 0 and 1, you can apply it to your models any way you like
    const offset = 1 - scroll.offset
    // action.time = THREE.MathUtils.damp(action.time, (action.getClip().duration / 2) * offset, 100, delta)
    state.camera.position.set(0, -100, 0)
    state.camera.position.set(Math.sin(offset) * 10, Math.atan(offset * Math.PI * 2) * 20, Math.cos((offset * Math.PI) / 3) *-10)
  
    state.camera.lookAt(0,0, 3)
    
  })
  return <primitive object={scene} {...props} />
}


useGLTF.preload('/spiderman_far_from_suit.glb')
