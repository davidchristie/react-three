import {
  AmbientLight,
  Color,
  DirectionalLight,
  PerspectiveCamera,
  Scene,
  WebGLRenderer
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function getAspectRatio(container: HTMLElement) {
  return container.clientWidth / container.clientHeight;
}

function updateAspectRatio(camera: PerspectiveCamera, container: HTMLElement) {
  camera.aspect = getAspectRatio(container);
  camera.updateProjectionMatrix();
}

export default function createScene(container: HTMLElement) {
  const { clientHeight: height, clientWidth: width } = container;

  const camera = new PerspectiveCamera(75, undefined, 0.1, 10000);
  camera.position.set(100, 100, 100);

  const scene = new Scene();
  scene.background = new Color(0xf0f0f0);
  updateAspectRatio(camera, container);
  const renderer = new WebGLRenderer();
  renderer.setSize(width, height);
  container.appendChild(renderer.domElement);

  window.addEventListener("resize", () => {
    updateAspectRatio(camera, container);
    renderer.setSize(container.clientWidth, container.clientHeight);
  });

  const ambientLight = new AmbientLight(0x606060);
  scene.add(ambientLight);

  const dirLight = new DirectionalLight(0xffffff);
  dirLight.position.set(1, 1, 1);
  scene.add(dirLight);

  const controls = new OrbitControls(camera, container);
  controls.update();

  const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  };
  animate();

  return scene;
}
