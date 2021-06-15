
// Színhely, színpad
const scene = new THREE.Scene();

// Perspektív kamera
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 6;


// Renderer - leképző
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Texturák
const earthTexture = new THREE.TextureLoader().load( "textures/earth-texture.jpg" );
const moonTexture = new THREE.TextureLoader().load( "textures/moon-texture.jpg" );
 
// Geometria
const earthGeom = new THREE.SphereGeometry(2, 20, 20);
const moonGeom = new THREE.SphereGeometry(0.5, 20, 20);

// Anyag
const earthMat = new THREE.MeshPhongMaterial({ map: earthTexture} );
const moonMat = new THREE.MeshPhongMaterial({ map: moonTexture} );

// Mesh - Háló
const earthMesh = new THREE.Mesh(earthGeom, earthMat);
scene.add(earthMesh);

const moonMesh = new THREE.Mesh(moonGeom, moonMat);
// moonMesh.position.set(8, 0, 0);
scene.add(moonMesh);

// Irany feny
const dLight = new THREE.DirectionalLight( 0xffffff, 1 );
dLight.position.set(15, 8, 0);
scene.add( dLight );

// Ambiens feny
const aLight = new THREE.AmbientLight( 0x404040, 0.2 ); // soft white light
scene.add( aLight );

// Egér kontroll
const controls = new THREE.OrbitControls(camera, renderer.domElement);

// helpers - segítők
const lightHelper = new THREE.DirectionalLightHelper( dLight, 5 );
scene.add( lightHelper );

let delta = 0;

// Render ciklus
function animate(){
    renderer.render(scene, camera);

    // animációk
    earthMesh.rotation.y += 0.005;

    moonMesh.position.x = Math.cos(delta) * 4;
    moonMesh.position.z = Math.sin(delta) * 8;

    delta += 0.01;

    requestAnimationFrame(animate);
}

animate()
