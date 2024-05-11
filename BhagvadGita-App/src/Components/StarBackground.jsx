import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

const StarBackground = () => {
  const groupRef = useRef();
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 });

  useFrame((state, delta) => {
    groupRef.current.rotation.x -= delta / 10;
    groupRef.current.rotation.y -= delta / 15;
  });

  return (
    <group ref={groupRef}>
      <Stars
        radius={150}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
      />
    </group>
  );
};

const GalaxyBackground = () => (
  <Canvas
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100vh",
      // marginTop: "350px",
      zIndex: 1,
    //   background: 'linear-gradient(180deg, #000000 0%, #0e204b 100%)',
    backgroundColor: "transparent"
    }}
    camera={{ position: [0, 0, 1] }}
  >
    <Suspense fallback={null}>
      <StarBackground />
    </Suspense>
  </Canvas>
);

export default GalaxyBackground;
