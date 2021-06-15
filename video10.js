
// Színhely, színpad
const scene = new THREE.Scene();

// Perspektív kamera
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 6;


// Renderer - leképző
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Geometria
const cubeGeom = new THREE.BoxGeometry();

// Anyag
const cubeMat1 = new THREE.MeshBasicMaterial({color: new THREE.Color("red"), wireframe: true});
const cubeMat2 = new THREE.MeshBasicMaterial({color: new THREE.Color("green"), wireframe: true});
const cubeMat3 = new THREE.MeshBasicMaterial({color: new THREE.Color('blue'), wireframe: true});
const cubeMat4 = new THREE.MeshBasicMaterial({color: new THREE.Color('orange')});

// Mesh - Háló
const cubeMesh1 = new THREE.Mesh(cubeGeom, cubeMat1);
const cubeMesh2 = new THREE.Mesh(cubeGeom, cubeMat2);
const cubeMesh3 = new THREE.Mesh(cubeGeom, cubeMat3);
const cubeMesh4 = new THREE.Mesh(cubeGeom, cubeMat4);

cubeMesh1.position.set(-2, 0, 0);
cubeMesh3.position.set(2, 0, 0);

scene.add(cubeMesh1);
scene.add(cubeMesh2);
scene.add(cubeMesh3);
scene.add(cubeMesh4);

let scale = 0;

// Render ciklus
function animate(){
    renderer.render(scene, camera);

    // animációk - Translate, Rotate, Scale

    // cubeMesh1.rotateX(0.02);
    // cubeMesh2.rotateY(0.02);
    // cubeMesh3.rotateZ(0.02);

    cubeMesh1.rotation.x += 0.02;
    cubeMesh2.rotation.y += 0.02;
    cubeMesh3.rotation.z += 0.02;


    cubeMesh1.scale.x = Math.sin(scale);
    cubeMesh2.scale.y = Math.sin(scale);
    cubeMesh3.scale.z = Math.sin(scale);

    cubeMesh4.position.x = Math.sin(scale) * 2;
    cubeMesh4.position.y = Math.sin(scale) * 2;

    scale += 0.01;
    

    requestAnimationFrame(animate);
}

animate()
