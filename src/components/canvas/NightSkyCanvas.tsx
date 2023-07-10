import { OrbitControls, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import useIsMobile from "../../hook/useIsMobile";
import CanvasLoader from "../Loader";
import NightSky from "./NightSky";

const NightSkyCanvas = () => {
  const {isMobile} = useIsMobile()
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <NightSky isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};
export default NightSkyCanvas;
