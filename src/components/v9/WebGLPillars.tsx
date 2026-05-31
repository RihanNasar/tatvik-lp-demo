'use client';

import React, { useRef, useMemo, useEffect, useState } from 'react';
import { useInView } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial, PresentationControls, Environment } from '@react-three/drei';
import * as THREE from 'three';
import Matter from 'matter-js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// -------------------------------------------------------------
// SCREEN 1: Curriculum Mastery (The Constellation)
// -------------------------------------------------------------
const CurriculumNodes = () => {
  const count = 1000;
  const mesh = useRef<THREE.InstancedMesh>(null);
  
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      // Form a dense rectangle (Textbook)
      const x = (Math.random() - 0.5) * 4;
      const y = (Math.random() - 0.5) * 6;
      const z = (Math.random() - 0.5) * 1;
      temp.push({ x, y, z, originX: x, originY: y, originZ: z });
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    const { pointer } = state;
    // Map pointer to 3D space roughly
    const mouseX = (pointer.x * state.viewport.width) / 2;
    const mouseY = (pointer.y * state.viewport.height) / 2;

    particles.forEach((particle, i) => {
      // Distance from mouse
      const dx = particle.x - mouseX;
      const dy = particle.y - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      // Repel if close
      if (dist < 2) {
        const force = (2 - dist) * 0.15;
        particle.x += (dx / dist) * force;
        particle.y += (dy / dist) * force;
        particle.z += force; // push out in Z
      }
      
      // Spring back to origin (Elastic physics)
      particle.x += (particle.originX - particle.x) * 0.05;
      particle.y += (particle.originY - particle.y) * 0.05;
      particle.z += (particle.originZ - particle.z) * 0.05;

      dummy.position.set(particle.x, particle.y, particle.z);
      // Breathing scale
      const scale = 0.5 + Math.sin(state.clock.elapsedTime * 2 + i) * 0.3;
      dummy.scale.setScalar(scale);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
    mesh.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.3;
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.03, 8, 8]} />
      <meshBasicMaterial color="#00BFFF" transparent opacity={0.8} />
    </instancedMesh>
  );
};

const Screen1 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "200px" });

  return (
    <div ref={ref} className="h-[100dvh] w-full relative flex items-center bg-[#0A1045] overflow-hidden">
       <div className="absolute inset-0 md:left-1/2 z-0 pointer-events-auto cursor-crosshair">
          {isInView && (
            <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
              <CurriculumNodes />
            </Canvas>
          )}
       </div>
       <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pointer-events-none">
          <div className="w-full md:w-[45%]">
             <h2 className="font-serif text-5xl md:text-7xl font-thin text-white tracking-wide mb-6">
                Curriculum Mastery
             </h2>
             <p className="font-sans text-white/50 font-light text-lg tracking-wide leading-relaxed">
                Classes, revision, and activities built directly on the textbook curriculum.
             </p>
          </div>
       </div>
    </div>
  )
};

// -------------------------------------------------------------
// SCREEN 2: Interactive Simplicity (The Fluid Geometry)
// -------------------------------------------------------------
const FluidGeometry = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={2} />
      <Environment preset="city" />
      <PresentationControls
        global
        rotation={[0, 0.3, 0]}
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 2, Math.PI / 2]}
        config={{ mass: 2, tension: 500 }}
        snap={{ mass: 4, tension: 1500 }}
      >
        <mesh>
          <icosahedronGeometry args={[2.5, 0]} />
          <MeshTransmissionMaterial 
            backside
            samples={4}
            thickness={3}
            chromaticAberration={0.05}
            anisotropy={0.1}
            distortion={0.3}
            distortionScale={0.5}
            temporalDistortion={0.05}
            clearcoat={1}
            attenuationDistance={0.5}
            attenuationColor="#00BFFF"
            color="#9B30FF"
          />
        </mesh>
      </PresentationControls>
    </>
  );
};

const Screen2 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "200px" });

  return (
    <div ref={ref} className="h-[100dvh] w-full relative flex items-center bg-[#050820] overflow-hidden">
       <div className="absolute inset-0 md:left-[40%] z-0 pointer-events-auto cursor-grab active:cursor-grabbing">
          {isInView && (
            <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
              <FluidGeometry />
            </Canvas>
          )}
       </div>
       <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pointer-events-none">
          <div className="w-full md:w-[45%]">
             <h2 className="font-serif text-5xl md:text-7xl font-thin text-white tracking-wide mb-6">
                Interactive Simplicity
             </h2>
             <p className="font-sans text-white/50 font-light text-lg tracking-wide leading-relaxed">
                Helps simplify the learning, making it deeply interactive and fun.
             </p>
          </div>
       </div>
    </div>
  )
};

