import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Theatre() {
  const theatre = useLoader(GLTFLoader, "/assets/models/theatre1205.glb");
  console.log(theatre)

  return (
    <>
      <primitive
        object={theatre.scene}
        scale={0.08}
        rotation={[0, Math.PI, 0]}
        position={[0,-5,30]}
      />
    </>
  );
}
