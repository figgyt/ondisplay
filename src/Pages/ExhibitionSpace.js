import React from "react";
import BaseScene from "../components/BaseScene";
import BaseCharacter from "../components/BaseCharacter";
import Wearables2 from "../components/Wearables2";
import Hall from "../components/Hall";
export default function ExhibitionSpace() {
  return (
    <BaseScene>
      {/* <BaseBox
        text={false}
        position={[0, 0.5, -20]}
        args={[2, 1, 2]}
        color='white'
      /> */}

      <BaseCharacter
        controls
        position={[0, 2, 50]}
        args={[0.5]}
        color='yellow'
      />

      <Hall args={[0.5, 2, 0.5]} scale={1.5} position={[0, 8, 0]} />
    

      {/* <Wearables2 /> */}

      {/* <VideoTest /> */}
    </BaseScene>
  );
}
