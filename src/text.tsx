import { Text3D } from "@react-three/drei";
import { Color } from "three";

interface TextProps {
  value: string;
  position: [number, number, number];
  color: Color | string;
  size: number;
}

export default function Text({ value, position, color, size }: TextProps) {
  return (
    <Text3D
      font="/Roboto_Light_Regular.json"
      curveSegments={32}
      bevelEnabled
      bevelSize={0.04}
      bevelThickness={0.1}
      height={0.1}
      lineHeight={0.5}
      letterSpacing={-0.01}
      size={size}
      position={position}
    >
      {value}
      <meshStandardMaterial color={color} />
    </Text3D>
  );
}