// -------------------------------------------------------------
// SCREEN 3: Empathetic AI (The Swarm)
// -------------------------------------------------------------
const BoidsSwarm = () => {
  const count = 3000;
  const positions = useMemo(() => {
     const pos = new Float32Array(count * 3);
     for(let i=0; i<count; i++) {
        // Random massive cloud
        pos[i*3] = (Math.random() - 0.5) * 20;
        pos[i*3+1] = (Math.random() - 0.5) * 20;
        pos[i*3+2] = (Math.random() - 0.5) * 20;
     }
     return pos;
  }, [count]);

  const targetPositions = useMemo(() => {
     const pos = new Float32Array(count * 3);
     for(let i=0; i<count; i++) {
        // Form a 2D chat bubble shape
        const rx = (Math.random() - 0.5) * 8;
        const ry = (Math.random() - 0.5) * 4;
        const rz = (Math.random() - 0.5) * 0.2;
        
        // Very basic clamping to a rounded rect
        pos[i*3] = rx;
        pos[i*3+1] = ry;
        pos[i*3+2] = rz;
     }
     return pos;
  }, [count]);

  const ref = useRef<THREE.Points>(null);

  useFrame((state) => {
     if(!ref.current) return;
     const posArray = ref.current.geometry.attributes.position.array as Float32Array;
     
     const { pointer } = state;
     const mouseX = (pointer.x * 6);
     const mouseY = (pointer.y * 3);

     for(let i=0; i<count; i++) {
        let tx = targetPositions[i*3];
        let ty = targetPositions[i*3+1];
        let tz = targetPositions[i*3+2];

        // Mouse Ripple
        const dx = tx - mouseX;
        const dy = ty - mouseY;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if(dist < 1.5) {
           tx += (dx/dist) * (1.5-dist);
           ty += (dy/dist) * (1.5-dist);
           tz += (1.5-dist);
        }

        // Swarm towards target
        posArray[i*3] += (tx - posArray[i*3]) * 0.03;
        posArray[i*3+1] += (ty - posArray[i*3+1]) * 0.03;
        posArray[i*3+2] += (tz - posArray[i*3+2]) * 0.03;
     }
     ref.current.geometry.attributes.position.needsUpdate = true;
     // Slight ambient rotation
     ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
     ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#9B30FF" transparent opacity={0.6} blending={THREE.AdditiveBlending} />
    </points>
  )
};

const Screen3 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "200px" });

  return (
    <div ref={ref} className="h-[100dvh] w-full relative flex items-center bg-[#080B1A] overflow-hidden">
       <div className="absolute inset-0 md:left-[40%] z-0 pointer-events-auto">
          {isInView && (
            <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
              <BoidsSwarm />
            </Canvas>
          )}
       </div>
       <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pointer-events-none">
          <div className="w-full md:w-[45%]">
             <h2 className="font-serif text-5xl md:text-7xl font-thin text-white tracking-wide mb-6 drop-shadow-[0_0_20px_rgba(155,48,255,0.5)]">
                Empathetic AI
             </h2>
             <p className="font-sans text-white/50 font-light text-lg tracking-wide leading-relaxed">
                An AI guide that solves every doubt with infinite patience and empathy.
             </p>
          </div>
       </div>
    </div>
  )
};

// -------------------------------------------------------------
// SCREEN 4: Gamified Motivation (The Physics Drop)
// -------------------------------------------------------------
const Screen4 = () => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const isInView = useInView(sceneRef, { margin: "200px" });
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    if (!isInView || !sceneRef.current || isRendered) return;
    
    setIsRendered(true);
    const engine = Matter.Engine.create();
    engineRef.current = engine;
    
    const render = Matter.Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: 'transparent',
        pixelRatio: window.devicePixelRatio
      }
    });

    // Invisible Boundaries
    const ground = Matter.Bodies.rectangle(window.innerWidth/2, window.innerHeight + 50, window.innerWidth, 100, { isStatic: true });
    const wallL = Matter.Bodies.rectangle(-50, window.innerHeight/2, 100, window.innerHeight, { isStatic: true });
    const wallR = Matter.Bodies.rectangle(window.innerWidth+50, window.innerHeight/2, 100, window.innerHeight, { isStatic: true });

    Matter.World.add(engine.world, [ground, wallL, wallR]);

    // Spawn Dozens of Gems
    for(let i=0; i<40; i++) {
       const size = Math.random() * 30 + 15;
       const x = Math.random() * window.innerWidth;
       const y = -Math.random() * 1500 - 200; // Drop from above over time
       
       const gem = Matter.Bodies.polygon(x, y, Math.floor(Math.random() * 4) + 3, size, {
          restitution: 0.8, // Bouncy
          friction: 0.05,
          render: {
             fillStyle: i % 2 === 0 ? 'rgba(16, 185, 129, 0.3)' : 'rgba(0, 191, 255, 0.3)',
             strokeStyle: 'rgba(255, 255, 255, 0.3)',
             lineWidth: 1.5
          }
       });
       Matter.World.add(engine.world, gem);
    }

    // Mouse constraint for interaction
    const mouse = Matter.Mouse.create(render.canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: { stiffness: 0.1, render: { visible: false } }
    });
    Matter.World.add(engine.world, mouseConstraint);
    render.mouse = mouse;

    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);
    Matter.Render.run(render);

    return () => {
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
      Matter.Engine.clear(engine);
      if(render.canvas) render.canvas.remove();
      setIsRendered(false);
    };
  }, [isInView]);

  return (
    <div className="h-[100dvh] w-full relative flex items-center bg-[#061811] overflow-hidden">
       {/* Background emerald glow */}
       <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-[#10B981]/20 to-transparent pointer-events-none" />
       
       {/* Physics Canvas Mount */}
       <div ref={sceneRef} className="absolute inset-0 z-10 pointer-events-auto cursor-grab active:cursor-grabbing" />

       <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 pointer-events-none">
          <div className="w-full md:w-[45%] bg-[#061811]/40 backdrop-blur-md p-8 rounded-3xl border border-white/5 shadow-2xl">
             <h2 className="font-serif text-5xl md:text-7xl font-thin text-emerald-400/90 tracking-wide mb-6">
                Gamified Motivation
             </h2>
             <p className="font-sans text-white/60 font-light text-lg tracking-wide leading-relaxed">
                Gamifying the experience so students never lose motivation and enjoy every step.
             </p>
          </div>
       </div>
    </div>
  )
};

