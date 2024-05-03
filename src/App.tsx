import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { Suspense } from "react";
import { Model } from "./Laying-monkey-1";
import Text from "./text";

function App() {
  return (
    <div className="w-screen h-screen overflow-hidden bg-gray-200 ">
      <Canvas className="w-full h-full">
        <Suspense fallback={null}>
          <Text
            value="hello"
            color={"white"}
            position={[-7, -4, 10]}
            size={1}
          />
          <Text value="hello" color={"white"} position={[3, -4, 10]} size={1} />
          <Text
            value="hello"
            color={"white"}
            position={[-2, -4, 10]}
            size={1}
          />

          <OrbitControls
            enableZoom={false}
            rotateSpeed={0.1}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />
          <Stage>
            <Model />
          </Stage>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
