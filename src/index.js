import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Canvas } from "@react-three/fiber";
import Scene from "./components/Scene/scene"
import Controls from "./components/Controls/controls"
import "./index.css";

function App() {
  return (
      <Canvas camera={{ position: [0, 5, 0] }}>
        <Scene />
        <Controls />
      </Canvas>
  );
}

const root = document.getElementById("root");
ReactDOM.render(<App />, root);