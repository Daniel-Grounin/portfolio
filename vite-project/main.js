import './style.css'

import * as THREE from  'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

//to start things, we will need three objects -> -Scene-,-Camera-,-Renderer-.
//scene is like a container that holds your object cameras and lights

const scene = new THREE.Scene();

//camera describes where the camera is, what it's looking at, and how it's oriented
//what the human eye sees
//first argument is the field of view, second is aspect ratio(based on user browser window), the last is to control how the object is visible
const camera = new THREE.PerspectiveCamera(25, window.innerWidth/window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg')
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth,window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);

const geometry = new THREE.TorusGeometry(10, 2, 16, 50);
const marerial = new THREE.MeshStandardMaterial({color:0x888aa119})
const torusTexture = new THREE.TextureLoader().load('satrunring.jpg');

const torus = new THREE.Mesh(
  new THREE.TorusGeometry(1, 0.05, 16, 100),
  new THREE.MeshStandardMaterial({
    map:torusTexture,
  })
);

scene.add(torus)

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(20,20,20);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(pointLight, ambientLight);

const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(100,1);
scene.add(lightHelper,gridHelper);

const controls = new OrbitControls(camera, renderer.domElement);

function addStar(){
  const geometry = new THREE.SphereGeometry(0.25,24,24);
  const material = new THREE.MeshBasicMaterial({color:0xffffff});
  const star  = new THREE.Mesh(geometry, material);

  const [x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x,y,z);
  scene.add(star);

}
Array(200).fill().forEach(addStar);

const spaceTexture = new THREE.TextureLoader().load('galaxy.jpg');
scene.background = spaceTexture;

//avatar
const DanielTexture = new THREE.TextureLoader().load('human.jpg');
const Daniel = new THREE.Mesh(
  new THREE.BoxGeometry(0.25,0.25,0.25),
  new THREE.MeshBasicMaterial({map:DanielTexture})
);
scene.add(Daniel);

//moon 
const moonTexture = new THREE.TextureLoader().load('moon.jpg');
const normalTexture = new THREE.TextureLoader().load('moonnormal.jpg');
const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3,32,32),
  new THREE.MeshStandardMaterial({
    map:moonTexture,
    normalMap:normalTexture,
  })
);
scene.add(moon);

//mars 
const marsTexture = new THREE.TextureLoader().load('mars.jpg');
const mars = new THREE.Mesh(
  new THREE.SphereGeometry(3,32,32),
  new THREE.MeshStandardMaterial({
    map:marsTexture,
    
  })
);
scene.add(mars);

//neptune 
const neptuneTexture = new THREE.TextureLoader().load('neptune.jpg');
const neptune = new THREE.Mesh(
  new THREE.SphereGeometry(3,32,32),
  new THREE.MeshStandardMaterial({
    map:neptuneTexture,
    
  })
);
scene.add(neptune);

//uranus 
const uranusTexture = new THREE.TextureLoader().load('uranus.jpg');
const uranus  = new THREE.Mesh(
  new THREE.SphereGeometry(3,32,32),
  new THREE.MeshStandardMaterial({
    map:uranusTexture,
    
  })
);
scene.add(uranus);

//earth
const earthTexture = new THREE.TextureLoader().load('earth.jpg');
const earth  = new THREE.Mesh(
  new THREE.SphereGeometry(3,32,32),
  new THREE.MeshStandardMaterial({
    map:earthTexture,
    
  })
);
scene.add(earth);



//sun
const sunTexture = new THREE.TextureLoader().load('sun.jpg');
const sun = new THREE.Mesh(
  new THREE.SphereGeometry(3,32,32),
  new THREE.MeshStandardMaterial({
    map:sunTexture,
    
  })
);
scene.add(sun);

moon.position.z  = 3;
moon.position.setX(-10);

mars.position.z  = 30;
mars.position.setX(-10);
mars.position.setY(5);
mars.position.setZ(-50);

neptune.position.y  = 5;
neptune.position.setX(15);
neptune.position.setY(-10);
neptune.position.setZ(-30);

uranus.position.y  = 20;
uranus.position.setX(5);
uranus.position.setY(5);
uranus.position.setZ(8);

earth.position.y  = 10;
earth.position.setX(-10);
earth.position.setY(-8);
earth.position.setZ(-50);

sun.position.y  = 5;
sun.position.setX(30);
sun.position.setY(10);
sun.position.setZ(-80);

function moveCamera(){
  const t = document.body.getBoundingClientRect().top;
  moon.rotation.x -=0.01;
  moon.rotation.y +=0.01;
  moon.rotation.z +=0.01;

  mars.rotation.x -=0.01;
  mars.rotation.y -=0.01;
  mars.rotation.z +=0.01;

  neptune.rotation.x +=0.01;
  neptune.rotation.y -=0.01;
  neptune.rotation.z +=0.01;

  uranus.rotation.x +=0.01;
  uranus.rotation.y -=0.01;
  uranus.rotation.z +=0.01;

  uranus.rotation.x +=0.01;
  uranus.rotation.y -=0.01;
  uranus.rotation.z +=0.01;

  earth.rotation.x +=0.01;
  earth.rotation.y -=0.01;
  earth.rotation.z +=0.01;

  Daniel.rotation.x += 0.01;
  Daniel.rotation.z += 0.01;

  camera.position.z = t* -0.01;
  camera.position.x = t* -0.0002;
  camera.position.y = t* -0.0002;



}

document.body.onscroll = moveCamera

function animate(){
  requestAnimationFrame(animate);
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.01;
  torus.rotation.z += 0.01;

  controls.update();

  renderer.render(scene, camera);
}

animate()