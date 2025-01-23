'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// Pre-calculate points and lines for the globe
const GLOBE_DATA = (() => {
  const numPoints = 400; // Reduced from 800
  const radius = 1.5;
  const positions = [];
  const colors = [];
  const linePositions = [];
  const lineColors = [];
  
  // Generate points using Fibonacci sphere
  const goldenRatio = (1 + Math.sqrt(5)) / 2;
  const points = [];
  
  for (let i = 0; i < numPoints; i++) {
    const theta = 2 * Math.PI * i / goldenRatio;
    const phi = Math.acos(1 - 2 * (i + 0.5) / numPoints);
    
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);
    
    positions.push(x, y, z);
    colors.push(1.0, 0.27, 0.0);
    points.push(new THREE.Vector3(x, y, z));
  }

  // Generate lines
  for (let i = 0; i < points.length; i++) {
    const p1 = points[i];
    for (let j = i + 1; j < points.length; j++) {
      const p2 = points[j];
      if (p1.distanceTo(p2) < radius * 0.5) {
        linePositions.push(p1.x, p1.y, p1.z, p2.x, p2.y, p2.z);
        lineColors.push(1.0, 0.27, 0.0, 1.0, 0.27, 0.0);
      }
    }
  }

  return {
    positions: new Float32Array(positions),
    colors: new Float32Array(colors),
    linePositions: new Float32Array(linePositions),
    lineColors: new Float32Array(lineColors)
  };
})();

const AnimatedGlobe: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mixerRef = useRef<THREE.AnimationMixer | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.z = 5;

    // Add lighting for better 3D model visibility
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Renderer setup with better quality and clipping
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(400, 400);
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.localClippingEnabled = true;
    containerRef.current.appendChild(renderer.domElement);

    // Create points
    const points = new THREE.BufferGeometry();
    points.setAttribute('position', new THREE.BufferAttribute(GLOBE_DATA.positions, 3));
    points.setAttribute('color', new THREE.BufferAttribute(GLOBE_DATA.colors, 3));

    const pointsMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    // Create lines
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(GLOBE_DATA.linePositions, 3));
    lineGeometry.setAttribute('color', new THREE.BufferAttribute(GLOBE_DATA.lineColors, 3));

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.2,
      blending: THREE.AdditiveBlending
    });

    // Create meshes
    const pointCloud = new THREE.Points(points, pointsMaterial);
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);

    // Create pivot for rotation
    const pivot = new THREE.Object3D();
    pivot.add(pointCloud);
    pivot.add(lines);
    
    // Add tilt
    pivot.rotation.x = THREE.MathUtils.degToRad(23.5);
    scene.add(pivot);

    // Add ambient glow
    const glowGeometry = new THREE.SphereGeometry(1.8, 32, 32);
    const glowMaterial = new THREE.ShaderMaterial({
      uniforms: {
        color: { value: new THREE.Color(0xFF4500) }
      },
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 color;
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
          gl_FragColor = vec4(color, intensity * 0.3);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending
    });

    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    pivot.add(glow);

    // Animation setup
    const clock = new THREE.Clock();

    // Load skeleton model
    const loader = new GLTFLoader();
    loader.load(
      '/models/dancing-skeleton.glb',
      (gltf) => {
        const model = gltf.scene;
        
        // Make skeleton larger and position it properly
        model.scale.set(1.2, 1.2, 1.2);
        model.position.set(0, -0.8, 0);
        model.rotation.y = Math.PI;
        
        // Add emissive glow to skeleton
        model.traverse((child) => {
          if (child instanceof THREE.Mesh && child.material) {
            const material = new THREE.MeshPhongMaterial({
              color: 0x00FF00,          // Bright green base color
              emissive: 0x00FF00,       // Green glow
              emissiveIntensity: 0.4,   // Slightly reduced glow to not overpower
              transparent: true,
              opacity: 0.95,            // More solid
              shininess: 120,           // More shiny
              flatShading: true,
              side: THREE.DoubleSide
            });
            child.material = material;
            child.renderOrder = -1;
          }
        });

        // Create clipping planes to keep skeleton inside globe
        const radius = 1.4;
        const clippingPlanes = [
          new THREE.Plane(new THREE.Vector3(-1, 0, 0), radius),
          new THREE.Plane(new THREE.Vector3(1, 0, 0), radius),
          new THREE.Plane(new THREE.Vector3(0, -1, 0), radius),
          new THREE.Plane(new THREE.Vector3(0, 1, 0), radius),
          new THREE.Plane(new THREE.Vector3(0, 0, -1), radius),
          new THREE.Plane(new THREE.Vector3(0, 0, 1), radius)
        ];
        
        model.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.material.clippingPlanes = clippingPlanes;
            child.material.clipIntersection = false;
          }
        });

        pivot.add(model);

        // Set up animation
        if (gltf.animations && gltf.animations.length) {
          mixerRef.current = new THREE.AnimationMixer(model);
          
          // Find the dance animation - this model has a specific dance animation
          const danceAnimation = gltf.animations[0]; // The first animation is the dance
          const action = mixerRef.current.clipAction(danceAnimation);
          
          // Make the dance more energetic
          action.setEffectiveTimeScale(1.5); // Speed up the animation
          action.setEffectiveWeight(1.2);    // Make movements more pronounced
          action.play();

          // Add some random spins and movements
          const updatePosition = () => {
            const time = clock.getElapsedTime();
            
            // Add some bouncing
            model.position.y = -0.8 + Math.sin(time * 3) * 0.1;
            
            // Add some spinning
            if (Math.sin(time * 0.5) > 0.95) {
              model.rotation.y += 0.2;
            }
            
            requestAnimationFrame(updatePosition);
          };
          updatePosition();
        }
      },
      undefined,
      (error) => {
        console.error('Error loading skeleton:', error);
      }
    );

    // Main animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      const delta = clock.getDelta();
      
      // Update skeleton animation
      if (mixerRef.current) {
        mixerRef.current.update(delta);
      }
      
      // Rotate globe
      pivot.rotation.y += 0.002;
      
      // Add slight wobble to the tilt
      pivot.rotation.x = THREE.MathUtils.degToRad(23.5 + Math.sin(clock.getElapsedTime() * 0.5) * 1);

      renderer.render(scene, camera);
    };

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      points.dispose();
      lineGeometry.dispose();
      glowGeometry.dispose();
      pointsMaterial.dispose();
      lineMaterial.dispose();
      glowMaterial.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-[400px] h-[400px] relative"
      style={{
        perspective: '1000px',
        perspectiveOrigin: 'center'
      }}
    />
  );
};

export default AnimatedGlobe;
