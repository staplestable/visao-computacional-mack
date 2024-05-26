import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

function renderScene() {
    // Cena
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x4DBCD8);
    // Câmera
    const camera = new THREE.PerspectiveCamera(25,
        window.innerWidth / window.innerHeight,
        0.1,
        1000);
    camera.position.set(5, 2, 10);

    // Renderizador
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    const container = document.getElementById('Translate')
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Controles de órbita
    const controls = new OrbitControls(camera, renderer.domElement);

    // Luz
    const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
    scene.add( light );

    // Carregar modelo
    const loader = new GLTFLoader();
    loader.load(
        // URL do modelo
        'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/Duck/glTF/Duck.gltf',
        // função executada após carregar o modelo
        function ( gltf ) {
            scene.add( gltf.scene );
            const distanciaPercurso = 10;
            // Direção inicial (1 para direita, -1 para esquerda)
            let direcao = 1;

            function animate() {
                requestAnimationFrame(animate);
;
                gltf.scene.rotation.y += 0.05;
               // Aplicar translação no eixo X
                gltf.scene.translateX(direcao * distanciaPercurso / 100);

                // Inverter direção ao chegar no limite
                if (Math.abs(gltf.scene.position.x) >= distanciaPercurso / 2) {
                    direcao *= -1;
                }
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


