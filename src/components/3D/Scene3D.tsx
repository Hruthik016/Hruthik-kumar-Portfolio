import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { FloatingCube } from "./FloatingCube";

export const Scene3D = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <pointLight position={[-10, -10, -10]} color="#a855f7" />
        
        <FloatingCube position={[-2, 1, 0]} color="#a855f7" scale={0.8} />
        <FloatingCube position={[2, -1, 0]} color="#3b82f6" scale={0.6} />
        <FloatingCube position={[0, 2, -2]} color="#ec4899" scale={0.7} />
        <FloatingCube position={[-1, -2, 1]} color="#10b981" scale={0.5} />
      </Canvas>
    </div>
  );
};