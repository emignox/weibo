// import { Text3D } from "@react-three/drei";
// import { Color } from "three";
// import { useState } from "react";

// interface TextProps {
//   value: string;
//   position: [number, number, number];
//   color: Color | string;
//   size: number;
// }

// export default function Text({ value, position, color, size }: TextProps) {
//   const [isHovered, setIsHovered] = useState(false);
//   return (
//     <Text3D
//       font="/Roboto_Light_Regular.json"
//       curveSegments={32}
//       bevelEnabled
//       bevelSize={0.04}
//       bevelThickness={0.1}
//       height={0.1}
//       lineHeight={0.5}
//       letterSpacing={-0.01}
//       size={isHovered ? size + 0.1 : size}
//       position={position}
//       onPointerEnter={() => setIsHovered(true)}
//       onPointerLeave={() => setIsHovered(false)}
//     >
//       {value}
//       <meshStandardMaterial color={color} />
//     </Text3D>
//   );
// }
import { Text3D } from "@react-three/drei";
import { Color } from "three";
import { useState, useEffect } from "react";

interface TextProps {
  value: string;
  position: [number, number, number];
  color: Color | string;
  size: number;
  bevelThickness: number;
  bevelSize: number;
  metalness: number;
  rotation: [number, number, number];
  onClick?: () => void;
}

export default function Text({
  value,
  position,
  color,
  size,
  bevelThickness,
  bevelSize,
  metalness,
  rotation,
  onClick,
}: TextProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [currentSize, setCurrentSize] = useState(size);

  useEffect(() => {
    let frameId: number;
    if (isHovered) {
      const animateIn = () => {
        setCurrentSize((prevSize) => Math.min(prevSize + 0.005, size + 0.1));
        frameId = requestAnimationFrame(animateIn);
      };
      animateIn();
    } else {
      const animateOut = () => {
        setCurrentSize((prevSize) => Math.max(prevSize - 0.01, size));
        frameId = requestAnimationFrame(animateOut);
      };
      animateOut();
    }
    return () => cancelAnimationFrame(frameId);
  }, [isHovered, size]);

  return (
    <Text3D
      onClick={onClick}
      rotation={rotation}
      font="/Roboto_Light_Regular.json"
      curveSegments={32}
      bevelEnabled
      bevelSize={bevelSize}
      bevelThickness={bevelThickness}
      height={0.1}
      lineHeight={0.5}
      letterSpacing={-0.01}
      size={currentSize}
      position={position}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
    >
      {value}
      <meshStandardMaterial color={color} metalness={metalness} roughness={0} />
    </Text3D>
  );
}
