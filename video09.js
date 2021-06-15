
// Színhely, színpad
const scene = new THREE.Scene();

// Ortografikus (Ortogonalis) kamera
const _left = window.innerWidth / -2;
const _right = window.innerWidth / 2;
const _top = window.innerHeight / 2;
const _bottom = window.innerHeight / -2;

// const camera = new THREE.OrthographicCamera(_left, _right, _top, _bottom, 0.1, 1000);
// camera.position.z = 30;

// Perspektív kamera
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 8;


// Renderer - leképző
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Geometria
// const cubeGeom = new THREE.BoxGeometry(80, 80, 20);
const cubeGeom = new THREE.BoxGeometry();

// Anyag
const cubeMat1 = new THREE.MeshBasicMaterial({color: new THREE.Color("red")});
const cubeMat2 = new THREE.MeshBasicMaterial({color: new THREE.Color("green")});
const cubeMat3 = new THREE.MeshBasicMaterial({color: new THREE.Color('blue')});

// Mesh - Háló
const cubeMesh1 = new THREE.Mesh(cubeGeom, cubeMat1);
const cubeMesh2 = new THREE.Mesh(cubeGeom, cubeMat2);
const cubeMesh3 = new THREE.Mesh(cubeGeom, cubeMat3);

// cubeMesh1.position.x = -100;
// cubeMesh1.position.set(-100, 0, 0);
// cubeMesh3.position.x = 100;

scene.add(cubeMesh1);
scene.add(cubeMesh2);
scene.add(cubeMesh3);


// Render ciklus
function animate(){
    renderer.render(scene, camera);

    // animációk
    // cubeMesh1.position.x -= 2;
    // cubeMesh2.position.y += 2;
    // cubeMesh3.position.x += 2;

    cubeMesh1.translateX(-0.02);

    cubeMesh2.translateX(0.02);
    cubeMesh2.translateY(0.02);
    
    cubeMesh3.translateX(0.02);

    requestAnimationFrame(animate);
}

animate()
