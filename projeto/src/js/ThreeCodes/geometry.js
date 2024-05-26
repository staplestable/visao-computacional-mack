import * as THREE from 'three';

function render() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer();

  const container = document.getElementById('geometry');
  renderer.setSize(container.clientWidth, container.clientHeight);

  container.appendChild(renderer.domElement);

  const axesHelper = new THREE.AxesHelper(5);
  const geometry = new THREE.BufferGeometry();

    const vertices = new Float32Array( [
        -1.0, -1.0,  0.0, 
        1.0, -1.0,  0.0, 
        1.0,  1.0,  0.0, 
      
        1.0,  1.0,  0.0, 
        -1.0,  1.0,  0.0, 
        -1.0, -1.0,  0.0  
      ] 
    );
    
    geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const mesh = new THREE.Mesh(geometry, material);

    scene.add(axesHelper);
    scene.add(mesh);
    camera.position.set(3, 1.5, 5);

    renderer.render(scene, camera);

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
  render();
});