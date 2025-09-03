<template>
    <div class="stage">
      <canvas ref="canvas" class="fx"></canvas>
      <div class="center">
        <div class="ia">AI</div>
      </div>
      <div
        class="hover-zone"
        
      ></div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount } from "vue";
  
  const canvas = ref(null);
  const hovering = ref(false);
  
  const CFG = {
    color: "#0ea5e9",
    count: 390,
    size: [0.8, 2.0],
    maxSpeed: 1.0,
    damping: 0.98,
    circleRadius: 0.72, // rayon normal
    hoverRadius: 0.75   // rayon au hover (plus grand => dispersion)
  };
  
  let ctx, dpr, size, half, particles = [], animationFrame;
  
  function rand(a, b) {
    return a + Math.random() * (b - a);
  }
  
  function resize() {
    const c = canvas.value;
    const rect = c.getBoundingClientRect();
    size = Math.round(Math.min(rect.width, rect.height));
    half = size / 2;
    dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
  
    c.width = size * dpr;
    c.height = size * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  
    const R = CFG.circleRadius * half;
    particles = Array.from({ length: CFG.count }, () => {
      const ang = rand(0, Math.PI * 2);
      const rad = rand(0, R);
      return {
        x: half + Math.cos(ang) * rad,
        y: half + Math.sin(ang) * rad,
        vx: rand(-1, 1),
        vy: rand(-1, 1),
        r: rand(CFG.size[0], CFG.size[1])
      };
    });
  }
  
  function step() {
    ctx.clearRect(0, 0, size, size);
    const R = (hovering.value ? CFG.hoverRadius : CFG.circleRadius) * half;
  
    for (const p of particles) {
      p.vx += (Math.random() - 0.5) * 0.2;
      p.vy += (Math.random() - 0.5) * 0.2;
  
      const sp = Math.hypot(p.vx, p.vy);
      if (sp > CFG.maxSpeed) {
        p.vx *= CFG.maxSpeed / sp;
        p.vy *= CFG.maxSpeed / sp;
      }
  
      p.x += p.vx;
      p.y += p.vy;
      p.vx *= CFG.damping;
      p.vy *= CFG.damping;
  
      const dx = p.x - half,
        dy = p.y - half,
        dist = Math.hypot(dx, dy);
  
      if (dist > R) {
        const angle = Math.atan2(dy, dx);
        p.x = half + Math.cos(angle) * R;
        p.y = half + Math.sin(angle) * R;
        p.vx *= -0.6;
        p.vy *= -0.6;
      }
  
      ctx.beginPath();
      ctx.fillStyle = CFG.color;
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }
  
    animationFrame = requestAnimationFrame(step);
  }
  
  onMounted(() => {
    ctx = canvas.value.getContext("2d", { alpha: true });
    resize();
    window.addEventListener("resize", resize, { passive: true });
    animationFrame = requestAnimationFrame(step);
  });
  
  onBeforeUnmount(() => {
    window.removeEventListener("resize", resize);
    cancelAnimationFrame(animationFrame);
  });
  </script>
  
  <style scoped>
  .stage {
    display: grid;
    place-items: center;
    position: relative;
    overflow: hidden;
  }
  .fx {
    width: min(22vmin, 1000px);
    aspect-ratio: 1/1;
    display: block;
    border-radius: 10px;
    background-color: transparent !important;
  }
  .center {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    pointer-events: none;
  }
  .ia {
    font-weight: 900;
    font-size: clamp(64px, 12vw, 80px);
    background: linear-gradient(90deg, var(--main), #38bdf8 80%);
    -webkit-background-clip: text;
    background-clip: text;
   color:#38bdf8;
    text-shadow: 0 0 28px rgba(14, 165, 233, 0.55);
  }
  .hover-zone {
    position: absolute;
    inset: 0;
    z-index: 5;
    cursor: pointer;
  }
  </style>
  