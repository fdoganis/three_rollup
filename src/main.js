import * as THREE from 'three'

// NOTE: three/addons alias is supported by Rollup: you can use it interchangeably with three/examples/jsm/  

import {
  OrbitControls
} from 'three/addons/controls/OrbitControls.js';

import {
  GLTFLoader
} from 'three/addons/loaders/GLTFLoader.js';

// Example of hard link to official repo for data, if needed
// const MODEL_PATH = 'https://raw.githubusercontent.com/mrdoob/three.js/r148/examples/models/gltf/LeePerrySmith/LeePerrySmith.glb';


// INSERT CODE HERE

const scene = new THREE.Scene();
const aspect = window.innerWidth / window.innerHeight;
const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);

const light = new THREE.AmbientLight(0xffffff, 1.0); // soft white light
scene.add(light);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.listenToKeyEvents(window); // optional

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshNormalMaterial();
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);

function loadData() {
 new GLTFLoader()
     .setPath('assets/models/')
     .load('test.glb', gltfReader);
}


function gltfReader(gltf) {
 let testModel = null;

 testModel = gltf.scene;

 if (testModel != null) {
     console.log("Model loaded:  " + testModel);
    scene.add(gltf.scene);
 } else {
     console.log("Load FAILED.  ");
 }
}

loadData();


camera.position.z = 3;


const clock = new THREE.Clock();

 // Main loop
const animation = () => {

  renderer.setAnimationLoop(animation); // requestAnimationFrame() replacement, compatible with XR 

  const delta = clock.getDelta();
  const elapsed = clock.getElapsedTime();

  // can be used in shaders: uniforms.u_time.value = elapsed;

  cube.rotation.x = elapsed / 2;
  cube.rotation.y = elapsed / 1;

  renderer.render(scene, camera);
};

animation();


window.addEventListener('resize', onWindowResize, false);

animate();


function onWindowResize() {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);

}


