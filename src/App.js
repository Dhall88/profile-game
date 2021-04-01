import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Canvas } from "@react-three/fiber";
import Scene from './components/Scene/scene';
import "./index.css";

function App() {
  return (
      <Canvas camera={{ zoom: 40, position: [0, 0, 500] }}>
        {/* <Suspense
          fallback={<Dom center className="loading" children="Loading..." />}
        >
        </Suspense> */}
        <Scene />
      </Canvas>
  );
}

export default App