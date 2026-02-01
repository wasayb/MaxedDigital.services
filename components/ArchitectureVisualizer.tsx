import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ArchitectureVisualizer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const frameIdRef = useRef<number | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const isVisibleRef = useRef(true);

  useEffect(() => {
    if (!containerRef.current) return;

    // --- Scene Setup ---
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      45,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 10;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // --- Geometries ---
    const coreGeometry = new THREE.IcosahedronGeometry(1.2, 4);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      wireframe: true,
      transparent: true,
      opacity: 0.1
    });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    scene.add(core);

    const shellGeometry = new THREE.IcosahedronGeometry(2.5, 2);
    const shellMaterial = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      wireframe: true,
      transparent: true,
      opacity: 0.2
    });
    const shell = new THREE.Mesh(shellGeometry, shellMaterial);
    scene.add(shell);

    const nodeCount = 30;
    const nodes: THREE.Mesh[] = [];
    for (let i = 0; i < nodeCount; i++) {
      const g = new THREE.BoxGeometry(0.04, 0.04, 0.04);
      const m = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.5 });
      const node = new THREE.Mesh(g, m);
      
      const phi = Math.acos(-1 + (2 * i) / nodeCount);
      const theta = Math.sqrt(nodeCount * Math.PI) * phi;
      const radius = 2.8 + Math.random() * 0.4;
      
      node.position.set(
        radius * Math.cos(theta) * Math.sin(phi),
        radius * Math.sin(theta) * Math.sin(phi),
        radius * Math.cos(phi)
      );
      
      scene.add(node);
      nodes.push(node);
    }

    // --- Interaction & Visibility ---
    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        mouseRef.current.x = (e.clientX - rect.left) / rect.width - 0.5;
        mouseRef.current.y = (e.clientY - rect.top) / rect.height - 0.5;
      }
    };
    
    const observer = new IntersectionObserver(([entry]) => {
      isVisibleRef.current = entry.isIntersecting;
    }, { threshold: 0.1 });
    
    observer.observe(containerRef.current);
    window.addEventListener('mousemove', handleMouseMove);

    // --- Animation Loop ---
    const animate = (time: number) => {
      if (!isVisibleRef.current) {
        frameIdRef.current = requestAnimationFrame(animate);
        return;
      }

      if (shell) {
        shell.rotation.y += 0.0015;
        shell.rotation.z += 0.0008;
        shell.rotation.x += (mouseRef.current.y * 0.08 - shell.rotation.x) * 0.05;
        shell.rotation.y += (mouseRef.current.x * 0.08 - shell.rotation.y) * 0.05;
      }
      
      if (core) {
        core.rotation.y -= 0.004;
        const pulse = Math.sin(time * 0.0015) * 0.15 + 0.85;
        core.scale.set(pulse, pulse, pulse);
        core.material.opacity = (Math.sin(time * 0.0015) * 0.08 + 0.12);
      }

      nodes.forEach((node, idx) => {
        node.position.y += Math.sin(time * 0.0008 + idx) * 0.0008;
      });

      renderer.render(scene, camera);
      frameIdRef.current = requestAnimationFrame(animate);
    };
    frameIdRef.current = requestAnimationFrame(animate);

    const handleResize = () => {
      if (!containerRef.current || !camera || !renderer) return;
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      if (frameIdRef.current) cancelAnimationFrame(frameIdRef.current);
      
      // Extensive Cleanup
      nodes.forEach(n => {
        n.geometry.dispose();
        (n.material as THREE.Material).dispose();
      });
      core.geometry.dispose();
      coreMaterial.dispose();
      shell.geometry.dispose();
      shellMaterial.dispose();
      
      if (rendererRef.current) {
        rendererRef.current.dispose();
        if (rendererRef.current.domElement && containerRef.current?.contains(rendererRef.current.domElement)) {
          containerRef.current.removeChild(rendererRef.current.domElement);
        }
      }
    };
  }, []);

  return (
    <div className="relative w-full h-full group">
      <div ref={containerRef} className="w-full h-full cursor-crosshair"></div>
      
      <div className="absolute inset-0 pointer-events-none w-full h-full flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity duration-1000">
        {/* Core HUD Labels */}
        <div className="absolute top-1/4 left-1/4 animate-pulse">
            <span className="text-[7px] font-mono text-blue-500/60 bg-blue-500/5 px-2 py-1 rounded border border-blue-500/10 uppercase tracking-[0.4em]">[GRID_MAPPING]</span>
        </div>
        <div className="absolute bottom-1/4 right-1/4 animate-pulse delay-700">
            <span className="text-[7px] font-mono text-blue-500/60 bg-blue-500/5 px-2 py-1 rounded border border-blue-500/10 uppercase tracking-[0.4em]">[CORE_STABLE]</span>
        </div>

        {/* Key Bullet Points Callouts */}
        <div className="absolute top-[15%] right-[20%] animate-pulse delay-150">
            <span className="text-[8px] font-mono text-white/80 bg-white/5 px-2 py-1 rounded border border-white/10 uppercase tracking-[0.2em] flex items-center gap-2">
              <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
              LATENCY_MINIMIZED
            </span>
        </div>
        <div className="absolute top-[60%] left-[10%] animate-pulse delay-300">
            <span className="text-[8px] font-mono text-white/80 bg-white/5 px-2 py-1 rounded border border-white/10 uppercase tracking-[0.2em] flex items-center gap-2">
              <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
              CONVERSION_LOGIC
            </span>
        </div>
        <div className="absolute bottom-[10%] left-[30%] animate-pulse delay-450">
            <span className="text-[8px] font-mono text-white/80 bg-white/5 px-2 py-1 rounded border border-white/10 uppercase tracking-[0.2em] flex items-center gap-2">
              <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
              VELOCITY_ENGINE
            </span>
        </div>
        <div className="absolute top-[40%] right-[5%] animate-pulse delay-600">
            <span className="text-[8px] font-mono text-white/80 bg-white/5 px-2 py-1 rounded border border-white/10 uppercase tracking-[0.2em] flex items-center gap-2">
              <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
              DATA_INTEGRITY
            </span>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureVisualizer;