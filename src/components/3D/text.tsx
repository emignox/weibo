import { Text3D } from "@react-three/drei";
import { Color } from "three";
import { useState, useEffect } from "react";
import React from "react";

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

const Text = React.memo(
  ({
    value,
    position,
    color,
    size,
    bevelThickness,
    bevelSize,
    metalness,
    rotation,
    onClick,
  }: TextProps) => {
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
        <meshStandardMaterial
          color={color}
          metalness={metalness}
          roughness={0}
        />
      </Text3D>
    );
  }
);
export default Text;
