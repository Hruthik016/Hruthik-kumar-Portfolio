import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Box } from "@react-three/drei";
import { Mesh } from "three";

interface FloatingCubeProps {
  position: [number, number, number];
  color: string;
  scale?: number;
}

export const FloatingCube = ({ position, color, scale = 1 }: FloatingCubeProps) => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <Box ref={meshRef} position={position} scale={scale}>
      <meshStandardMaterial color={color} transparent opacity={0.8} />
    </Box>
  );
};