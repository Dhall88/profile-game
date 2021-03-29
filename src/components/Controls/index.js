import React, { useRef, useState } from "react";
import { extend, useFrame, useThree, useResource } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { PointerLockControls, PerspectiveCamera } from "@react-three/drei";



// extend({ PointerLockControls });

const Controls = props => {

    const [x, setX] = useState(0)
    const [y, setY] = useState(5)
    const [z, setZ] = useState(5)

    // // useFrame(() => {
    //     handleAnswerChange(event) {
    //         if(event.key === 'w'){
    //             setX(x++)
    //     }
    //         else if (event.key === 'a') {
    //             setZ(z++)
    //     }
    // }
    // // });

    const test = () => {
        console.log('test')
    }

  const camera = useRef();

  return <>
  <PerspectiveCamera ref={camera} position={[x,y,z]} onKeyPress={test}/>
  <PointerLockControls camera={camera.current} />;
  </>
};

export default Controls;


// extend({ OrbitControls });

// const Controls = props => {
//   const ref = useRef();
//   const {
//     camera,
//     gl: { domElement }
//   } = useThree();
//   useFrame(() => ref.current && ref.current.update());
//   return <orbitControls ref={ref} args={[camera, domElement]} {...props} />;
// };

// export default Controls;