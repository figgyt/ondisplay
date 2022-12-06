import { Canvas } from "@react-three/fiber";
import { Loader, OrbitControls, PointerLockControls } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import Lights from "./Lights.js";
import Floor from "./Floor.js";
import VideoTest from "./VideoTest.js";
import VideoTest2 from "./VideoTest2.js";
import CameraControl from "./CameraControl.js";
import VideoRoom from "./VideoRoom.js";
import Theatre from "./Theatre.js"
import VideoWearable from "./VideoWearable.js";
import Wearables2 from "./Wearables2.js";

const BasicScene = ({ children }) => {
  return (
    <div>
      <Canvas
        shadows
        camera={{ fov: 35, near: 0.1, far: 1000, position:[0,-100,0] }}
      >
        <Lights />

        <Wearables2 position={[-4.5,0,20]}/>

        <VideoTest />
        <VideoTest2 />
        <VideoWearable position={[-4,0,0]}/>
        {/* <VideoRoom /> */}


        {/* <Theatre /> */}

        <Physics gravity={[0, 0, 0]}>
          {children}

          <Floor
            rotation={[Math.PI / -2, 0, 0]}
            color='white'
            transparent
            opacity={100}
          />
        </Physics>

        {/* <OrbitControls makeDefault/> */}
        <PointerLockControls />
        
        <CameraControl />
      </Canvas>
      <Loader />
    </div>
  );
};

export default BasicScene;
