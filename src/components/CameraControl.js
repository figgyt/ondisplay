import React from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export default function CameraControl() {
  const { camera } = useThree();

  useFrame(({ mouse }) => {
    //lerp
    // camera.rotation.x = THREE.MathUtils.lerp(
    //   camera.rotation.x,
    //   mouse.y * 0.15,
    //   0.05
    // );
    // camera.rotation.y = THREE.MathUtils.lerp(
    //   camera.rotation.y,
    //   -mouse.x * 1,
    //   0.05
    // );
    // camera.rotateX(mouse.y * 0.5);
    // camera.rotateY(mouse.x * -1);
  });

  return null;
}
