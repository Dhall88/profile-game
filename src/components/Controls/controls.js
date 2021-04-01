// import React, { useRef, useState, useEffect } from "react";
// import { extend, useFrame, useThree, useResource } from "react-three-fiber";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import { PointerLockControls, PerspectiveCamera } from "@react-three/drei";



// // extend({ PointerLockControls });

// const Controls = () => {


//     function useKeyPress(targetKey) {
//         // State for keeping track of whether key is pressed
//         const [keyPressed, setKeyPressed] = useState(false);
      
//         // If pressed key is our target key then set to true
//         function downHandler({ key }) {
//             console.log(key)
//           if (key === targetKey) {
//             setKeyPressed(true)
//           }
//         }
      
//         // If released key is our target key then set to false
//         const upHandler = ({ key }) => {
//           if (key === targetKey) {
//             setKeyPressed(false)
//           }
//         };
      
//         // Add event listeners
//         useEffect(() => {
//           window.addEventListener('keydown', downHandler);
//           window.addEventListener('keyup', upHandler);
//           // Remove event listeners on cleanup
//           return () => {
//             window.removeEventListener('keydown', downHandler);
//             window.removeEventListener('keyup', upHandler);
//           };
//         }, []); // Empty array ensures that effect is only run on mount and unmount
      
//         return keyPressed;
//       }

//       const forward = useKeyPress('w');
//       const right = useKeyPress('a');
//       const backward = useKeyPress('s');
//       const left = useKeyPress('d');


//     // useFrame(() => {
//     //     // camera.current.rotation._y=Math.PI/2
//     //     if(forward) {
//     //         camera.current.translateZ(-.01)
//     //     } if(backward){
//     //         camera.current.translateZ(.01)
//     //     } if(right){
//     //         camera.current.translateX(-.01)
//     //     } if(left){
//     //         camera.current.translateX(.01)
//     //     }

//     //     // console.log(camera.current.rotation)
//     // })

//   const camera = useRef();

//   console.log(camera)

//   return <>
//   <PerspectiveCamera makeDefault ref={camera} position={[0,3,0]}/>
//   <PointerLockControls camera={camera.current} />;
//   </>
// };

// export default Controls;


// // extend({ OrbitControls });

// // const Controls = props => {
// //   const ref = useRef();
// //   const {
// //     camera,
// //     gl: { domElement }
// //   } = useThree();
// //   useFrame(() => ref.current && ref.current.update());
// //   return <orbitControls ref={ref} args={[camera, domElement]} {...props} />;
// // };

// // export default Controls;

import React, { useRef } from "react";
import { extend, useFrame, useThree } from "@react-three/fiber";
// import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls";
import { PointerLockControls, PerspectiveCamera} from "@react-three/drei";

// extend({ PointerLockControls });

const Controls = props => {
  const camera = useRef();
  useFrame(() => {
      console.log(camera)
  })
//   const {
//     camera,
//     gl: { domElement }
//   } = useThree();
//   useFrame(() => ref.current && ref.current.update());
  return <>
  <PerspectiveCamera makeDefault ref={camera} position={[0,3,0]}/>
  <PointerLockControls camera={camera.current} />
  </>
};

export default Controls;