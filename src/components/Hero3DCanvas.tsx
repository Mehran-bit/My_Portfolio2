import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '../context/ThemeContext';

export default function Hero3DCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 8.5;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    const isDark = theme === 'dark';

    // Lights - Warm Amber, Emerald, Violet & Neutral White (Strictly NO BLUE)
    const ambientLight = new THREE.AmbientLight(0xffffff, isDark ? 1.3 : 1.6);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x10b981, 45, 20); // Emerald Green
    pointLight1.position.set(4, 4, 4);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xf59e0b, 50, 20); // Warm Amber/Gold
    pointLight2.position.set(-4, -3, 3);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0xa855f7, 35, 15); // Soft Violet
    pointLight3.position.set(0, 5, -2);
    scene.add(pointLight3);

    // Group for objects so mouse parallax rotates the whole constellation
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Sleek Torus Knot (Emerald & Gold sheen)
    const torusKnotGeo = new THREE.TorusKnotGeometry(1.2, 0.35, 128, 32, 2, 3);
    const torusKnotMat = new THREE.MeshPhysicalMaterial({
      color: isDark ? 0x10b981 : 0x059669,
      roughness: 0.18,
      metalness: 0.85,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      reflectivity: 0.9,
      wireframe: false,
    });
    const centerTorusKnot = new THREE.Mesh(torusKnotGeo, torusKnotMat);
    centerTorusKnot.scale.set(0.9, 0.9, 0.9);
    mainGroup.add(centerTorusKnot);

    // Inner wireframe glow for the knot (Amber/Gold wire)
    const torusWireMat = new THREE.MeshBasicMaterial({
      color: 0xf59e0b,
      wireframe: true,
      transparent: true,
      opacity: isDark ? 0.35 : 0.25
    });
    const torusWire = new THREE.Mesh(torusKnotGeo, torusWireMat);
    torusWire.scale.set(0.92, 0.92, 0.92);
    mainGroup.add(torusWire);

    // 2. Floating 3D Cubes (Titanium/Carbon with Emerald Wire)
    const cubeGeo = new THREE.BoxGeometry(0.8, 0.8, 0.8);
    const cubeMat = new THREE.MeshStandardMaterial({
      color: isDark ? 0x18181b : 0x27272a,
      roughness: 0.2,
      metalness: 0.9,
      emissive: 0x10b981,
      emissiveIntensity: isDark ? 0.25 : 0.15,
    });
    const cubeWireMat = new THREE.MeshBasicMaterial({
      color: 0x34d399,
      wireframe: true,
      transparent: true,
      opacity: 0.65
    });

    const cube1 = new THREE.Mesh(cubeGeo, cubeMat);
    cube1.position.set(-2.4, 1.8, 0.5);
    const cube1Wire = new THREE.Mesh(cubeGeo, cubeWireMat);
    cube1.add(cube1Wire);
    mainGroup.add(cube1);

    const cube2 = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.6, 0.6), cubeMat);
    cube2.position.set(2.6, -1.9, 0.8);
    const cube2Wire = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.6, 0.6), cubeWireMat);
    cube2.add(cube2Wire);
    mainGroup.add(cube2);

    // 3. Floating Spheres (Warm Amber & Violet)
    const sphereGeo = new THREE.SphereGeometry(0.55, 32, 32);
    const sphereMat = new THREE.MeshPhysicalMaterial({
      color: 0xf59e0b,
      roughness: 0.1,
      metalness: 0.8,
      clearcoat: 1.0,
      transmission: 0.25,
    });
    const sphere1 = new THREE.Mesh(sphereGeo, sphereMat);
    sphere1.position.set(2.4, 2.0, -0.6);
    mainGroup.add(sphere1);

    const sphereSmallGeo = new THREE.SphereGeometry(0.35, 32, 32);
    const sphereSmallMat = new THREE.MeshStandardMaterial({
      color: 0xa855f7,
      roughness: 0.2,
      metalness: 0.8,
    });
    const sphere2 = new THREE.Mesh(sphereSmallGeo, sphereSmallMat);
    sphere2.position.set(-2.2, -2.1, 0.2);
    mainGroup.add(sphere2);

    // 4. Rings & Torus (Emerald & Violet)
    const ringGeo = new THREE.TorusGeometry(1.9, 0.035, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      transparent: true,
      opacity: isDark ? 0.7 : 0.55
    });
    const ring1 = new THREE.Mesh(ringGeo, ringMat);
    ring1.rotation.x = Math.PI / 3;
    mainGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(2.3, 0.03, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0xfbbf24, // Warm gold
      transparent: true,
      opacity: isDark ? 0.6 : 0.45
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 6;
    mainGroup.add(ring2);

    // 5. Floating Glass Panels
    const panelGeo = new THREE.BoxGeometry(1.1, 0.8, 0.04);
    const panelMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.25,
      roughness: 0.1,
      metalness: 0.1,
      transmission: 0.85,
      ior: 1.5,
      thickness: 0.2,
    });
    const panel1 = new THREE.Mesh(panelGeo, panelMat);
    panel1.position.set(1.9, 0.2, 1.2);
    panel1.rotation.set(0.3, -0.4, 0.2);
    mainGroup.add(panel1);

    const panel2 = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.6, 0.04), panelMat);
    panel2.position.set(-1.8, -0.3, 1.0);
    panel2.rotation.set(-0.2, 0.5, -0.1);
    mainGroup.add(panel2);

    // 6. Floating Particles (Gold & Emerald, NO BLUE)
    const particleCount = 70;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePos[i] = (Math.random() - 0.5) * 8;
      particlePos[i + 1] = (Math.random() - 0.5) * 8;
      particlePos[i + 2] = (Math.random() - 0.5) * 6;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.045,
      color: 0x34d399,
      transparent: true,
      opacity: isDark ? 0.75 : 0.6,
      blending: isDark ? THREE.AdditiveBlending : THREE.NormalBlending
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    mainGroup.add(particles);

    // Mouse Interaction with smooth dampening
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      targetX = (x - 0.5) * 1.5;
      targetY = (y - 0.5) * 1.5;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth cursor lerp
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Rotate centerpiece
      centerTorusKnot.rotation.x = elapsedTime * 0.35;
      centerTorusKnot.rotation.y = elapsedTime * 0.5;
      torusWire.rotation.x = elapsedTime * 0.35;
      torusWire.rotation.y = elapsedTime * 0.5;

      // Floating cubes animation
      cube1.rotation.x = elapsedTime * 0.5;
      cube1.rotation.y = elapsedTime * 0.7;
      cube1.position.y = 1.8 + Math.sin(elapsedTime * 1.5) * 0.15;

      cube2.rotation.x = -elapsedTime * 0.6;
      cube2.rotation.z = elapsedTime * 0.4;
      cube2.position.y = -1.9 + Math.cos(elapsedTime * 1.3) * 0.15;

      // Spheres float
      sphere1.position.y = 2.0 + Math.sin(elapsedTime * 1.8) * 0.2;
      sphere2.position.y = -2.1 + Math.cos(elapsedTime * 1.6) * 0.2;

      // Rings spin
      ring1.rotation.z = elapsedTime * 0.2;
      ring2.rotation.z = -elapsedTime * 0.15;

      // Floating panels
      panel1.position.y = 0.2 + Math.sin(elapsedTime * 1.1) * 0.1;
      panel1.rotation.y = -0.4 + Math.sin(elapsedTime * 0.8) * 0.1;
      panel2.position.y = -0.3 + Math.cos(elapsedTime * 1.3) * 0.1;

      // Particles subtle spin
      particles.rotation.y = elapsedTime * 0.03;

      // Group reactive tilt to cursor
      mainGroup.rotation.y = mouseX * 0.45;
      mainGroup.rotation.x = -mouseY * 0.45;

      renderer.render(scene, camera);
    };

    animate();

    // Resize Observer
    const resizeObserver = new ResizeObserver(() => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      if (newWidth > 0 && newHeight > 0) {
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
      }
    });
    resizeObserver.observe(container);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [theme]);

  return (
    <div
      id="hero-3d-visual"
      ref={containerRef}
      className="relative w-full h-[380px] sm:h-[440px] lg:h-[500px] flex items-center justify-center pointer-events-none select-none"
    >
      {/* Non-blue ambient halo behind 3D visual (Emerald & Amber warmth) */}
      <div className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-emerald-500/20 via-amber-500/15 to-purple-500/15 blur-3xl -z-10 pointer-events-none animate-pulse" />
    </div>
  );
}
