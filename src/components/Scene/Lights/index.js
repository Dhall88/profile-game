import React, { useRef } from "react";
import { useResource } from "react-three-fiber";
import {  useHelper } from "@react-three/drei";
import {
    CameraHelper,
    DirectionalLightHelper,
    PointLightHelper,
    Mesh
  } from "three";

export default () => {



    const light1 = useRef();
    const light2 = useRef();

    useHelper(light1, PointLightHelper, 1);
    useHelper(light2, PointLightHelper, 1);


  return (
    <group>
      <ambientLight ref={light2} position={[0, 4, 0]} intensity={0.3} />

      <directionalLight intensity={0.5} position={[0, 0, 0]} color={0xffffff} />

      <pointLight
        ref={light1}
        intensity={1}
        position={[-6, 3, -6]}
        color={0xffcc77}
      >
      </pointLight>

      <pointLight
        ref={light2}
        intensity={1}
        position={[6, 3, 6]}
        color={0xffcc77}
      >
      </pointLight>
    </group>
  );
};