import React, { useRef, useEffect } from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  // Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const canvasRef = useRef();
  const glRef = useRef();

  useEffect(() => {
    // Cleanup function to dispose WebGL context when component unmounts
    return () => {
      if (glRef.current) {
        const gl = glRef.current.getContext('webgl') || glRef.current.getContext('webgl2');
        if (gl) {
          const loseContext = gl.getExtension('WEBGL_lose_context');
          if (loseContext) {
            loseContext.loseContext();
          }
        }
        glRef.current = null;
      }
    };
  }, []);

  return (
    <Canvas
      ref={canvasRef}
      frameloop='demand'
      dpr={[1, 1.5]} // Reduced DPR for better performance
      gl={{ 
        preserveDrawingBuffer: true,
        powerPreference: "high-performance",
        antialias: false,
        alpha: true,
        depth: true,
        stencil: false,
        failIfMajorPerformanceCaveat: false,
      }}
      onCreated={({ gl }) => {
        glRef.current = gl.domElement;
        
        // Handle context loss gracefully
        gl.domElement.addEventListener('webglcontextlost', (event) => {
          event.preventDefault();
          console.log('WebGL context lost for:', icon);
        });
        
        gl.domElement.addEventListener('webglcontextrestored', () => {
          console.log('WebGL context restored for:', icon);
        });
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;