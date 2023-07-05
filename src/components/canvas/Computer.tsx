import { useGLTF } from "@react-three/drei";

const Computer = ({ isMobile }: any) => {
    const computer = useGLTF("./night_sky/scene.gltf");
    return (
      <mesh>
        <hemisphereLight intensity={0.15} groundColor="black" />
        <pointLight intensity={1} />
      
        <primitive
          object={computer.scene}
          scale={isMobile ? 0.07 : 0.1}
          position={isMobile ? [0, -2.3, -0] : [0, -1.5, -1.5]}
        />
      </mesh>
    );
  };

export default Computer