import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

function renderCube() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    const renderer = new THREE.WebGLRenderer();
    
    const container = document.getElementById('rotation'); 
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const orbit = new OrbitControls(camera, renderer.domElement);
    const boxGeometry = new THREE.BoxGeometry();
    const boxMaterial = new THREE.MeshBasicMaterial({ color: 0x00FF00 });
    const box = new THREE.Mesh(boxGeometry, boxMaterial);


    scene.add(box);
    camera.position.set(3, 1.5, 5);

    function rotation3D(element) {
        return function () {
            element.rotation.x += 0.02;
            element.rotation.y += 0.005;
            element.rotation.z += 0.005;
            renderer.render(scene, camera);
        };
    }

    const animateBox = rotation3D(box);
    renderer.setAnimationLoop(animateBox);
    orbit.update();

    window.addEventListener('resize', () => {
        const width = container.clientWidth;
        const height = container.clientHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    });
}

document.addEventListener('DOMContentLoaded', function () {
    renderCube();
});
