import React, { useRef, useState, useEffect } from "react";
import { extend, useFrame, useThree, useResource } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { PointerLockControls, PerspectiveCamera } from "@react-three/drei";



// extend({ PointerLockControls });

const Controls = props => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const [z, setZ] = useState(10)


    function useKeyPress(targetKey) {
        // State for keeping track of whether key is pressed
        const [keyPressed, setKeyPressed] = useState(false);
      
        // If pressed key is our target key then set to true
        function downHandler({ key }) {
            console.log(key)
          if (key === targetKey) {
            setKeyPressed(true)
          }
        }
      
        // If released key is our target key then set to false
        const upHandler = ({ key }) => {
          if (key === targetKey) {
            setKeyPressed(false)
          }
        };
      
        // Add event listeners
        useEffect(() => {
          window.addEventListener('keydown', downHandler);
          window.addEventListener('keyup', upHandler);
          // Remove event listeners on cleanup
          return () => {
            window.removeEventListener('keydown', downHandler);
            window.removeEventListener('keyup', upHandler);
          };
        }, []); // Empty array ensures that effect is only run on mount and unmount
      
        return keyPressed;
      }

      const forward = useKeyPress('w');
      const right = useKeyPress('a');
      const backward = useKeyPress('s');
      const left = useKeyPress('d');

    //   if(forward) {
    //       setZ(z-.1)
    //   }
    // useFrame(() => {
        // move camera according to key pressed
        // Object.entries(keyPressed).forEach((e) => {
            // const [key, start] = e;
            // const duration = new Date().getTime() - start;

            // // increase momentum if key pressed longer
            // let momentum = Math.sqrt(duration + 200) * 0.01 + 0.05;

            // // adjust for actual time passed
            // momentum = momentum * delta / 0.016;

            // // increase momentum if camera higher
            // momentum = momentum + camera.position.z * 0.02;

    //         switch (key) {
    //             case 'w': camera.translateY(4); break;
    //             case 's': camera.translateY(-4); break;
    //             case 'd': camera.translateX(4); break;
    //             case 'a': camera.translateX(-4); break;
    //             default:
    //         }
    //     });
    // });

    useFrame(() => {
        if(forward) {
            setZ(z-.01)
        } if(backward){
            setZ(z+.01)
        } if(right){
            setX(x-.01)
        } if(left){
            setX(x+.01)
        }
    })

  const camera = useRef();

  return <>
  <PerspectiveCamera makeDefault ref={camera} position={[x,y,z]}/>
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