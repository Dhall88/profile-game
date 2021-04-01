// import React, {useRef} from "react";
// import { useFrame, useUpdate } from "@react-three/fiber";

// import { noise } from "./perlin";

// const Terrain = () => {

// //   const mesh = useUpdate(({ geometry }) => {
// //     noise.seed(Math.random());
// //     let pos = geometry.getAttribute("position");
// //     let pa = pos.array;
// //     const hVerts = geometry.parameters.heightSegments + 1;
// //     const wVerts = geometry.parameters.widthSegments + 1;
// //     for (let j = 0; j < hVerts; j++) {
// //       for (let i = 0; i < wVerts; i++) {
// //         const ex = 1.1;
// //         pa[3 * (j * wVerts + i) + 2] =
// //           (noise.simplex2(i / 100, j / 100) +
// //             noise.simplex2((i + 200) / 50, j / 50) * Math.pow(ex, 1) +
// //             noise.simplex2((i + 400) / 25, j / 25) * Math.pow(ex, 2) +
// //             noise.simplex2((i + 600) / 12.5, j / 12.5) * Math.pow(ex, 3) +
// //             +(noise.simplex2((i + 800) / 6.25, j / 6.25) * Math.pow(ex, 4))) /
// //           2;
// //       }
// //     }

// //     pos.needsUpdate = true;
// //   });

// //   // Raf loop
// //   useFrame(() => {
// //     // console.log(camera.current)
// //   });

// // //   -Math.PI / 2

// //   return (
// //     // <mesh ref={mesh} rotation={[-Math.PI / 2, 0, 0]}>
// //     //   <planeBufferGeometry attach="geometry" args={[25, 25, 75, 75]} />
// //     //   <meshPhongMaterial
// //     //     attach="material"
// //     //     color={"hotpink"}
// //     //     specular={"hotpink"}
// //     //     shininess={3}
// //     //     smoothShading
// //     //   />
// //     // </mesh>
// //     <mesh ref={mesh} rotation={[0, 0, 0]}>
// //     <planeBufferGeometry attach="geometry" args={[25, 25, 75, 75]} />
// //     <meshPhongMaterial
// //       attach="material"
// //       color={"hotpink"}
// //       specular={"hotpink"}
// //       shininess={3}
// //       flatShading
// //     />
// //   </mesh>
// //   );
// // };

// // export default Terrain;

// // import React from "react";
// // import { useFrame, useUpdate } from "react-three-fiber";

// // import { noise } from "./perlin";

// // const Terrain = () => {

// //     const buildMesh = (geometry) => {
// //         // let geometry ={};
// //         noise.seed(Math.random());
// //         let pos = geometry.getAttribute("position");
// //         let pa = pos.array;
// //         const hVerts = geometry.parameters.heightSegments + 1;
// //         const wVerts = geometry.parameters.widthSegments + 1;
// //         for (let j = 0; j < hVerts; j++) {
// //           for (let i = 0; i < wVerts; i++) {
// //             const ex = 1.1;
// //             pa[3 * (j * wVerts + i) + 2] =
// //               (noise.simplex2(i / 100, j / 100) +
// //                 noise.simplex2((i + 200) / 50, j / 50) * Math.pow(ex, 1) +
// //                 noise.simplex2((i + 400) / 25, j / 25) * Math.pow(ex, 2) +
// //                 noise.simplex2((i + 600) / 12.5, j / 12.5) * Math.pow(ex, 3) +
// //                 +(noise.simplex2((i + 800) / 6.25, j / 6.25) * Math.pow(ex, 4))) /
// //               2;
// //           }
// //         }
// //     }
// //     const mesh = buildMesh(geometry);
// //   const mesh = useUpdate(( geometry ) => {
// //     noise.seed(Math.random());
// //     let pos = geometry.getAttribute("position");
// //     let pa = pos.array;
// //     const hVerts = geometry.parameters.heightSegments + 1;
// //     const wVerts = geometry.parameters.widthSegments + 1;
// //     for (let j = 0; j < hVerts; j++) {
// //       for (let i = 0; i < wVerts; i++) {
// //         const ex = 1.1;
// //         pa[3 * (j * wVerts + i) + 2] =
// //           (noise.simplex2(i / 100, j / 100) +
// //             noise.simplex2((i + 200) / 50, j / 50) * Math.pow(ex, 1) +
// //             noise.simplex2((i + 400) / 25, j / 25) * Math.pow(ex, 2) +
// //             noise.simplex2((i + 600) / 12.5, j / 12.5) * Math.pow(ex, 3) +
// //             +(noise.simplex2((i + 800) / 6.25, j / 6.25) * Math.pow(ex, 4))) /
// //           2;
// //       }
// //     }

// //     pos.needsUpdate = true;
// //   });

//   // Raf loop
//   useFrame(() => {
//     mesh.current.rotation.z += 0.001;
//   });

//   return (
//     <mesh ref={mesh} rotation={[-Math.PI / 2, 0, 0]}>
//       <planeBufferGeometry attach="geometry" args={[25, 25, 75, 75]} />
//       <meshPhongMaterial
//         attach="material"
//         color={"hotpink"}
//         specular={"hotpink"}
//         shininess={3}
//         flatShading
//       />
//     </mesh>
//   );
// };

// export default Terrain;

import React, {useRef, useEffect} from "react";
import { useFrame } from "@react-three/fiber";

import { noise } from "./perlin";

const Terrain = () => {

    const mesh = useRef();
    
    const buildMap = () => {
        console.log('in build')
      noise.seed(Math.random());
      let geometry = mesh.current.geometry
      let pos = geometry.attributes.position;
      let pa = pos.array
      const hVerts = geometry.parameters.heightSegments + 1;
    const wVerts = geometry.parameters.widthSegments + 1;
    for (let j = 0; j < hVerts; j++) {
      for (let i = 0; i < wVerts; i++) {
        const ex = 1.1;
        pa[3 * (j * wVerts + i) + 2] =
          (noise.simplex2(i / 100, j / 100) +
            noise.simplex2((i + 200) / 50, j / 50) * Math.pow(ex, 1) +
            noise.simplex2((i + 400) / 25, j / 25) * Math.pow(ex, 2) +
            noise.simplex2((i + 600) / 12.5, j / 12.5) * Math.pow(ex, 3) +
            +(noise.simplex2((i + 800) / 6.25, j / 6.25) * Math.pow(ex, 4))) /
          2;
      }
    }
  }
  
  
  // Raf loop
  useFrame(() => {
    //   console.log('in terrain')
    // mesh.current.rotation.z += 0.01;
    //   console.log(mesh)
  });

  useEffect(() => {
    buildMap()
  },[])

  
  return (
      <mesh ref={mesh} rotation={[-Math.PI/2, 0, 0]} onUpdate={self => (self.needsUpdate = true)}>
      <planeBufferGeometry attach="geometry" args={[25, 25, 75, 75]} />
      <meshPhongMaterial
        attach="material"
        color={"hotpink"}
        specular={"hotpink"}
        shininess={3}
        flatShading
        />
    </mesh>
  );
  
};  

export default Terrain;