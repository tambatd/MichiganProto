import React, { Suspense } from "react";
import { store } from "../../../src/Data/store";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei";
const Model = () => {
  const { scene } = useGLTF("./models/intro_scene.glb"); // Ensure this path is correct
  return <primitive object={scene} scale={1} />;
};

const IntroA = () => {
  const { scene, setScene } = store();

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[50, 10, 0]} fov={50} />
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} intensity={1} />
          <Model />
          <OrbitControls enablePan={true} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default IntroA;
{
  /* <p>TestScene Intro A</p>
      <div onClick={() => setScene("intro")}>
        <p>Sending you back to intro</p>
      </div> */
}
