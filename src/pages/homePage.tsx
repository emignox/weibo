import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
import { OrbitControls, Stage, Box } from "@react-three/drei";
import { Suspense, useMemo } from "react";
import { Model } from "../components/3D/Laying-monkey-1";
import { TextureLoader, MeshPhysicalMaterial } from "three";
import TextContent from "../components/3D/textContent";
import * as THREE from "three";
import Brand from "../components/content-homepage/brand";
import React from "react";

const HomePage = React.memo(() => {
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

  const CameraControls = React.memo(() => {
    const { camera, mouse } = useThree();

    useFrame(() => {
      camera.position.x += (mouse.x * 10 - camera.position.x) * 0.03;
      camera.position.y += (-mouse.y * 10 - camera.position.y) * 0.03;
      camera.lookAt(0, 0, 0);
    });

    return null;
  });

  return (
    <>
      <Suspense
        fallback={
          <>
            <div className="">
              <p>caricamento...</p>
            </div>
          </>
        }
      >
        <div className="w-full h-[95vh] overflow-hidden bg-gray-200 rounded-full">
          <Canvas className="w-full h-full">
            <CameraControls />

            <TextContent />

            <Box args={[3700, 3700, 2500]} material={material} />

            <OrbitControls
              enableZoom={false}
              enablePan={false}
              maxZoom={10}
              minZoom={10}
              rotateSpeed={0.1}
              minAzimuthAngle={-Math.PI / 4} // -180 degrees
              maxAzimuthAngle={Math.PI / 4}
              minPolarAngle={Math.PI / 2}
              maxPolarAngle={Math.PI / 2}
            />
            <Stage>
              <Model />
            </Stage>
          </Canvas>
        </div>
      </Suspense>
      <div>
        <Brand />
      </div>
    </>
  );
});

export default HomePage;
