import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Canvas, Dom } from "react-three-fiber";
import Scene from './components/Scene/index'
import Controls from './components/Controls/index'
import "./index.css";

function App() {
  return (
      <Canvas camera={{ zoom: 40, position: [0, 0, 500] }}>
        {/* <Suspense
          fallback={}
        >
        </Suspense> */}
        <Controls />
        <Scene />
      </Canvas>
  );
}

const root = document.getElementById("root");
ReactDOM.render(<App />, root);