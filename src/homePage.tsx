import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Stage, Box } from "@react-three/drei";
import { Suspense, useMemo } from "react";
import { Model } from "./Laying-monkey-1";
import { ImMenu } from "react-icons/im";
import { TextureLoader, MeshPhysicalMaterial } from "three";
import TextContent from "./textContent";
import * as THREE from "three";

function HomePage() {
  const texture = useLoader(TextureLoader, "stone.jpg");

  const material = useMemo(() => {
    return new MeshPhysicalMaterial({
      color: "#fff",
      map: texture,
      side: THREE.BackSide,
      metalness: 1.5,
      roughness: 1,
      shadowSide: THREE.BackSide,
    });
  }, [texture]);

  return (
    <>
      <div className="flex items-center justify-between w-full px-3 text-3xl font-black ">
        <p>weibo...</p>
        <ImMenu className="text-3xl font-black" />
      </div>
      <div className="w-full h-screen overflow-hidden bg-gray-200 rounded-full">
        <Canvas className="w-full h-full">
          <Suspense fallback={null}>
            <TextContent />

            <Box args={[3700, 3700, 2500]} material={material} />

            <OrbitControls
              enableZoom={false}
              rotateSpeed={0.1}
              minAzimuthAngle={-Math.PI / 4} // -180 degrees
              maxAzimuthAngle={Math.PI / 4}
              minPolarAngle={Math.PI / 2}
              maxPolarAngle={Math.PI / 2}
            />
            <Stage>
              <Model />
            </Stage>
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}

export default HomePage;
