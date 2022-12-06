import * as THREE from "three";
import { useState, useEffect, useRef } from "react";
import { PlaneGeometry } from "three";
import { useFrame } from "@react-three/fiber";

export default function VideoRoom(props) {
  const [isClicked, setIsClicked] = useState(false);
  const videoRef = useRef();
  const [video] = useState(() => {
    const vid = document.createElement("video");
    vid.src = "/assets/Videos/videodemo.mp4";
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = false;
    vid.preload = "auto";

    return vid;
  });
  useEffect(() => {
    if (video && isClicked) {
      video.play();
    } else if (video) {
      video.pause();
    }
  }, [isClicked, video]);

  useFrame(({ camera }) => {
    if (videoRef.current) {
      const distance = camera.position.distanceTo(videoRef.current.position);

      // change opacity in increments
      if (distance < 8) {
        videoRef.current.material.opacity = THREE.MathUtils.lerp(
          videoRef.current.material.opacity,
          0.9,
          0.05
        );
      } else if (distance < 9) {
        videoRef.current.material.opacity = THREE.MathUtils.lerp(
          videoRef.current.material.opacity,
          0.8,
          0.05
        );
      } else if (distance < 10) {
        videoRef.current.material.opacity = THREE.MathUtils.lerp(
          videoRef.current.material.opacity,
          0.7,
          0.05
        );
      } else if (distance < 11) {
        videoRef.current.material.opacity = THREE.MathUtils.lerp(
          videoRef.current.material.opacity,
          0.6,
          0.05
        );
      } else {
        videoRef.current.material.opacity = THREE.MathUtils.lerp(
          videoRef.current.material.opacity,
          0.4,
          0.06
        );
      }
    }
  });

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  const handlePointerOver = () => {
    document.body.style.cursor = "pointer";
  };
  const handlePointerOut = () => {
    document.body.style.cursor = "none";
  };

  return (
    <mesh
      ref={videoRef}
      scale={0.5}
      position={[0, 0, -50]}
      rotation={[0, -1.2, 0]}
      onClick={handleClick}
      onPointerEnter={handlePointerOver}
      onPointerLeave={handlePointerOut}
    >
      <cylinderGeometry args={[16,16,10,50]} />

      <meshPhongMaterial
        side={THREE.DoubleSide}
        encoding={THREE.RGBAFormat}
        opacity={0.4}
        transparent={true}
      >
        <videoTexture
          attach='map'
          args={[video]}
          flipY={true}
          repeat={[1, 1]}
          offset={[0, 0]}
          opacity={0.1}
          wrapT={THREE.RepeatWrapping}
          wrapS={THREE.RepeatWrapping}
          encoding={THREE.RGBAFormat}
        />
      </meshPhongMaterial>
    </mesh>
  );
}