// -------------------------------------------------------------
// SCREEN 5: Accessible Excellence (The Glass Shatter)
// -------------------------------------------------------------
const ShatterCrystal = () => {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
     if(!meshRef.current) return;
     // Idle ambient rotation
     meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
     meshRef.current.rotation.x = state.clock.elapsedTime * 0.05;
  });

  return (
    <group ref={meshRef}>
      {/* We fake a shattered crystal by placing random tetrahedrons */}
      {[...Array(40)].map((_, i) => (
        <mesh 
           key={i} 
           position={[(Math.random()-0.5)*3, (Math.random()-0.5)*3, (Math.random()-0.5)*3]} 
           rotation={[Math.random()*Math.PI, Math.random()*Math.PI, 0]}
        >
          <tetrahedronGeometry args={[Math.random() * 0.8 + 0.3, 0]} />
          <meshPhysicalMaterial color="#00BFFF" transmission={0.9} opacity={1} transparent roughness={0.1} thickness={1.5} />
        </mesh>
      ))}
    </group>
  );
};

const Screen5 = () => {
  const ref = useRef<HTMLDivElement>(null);
  const canvasWrapper = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const oldTextRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "200px" });

  useEffect(() => {
    if(!ref.current || !canvasWrapper.current || !textRef.current || !oldTextRef.current) return;

    const ctx = gsap.context(() => {
      // Shatter effect linked to scroll via GSAP
      // Pushing the entire crystal group OUT towards the camera rapidly
      gsap.to(canvasWrapper.current, {
         scale: 15,
         opacity: 0,
         ease: "power3.in",
         scrollTrigger: {
            trigger: ref.current,
            start: "center center",
            end: "bottom center",
            scrub: 1
         }
      });

      // Fade out old text
      gsap.to(oldTextRef.current, {
         opacity: 0,
         filter: "blur(20px)",
         ease: "power2.in",
         scrollTrigger: {
            trigger: ref.current,
            start: "center center",
            end: "bottom center",
            scrub: 1
         }
      });

      // Reveal ₹0
      gsap.fromTo(textRef.current, 
         { opacity: 0, scale: 0.5, filter: "blur(20px)" },
         { opacity: 1, scale: 1, filter: "blur(0px)",
           scrollTrigger: {
              trigger: ref.current,
              start: "center center",
              end: "bottom center",
              scrub: 1
           }
         }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="h-[200dvh] w-full relative bg-base-navy">
       
       <div className="sticky top-0 h-[100dvh] w-full flex items-center justify-center overflow-hidden">
          
          <div ref={canvasWrapper} className="absolute inset-0 z-10 flex items-center justify-center">
             {isInView && (
               <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
                 <ambientLight intensity={1} />
                 <directionalLight position={[10, 10, 10]} intensity={2} />
                 <Environment preset="city" />
                 <ShatterCrystal />
               </Canvas>
             )}
             <div ref={oldTextRef} className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="font-serif text-5xl md:text-7xl font-thin text-white/70 tracking-tighter mix-blend-overlay">
                   ₹8,000 / month
                </div>
             </div>
          </div>

          <div ref={textRef} className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-20">
             <div className="font-serif text-[120px] md:text-[200px] font-thin text-brand-cyan tracking-tighter drop-shadow-[0_0_80px_rgba(0,191,255,0.6)]">
                ₹0
             </div>
             <p className="font-sans text-white/70 font-light text-lg md:text-xl tracking-wide leading-relaxed max-w-xl text-center mt-4">
                Reduces the need for expensive online or offline tuitions, leveling the playing field.
             </p>
          </div>

       </div>

    </div>
  )
};

// -------------------------------------------------------------
// MASTER COMPONENT
// -------------------------------------------------------------
export default function WebGLPillars() {
  return (
    <section className="w-full flex flex-col relative z-20">
      <Screen1 />
      <Screen2 />
      <Screen3 />
      <Screen4 />
      <Screen5 />
    </section>
  );
}
