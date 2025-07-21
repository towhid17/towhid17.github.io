import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const GlassDashboard = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);
    
    sceneRef.current = scene;
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    const pointLight1 = new THREE.PointLight(0x4f46e5, 1, 100);
    pointLight1.position.set(-10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x7c3aed, 1, 100);
    pointLight2.position.set(10, -10, 10);
    scene.add(pointLight2);

    // Create floating geometric objects
    const objects = [];
    
    // Torus
    const torusGeometry = new THREE.TorusGeometry(2, 0.6, 16, 100);
    const torusMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x6366f1, 
      transparent: true, 
      opacity: 0.7,
      shininess: 100
    });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    torus.position.set(-8, 5, -10);
    scene.add(torus);
    objects.push({ mesh: torus, rotationSpeed: { x: 0.01, y: 0.02, z: 0.005 } });

    // Dodecahedron
    const dodecaGeometry = new THREE.DodecahedronGeometry(2, 0);
    const dodecaMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x8b5cf6, 
      transparent: true, 
      opacity: 0.6,
      wireframe: true
    });
    const dodeca = new THREE.Mesh(dodecaGeometry, dodecaMaterial);
    dodeca.position.set(8, -3, -15);
    scene.add(dodeca);
    objects.push({ mesh: dodeca, rotationSpeed: { x: 0.015, y: 0.01, z: 0.02 } });

    // Icosahedron
    const icosaGeometry = new THREE.IcosahedronGeometry(1.5, 0);
    const icosaMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xa855f7, 
      transparent: true, 
      opacity: 0.8
    });
    const icosa = new THREE.Mesh(icosaGeometry, icosaMaterial);
    icosa.position.set(0, 8, -12);
    scene.add(icosa);
    objects.push({ mesh: icosa, rotationSpeed: { x: 0.02, y: 0.015, z: 0.01 } });

    // Octahedron
    const octaGeometry = new THREE.OctahedronGeometry(2, 0);
    const octaMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xc084fc, 
      transparent: true, 
      opacity: 0.5,
      wireframe: true
    });
    const octa = new THREE.Mesh(octaGeometry, octaMaterial);
    octa.position.set(-5, -6, -8);
    scene.add(octa);
    objects.push({ mesh: octa, rotationSpeed: { x: 0.008, y: 0.025, z: 0.012 } });

    // Create particle system
    const particleCount = 200;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
      
      const color = new THREE.Color();
      color.setHSL(0.7 + Math.random() * 0.2, 0.8, 0.6);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.1,
      vertexColors: true,
      transparent: true,
      opacity: 0.8
    });
    
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    camera.position.z = 15;
    camera.position.y = 2;

    // Animation loop
    const animate = (time) => {
      // Rotate objects
      objects.forEach(obj => {
        obj.mesh.rotation.x += obj.rotationSpeed.x;
        obj.mesh.rotation.y += obj.rotationSpeed.y;
        obj.mesh.rotation.z += obj.rotationSpeed.z;
        
        // Add floating motion
        obj.mesh.position.y += Math.sin(time * 0.001 + obj.mesh.position.x) * 0.02;
      });

      // Rotate particles
      particles.rotation.y += 0.002;
      particles.rotation.x += 0.001;

      // Animate lights
      pointLight1.position.x = Math.sin(time * 0.001) * 15;
      pointLight1.position.y = Math.cos(time * 0.001) * 10;
      
      pointLight2.position.x = Math.cos(time * 0.0015) * 12;
      pointLight2.position.z = Math.sin(time * 0.0015) * 8;

      renderer.render(scene, camera);
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate(0);

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="min-h-[200vh] relative">
      {/* Fixed 3D Background */}
      <div 
        ref={mountRef} 
        className="fixed inset-0 z-0"
        style={{ background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3a 25%, #2d1b69 50%, #1e1b4b 75%, #0f172a 100%)' }}
      />
      
      {/* Fixed Gradient overlay for depth */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20 z-1"></div>
      
      {/* Glass Dashboard Content */}
      

      <style jsx>{`
        .glass-card {
          position: relative;
          overflow: hidden;
        }
        
        .glass-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(135deg, rgba(255,255,255,0.4), transparent 50%, rgba(255,255,255,0.1));
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: xor;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
        }
        
        .glass-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%);
          border-radius: inherit;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
};

export default GlassDashboard;