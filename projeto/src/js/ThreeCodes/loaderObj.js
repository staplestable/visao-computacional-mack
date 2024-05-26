import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

function renderScene() {
    // Cena
    const scene = new THREE.Scene();

    // Câmera
    const camera = new THREE.PerspectiveCamera(25,
        window.innerWidth / window.innerHeight,
        0.1,
        1000);
    camera.position.set(3, 1.5, 5);


    // Renderizador
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    const container = document.getElementById('Obj')
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Controles de órbita
    const controls = new OrbitControls(camera, renderer.domElement);

    // Luz
    const light = new THREE.PointLight(0xffffff, 1000);
    light.position.set(2.5, 5, 10);
    scene.add(light);

    // Carregar modelo
    const loader = new GLTFLoader();
    loader.load(
        // URL do modelo
        'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/ABeautifulGame/glTF/ABeautifulGame.gltf',
        // função executada após carregar o modelo
        function ( gltf ) {
            scene.add( gltf.scene );

            function animate() {
                requestAnimationFrame(animate);
                gltf.scene.rotation.y += 0.005;
                controls.update();
                renderer.render(scene, camera);
            }

            animate();
        }
    );

    window.addEventListener('resize', () => {
        const width = container.clientWidth;
        const height = container.clientHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      }
    );
        
}


document.addEventListener('DOMContentLoaded', function () {
    renderScene();
});

