import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const InteractiveParticleSphere: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.top = "0";
    renderer.domElement.style.left = "0";
    renderer.domElement.style.cursor = "pointer";
    renderer.domElement.className = "canvas-particle";

    canvasRef.current.appendChild(renderer.domElement);

    const largeParticleCount = 10000;
    const smallParticleCount = 6000;
    const radius = 5;

    interface ParticleData {
      geometry: THREE.BufferGeometry;
      positions: Float32Array;
      originalPositions: Float32Array;
      velocities: Float32Array;
    }

    const generateParticles = (
      count: number,
      size: number,
      velocityFactor: number
    ): ParticleData => {
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(count * 9);
      const originalPositions = new Float32Array(count * 3);
      const velocities = new Float32Array(count * 9);

      for (let i = 0; i < count; i++) {
        const phi = Math.acos(2 * Math.random() - 1);
        const theta = Math.random() * Math.PI * 2;

        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta);
        const z = radius * Math.cos(phi);

        positions.set([x, y, z], i * 2);
        originalPositions.set([x, y, z], i * 3);

        velocities.set(
          [
            (Math.random() - 0.5) * velocityFactor,
            (Math.random() - 0.5) * velocityFactor,
            (Math.random() - 0.5) * velocityFactor,
          ],
          i * 3
        );
      }

      geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );
      return { geometry, positions, originalPositions, velocities };
    };

    const largeParticles = generateParticles(largeParticleCount, 0.01, 0.02);
    const largeMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0xc0c0c0,
    });
    const largePoints = new THREE.Points(
      largeParticles.geometry,
      largeMaterial
    );
    scene.add(largePoints);

    const smallParticles = generateParticles(smallParticleCount, 0.05, 0.1);
    const smallMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0xc0c0c0,
    });
    const smallPoints = new THREE.Points(
      smallParticles.geometry,
      smallMaterial
    );
    scene.add(smallPoints);

    camera.position.z = 12;

    const mouse = new THREE.Vector2();
    const raycaster = new THREE.Raycaster();
    const mouse3D = new THREE.Vector3();

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const updateParticles = (particles: ParticleData, time: number) => {
      const positions = particles.geometry.attributes.position
        .array as Float32Array;
      const originalPositions = particles.originalPositions;
      const velocities = particles.velocities;

      for (let i = 0; i < positions.length / 3; i++) {
        const ix = i * 3;
        const iy = i * 3 + 1;
        const iz = i * 3 + 2;

        positions[ix] += velocities[ix] * Math.sin(time);
        positions[iy] += velocities[iy] * Math.sin(time);
        positions[iz] += velocities[iz] * Math.cos(time);

        const dx = positions[ix] - mouse3D.x * radius * 10;
        const dy = positions[iy] - mouse3D.y * radius * 10;
        const dz = positions[iz];

        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (distance < 3) {
          const force = (1 - distance / 3) * 0.5;
          const directionX = dx / distance;
          const directionY = dy / distance;

          positions[ix] += directionX * force;
          positions[iy] += directionY * force;
        }

        positions[ix] += (originalPositions[ix] - positions[ix]) * 0.02;
        positions[iy] += (originalPositions[iy] - positions[iy]) * 0.02;
        positions[iz] += (originalPositions[iz] - positions[iz]) * 0.02;
      }

      particles.geometry.attributes.position.needsUpdate = true;
    };

    const animate = () => {
      const time = performance.now() * 0.001;

      raycaster.setFromCamera(mouse, camera);
      if (raycaster.ray) {
        mouse3D.copy(raycaster.ray.origin).normalize();
      }

      updateParticles(largeParticles, time);
      updateParticles(smallParticles, time);

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      scene.remove(largePoints);
      scene.remove(smallPoints);
      largeParticles.geometry.dispose();
      smallParticles.geometry.dispose();
      largeMaterial.dispose();
      smallMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={canvasRef} className="absolute top-0 inset-0"></div>;
};

export default InteractiveParticleSphere;
