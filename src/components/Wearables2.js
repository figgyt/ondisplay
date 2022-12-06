import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useRef } from "react";

export default function Wearables2(props) {
  const wearableMale = useLoader(GLTFLoader, "/assets/models/wearableMale.glb");
  const wearableFemale = useLoader(
    GLTFLoader,
    "/assets/models/wearableFemale.glb"
  );
  // console.log(gltf)

  const wearablesRefMale = useRef();
  const wearablesRefFemale = useRef();
  useFrame((state, delta) => {
    wearablesRefMale.current.rotation.y -= delta * 0.08;
    wearablesRefFemale.current.rotation.y += delta * 0.08;
  });

  return (
    <>
      <primitive
        object={wearableMale.scene}
        ref={wearablesRefMale}
        scale={0.05}
        position={props.position}
      />
      <primitive
        object={wearableFemale.scene}
        ref={wearablesRefFemale}
        scale={0.05}
        position={props.position}
      />
    </>
  );
}
