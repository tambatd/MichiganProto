import React, { Suspense, useState } from "react";
import { store } from "../../../src/Data/store";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei";
import styles from "./IntroA.module.css";

const Model = () => {
  const { scene } = useGLTF("./models/intro_scene.glb"); // Ensure this path is correct
  return <primitive object={scene} scale={1} />;
};

const IntroA = () => {
  const { scene, setScene } = store();

  const [isSceneIntroTextDone, setSceneIntroTextDone] =
    useState<boolean>(false);
  const [isNextSlide, setIsNextSlide] = useState<number>(0);

  const [fadeOut, setFadeOut] = useState<boolean>(false);

  const handleNextSlide = (index: number) => {
    console.log(index);
    setFadeOut(true);
    setTimeout(() => {
      setIsNextSlide(index);
      setFadeOut(false);
    }, 2000);
  };

  const handleFinalSlide = () => {
    setFadeOut(true);
    setTimeout(() => {
      setSceneIntroTextDone(true);
      setFadeOut(false);
    }, 2000);
  };

  if (!isSceneIntroTextDone) {
    if (isNextSlide == 0) {
      return (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#000000",
            color: "#FFFFFF",
          }}
        >
          <h2 className={`${fadeOut ? styles.fadeOutText : styles.fadeInText}`}>
            Do you wish to be reborn?
          </h2>
          <h2
            className={`${fadeOut ? styles.fadeOutText : styles.fadeInText} ${
              styles.selectable
            }`}
            onClick={() => handleNextSlide(1)}
          >
            Yes...
          </h2>

          <h2
            className={`${
              fadeOut ? styles.fadeOutText : styles.fadeInTextLong
            }`}
          >
            no...
          </h2>
        </div>
      );
    } else if (isNextSlide == 1) {
      return (
        <div
          onClick={() => handleNextSlide(2)}
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#000000",
            color: "#FFFFFF",
          }}
        >
          <h2 className={`${fadeOut ? styles.fadeOutText : styles.fadeInText}`}>
            ...and with this single touch i will grant thee a chance to be born
            anew...
          </h2>
          <h2 className={`${fadeOut ? styles.fadeOutText : styles.fadeInText}`}>
            to experience what was and what will, to set right what should and
            should not have and will be.
          </h2>
          <h2 className={`${fadeOut ? styles.fadeOutText : styles.fadeInText}`}>
            we are all interconnected with each other in some form
          </h2>
          <h2 className={`${fadeOut ? styles.fadeOutText : styles.fadeInText}`}>
            it is your job to reconnect that severed connection, and take back
            your future
          </h2>
        </div>
      );
    } else if (isNextSlide == 2) {
      return (
        <div
          onClick={() => handleFinalSlide()}
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#000000",
            color: "#FFFFFF",
          }}
          className={`${fadeOut ? styles.fadeOutText : ""}`}
        >
          <h2 className={`${fadeOut ? styles.fadeOutText : styles.fadeInText}`}>
            ...awake...
          </h2>
          <h2 className={`${fadeOut ? styles.fadeOutText : styles.fadeInText}`}>
            the future rests once again on your shoulders young one
          </h2>
        </div>
      );
    }
  } else
    return (
      <div style={{ width: "100vw", height: "100vh" }}>
        <Canvas>
          <PerspectiveCamera makeDefault position={[50, 10, 0]} fov={20} />
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[50, 10, 0]} intensity={1} />
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
