import React, { Suspense, useMemo, useRef, useState } from "react";
import { store } from "../../../src/Data/store";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Plane,
  useGLTF,
  useHelper,
} from "@react-three/drei";
import { memo } from "react";
import {
  AccumulativeShadows,
  RandomizedLight,
  Environment as EnvironmentImpl,
} from "@react-three/drei";
import * as THREE from "three"; // Import Three.js
import { useControls } from "leva";

function LightingElements() {
  const ambientCtl = useControls("Ambient Light", {
    visible: true,
    intensity: {
      value: 1.0,
      min: 0,
      max: 1.0,
      step: 0.1,
    },
  });

  const directionalCtl = useControls("Directional Light", {
    visible: true,
    position: {
      x: 0,
      y: 20,
      z: 0,
    },
    intensity: {
      value: 1.0,
      min: 0,
      max: 1.0,
      step: 0.1,
    },
    castShadow: true,
    color: { value: "lime" },
  });

  const pointCtl = useControls("Point Light", {
    visible: false,
    position: {
      x: 2,
      y: 0,
      z: 0,
    },
    castShadow: true,
  });

  const spotCtl = useControls("Spot Light", {
    visible: false,
    position: {
      x: 3,
      y: 2.5,
      z: 1,
    },
    castShadow: true,
  });

  const dirLight = useRef<THREE.DirectionalLight>(null);
  useHelper(dirLight, THREE.DirectionalLightHelper, 10, "red");

  const options = useMemo(() => {
    return {
      x: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
      y: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
      z: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
      visible: true,
      color: { value: "lime" },
    };
  }, []);

  const pA = useControls("Polyhedron A", options);

  return (
    <>
      <ambientLight
        visible={ambientCtl.visible}
        intensity={ambientCtl.intensity}
      />
      <directionalLight
        shadow-mapSize={[5024, 5024]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        ref={dirLight}
        visible={directionalCtl.visible}
        position={[
          directionalCtl.position.x,
          directionalCtl.position.y,
          directionalCtl.position.z,
        ]}
        intensity={directionalCtl.intensity}
        castShadow={directionalCtl.castShadow}
        color={pA.color}
      >
        <orthographicCamera
          attach="shadow-camera"
          args={[-100, 100, 100, -100]}
        />
      </directionalLight>
      {/* <pointLight
        visible={pointCtl.visible}
        position={[
          pointCtl.position.x,
          pointCtl.position.y,
          pointCtl.position.z,
        ]}
        castShadow={pointCtl.castShadow}
      />
      <spotLight
        visible={spotCtl.visible}
        position={[spotCtl.position.x, spotCtl.position.y, spotCtl.position.z]}
        castShadow={spotCtl.castShadow}
      /> */}
    </>
  );
}

const PatrickArtDirectionTest = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas shadows camera={{ position: [-15, 10, 15], fov: 15 }}>
        <color attach="background" args={["skyblue"]} />

        <LightingElements />

        {/* Top Plane Mesh */}
        <mesh
          rotation-x={-Math.PI / 2}
          castShadow={true}
          receiveShadow={true}
          position={[0, 10, 0]}
        >
          <boxGeometry args={[25, 25]} />
          <meshStandardMaterial color="white" />
        </mesh>

        {/* Middle Plane Mesh */}
        <mesh rotation-x={-Math.PI / 2} castShadow={true} receiveShadow={true}>
          <boxGeometry args={[50, 50]} />
          <meshStandardMaterial color="white" />
        </mesh>

        {/* Bottom Bigger Mesh */}
        <mesh
          rotation-x={-Math.PI / 2}
          receiveShadow={true}
          position={[0, -20, 0]}
        >
          <planeGeometry args={[100, 100]} />
          <meshStandardMaterial
            //attach="material"
            //side={THREE.DoubleSide}
            color="white"
          />
        </mesh>

        {/* OrbitControls setup */}
        <OrbitControls enablePan={true} makeDefault />
      </Canvas>
    </div>
  );
};

export default PatrickArtDirectionTest;
