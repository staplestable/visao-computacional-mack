import * as THREE from "three";
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth/window.innerHeight,
        0.1,
        1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(800,600);

document.body.appendChild(renderer.domElement)

const orbit = new OrbitControls(camera,renderer.domElement);

const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

camera.position.set(3,1.5,5);
orbit.update();

const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshBasicMaterial({color: 0x00FF00});

const box = new THREE.Mesh(boxGeometry,boxMaterial);
scene.add(box);

function rotation3D(element) {
    return function() {
        element.rotation.x += 0.02;
        element.rotation.y += 0.005;
        element.rotation.z += 0.005;
        renderer.render(scene, camera);
    }
}

const animateBox = rotation3D(box);

renderer.setAnimationLoop(animateBox);