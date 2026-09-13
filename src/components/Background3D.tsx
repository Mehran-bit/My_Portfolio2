import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { motion } from 'motion/react';
import { useTheme } from '../context/ThemeContext';
import vibrantSiteBg from '../assets/images/vibrant_site_bg_1789332566119.jpg';

export default function Background3D() {
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const container = canvasContainerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 15;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: false,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    // Group for objects
    const bgGroup = new THREE.Group();
    scene.add(bgGroup);

    // 1. Warm non-blue particle field (Emerald, Amber, Violet, Titanium Silver)
    const particleCount = 180;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const isDark = theme === 'dark';
    // Strictly non-blue color palette
    const colorEmerald = new THREE.Color(0x10b981);
    const colorAmber = new THREE.Color(0xf59e0b);
    const colorViolet = new THREE.Color(0xa855f7);
    const colorSilver = new THREE.Color(isDark ? 0xd4d4d8 : 0x71717a);

    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3;
      positions[idx] = (Math.random() - 0.5) * 40;
      positions[idx + 1] = (Math.random() - 0.5) * 40;
      positions[idx + 2] = (Math.random() - 0.5) * 20;

      const rand = Math.random();
      const mixed = rand < 0.3 ? colorEmerald : rand < 0.6 ? colorAmber : rand < 0.85 ? colorViolet : colorSilver;
      colors[idx] = mixed.r;
      colors[idx + 1] = mixed.g;
      colors[idx + 2] = mixed.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: isDark ? 0.08 : 0.09,
      vertexColors: true,
      transparent: true,
      opacity: isDark ? 0.5 : 0.35,
      blending: isDark ? THREE.AdditiveBlending : THREE.NormalBlending
    });
    const starField = new THREE.Points(particleGeo, particleMat);
    bgGroup.add(starField);

    // 2. Subtle wireframe geometric shapes scattered far in background (Emerald & Titanium, no blue)
    const wireframeItems: THREE.Mesh[] = [];

    // Icosahedron (Emerald)
    const icoGeo = new THREE.IcosahedronGeometry(1.4, 0);
    const wireMatEmerald = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      wireframe: true,
      transparent: true,
      opacity: isDark ? 0.15 : 0.1
    });
    const ico = new THREE.Mesh(icoGeo, wireMatEmerald);
    ico.position.set(-14, 8, -5);
    bgGroup.add(ico);
    wireframeItems.push(ico);

    // Octahedron (Amber/Gold)
    const octaGeo = new THREE.OctahedronGeometry(1.2, 0);
    const octaMatAmber = new THREE.MeshBasicMaterial({
      color: 0xf59e0b,
      wireframe: true,
      transparent: true,
      opacity: isDark ? 0.16 : 0.11
    });
    const octa = new THREE.Mesh(octaGeo, octaMatAmber);
    octa.position.set(13, -7, -4);
    bgGroup.add(octa);
    wireframeItems.push(octa);

    // Torus Ring (Violet)
    const ringGeo = new THREE.TorusGeometry(2.0, 0.02, 16, 60);
    const ringMatViolet = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      transparent: true,
      opacity: isDark ? 0.14 : 0.09
    });
    const ring = new THREE.Mesh(ringGeo, ringMatViolet);
    ring.position.set(12, 10, -6);
    ring.rotation.x = Math.PI / 4;
    bgGroup.add(ring);
    wireframeItems.push(ring);

    // Dodecahedron (Silver)
    const dodecaGeo = new THREE.DodecahedronGeometry(1.1, 0);
    const dodecaMat = new THREE.MeshBasicMaterial({
      color: isDark ? 0xe4e4e7 : 0x71717a,
      wireframe: true,
      transparent: true,
      opacity: isDark ? 0.12 : 0.08
    });
    const dodeca = new THREE.Mesh(dodecaGeo, dodecaMat);
    dodeca.position.set(-11, -9, -4);
    bgGroup.add(dodeca);
    wireframeItems.push(dodeca);

    // Mouse Parallax movement
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      targetX = x * 0.8;
      targetY = y * 0.8;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera parallax
      mouseX += (targetX - mouseX) * 0.03;
      mouseY += (targetY - mouseY) * 0.03;
      bgGroup.rotation.y = mouseX * 0.2;
      bgGroup.rotation.x = -mouseY * 0.2;

      // Slowly rotate starfield
      starField.rotation.y = elapsedTime * 0.015;
      starField.rotation.x = elapsedTime * 0.008;

      // Animate background geometric wireframes
      ico.rotation.x = elapsedTime * 0.15;
      ico.rotation.y = elapsedTime * 0.12;

      octa.rotation.y = -elapsedTime * 0.18;
      octa.rotation.z = elapsedTime * 0.14;

      ring.rotation.z = elapsedTime * 0.1;
      ring.rotation.y = elapsedTime * 0.08;

      dodeca.rotation.x = -elapsedTime * 0.12;
      dodeca.rotation.y = elapsedTime * 0.15;

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [theme]);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* 1. Clear, Beautiful Website Background Artwork */}
      <div className="absolute inset-0 select-none overflow-hidden">
        <motion.img
          src={vibrantSiteBg}
          alt=""
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className={`w-full h-full object-cover object-center transition-opacity duration-700 ${
            isDark ? 'opacity-85' : 'opacity-30'
          }`}
          referrerPolicy="no-referrer"
        />

        {/* Soft Vignette Overlay: subtle gradient for pristine contrast without hiding the artwork */}
        <div
          className={`absolute inset-0 ${
            isDark
              ? 'bg-gradient-to-b from-[#07080a]/45 via-[#07080a]/20 to-[#07080a]/55'
              : 'bg-gradient-to-b from-white/60 via-white/20 to-white/60'
          }`}
        />
      </div>

      {/* 2. Interactive Subtle Particles & Constellations */}
      <div ref={canvasContainerRef} className="absolute inset-0" />
    </div>
  );
}
