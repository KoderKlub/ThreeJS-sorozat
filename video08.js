
// Színhely, színpad
const scene = new THREE.Scene();

// Ortografikus (Ortogonalis) kamera
const _left = window.innerWidth / -2;
const _right = window.innerWidth / 2;
const _top = window.innerHeight / 2;
const _bottom = window.innerHeight / -2;

const camera = new THREE.OrthographicCamera(_left, _right, _top, _bottom, 0.1, 1000);
camera.position.z = 30;


// Renderer - leképző
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Geometria
const cubeGeom = new THREE.BoxGeometry(80, 80, 20);

// Anyag
const cubeMat1 = new THREE.MeshBasicMaterial({color: new THREE.Color("rgb(255, 0, 0)")});
const cubeMat2 = new THREE.MeshBasicMaterial({color: new THREE.Color("rgb(0%, 100%, 0%)")});
const cubeMat3 = new THREE.MeshBasicMaterial({color: new THREE.Color('orange')});
const cubeMat4 = new THREE.MeshBasicMaterial({color: new THREE.Color("hsl(277, 100%, 50%)")});
const cubeMat5 = new THREE.MeshBasicMaterial({color: new THREE.Color(0, 0, 1)});

// Mesh - Háló
const cubeMesh1 = new THREE.Mesh(cubeGeom, cubeMat1);
const cubeMesh2 = new THREE.Mesh(cubeGeom, cubeMat2);
const cubeMesh3 = new THREE.Mesh(cubeGeom, cubeMat3);
const cubeMesh4 = new THREE.Mesh(cubeGeom, cubeMat4);
const cubeMesh5 = new THREE.Mesh(cubeGeom, cubeMat5);

cubeMesh1.position.x = -105;
cubeMesh3.position.x = 105;
cubeMesh4.position.y = -105;
cubeMesh5.position.y = 105;

scene.add(cubeMesh1);
scene.add(cubeMesh2);
scene.add(cubeMesh3);
scene.add(cubeMesh4);
scene.add(cubeMesh5);

renderer.render(scene, camera);

