import { useEffect, useRef } from 'react';

// Clases definidas afuera del hook
class Wave {
  x: number;
  y: number;
  radius: number;
  color: string;
  speed: number;
  phase: number;

  constructor(
    x: number,
    y: number,
    radius: number,
    color: string,
    speed: number,
    phase: number
  ) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.speed = speed;
    this.phase = phase;
  }

  draw(ctx: CanvasRenderingContext2D, time: number) {
    const currentRadius = this.radius + Math.sin(time * this.speed + this.phase) * 20;
    const opacity = Math.max(0, 1 - currentRadius / 150);

    ctx.strokeStyle = `rgba(137, 180, 250, ${opacity * 0.6})`;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(this.x, this.y, currentRadius, 0, Math.PI * 2);
    ctx.stroke();
  }
}

class Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;

  constructor(width: number, height: number, color: string) {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.vx = (Math.random() - 0.5) * 1;
    this.vy = (Math.random() - 0.5) * 1;
    this.radius = Math.random() * 3 + 1;
    this.color = color;
    this.alpha = Math.random() * 0.5 + 0.3;
  }

  update(width: number, height: number) {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > width) this.vx *= -1;
    if (this.y < 0 || this.y > height) this.vy *= -1;

    this.x = Math.max(0, Math.min(width, this.x));
    this.y = Math.max(0, Math.min(height, this.y));
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = `rgba(203, 166, 247, ${this.alpha})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

export const BannerComponent = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Configurar canvas
    canvas.width = window.innerWidth;
    canvas.height = 300;

    let time = 0;
    const waves: Wave[] = [];
    const particles: Particle[] = [];

    // Inicializar ondas
    for (let i = 0; i < 3; i++) {
      waves.push(new Wave(canvas.width / 2, canvas.height / 2, 50 + i * 40, '#89b4fa', 0.02 + i * 0.01, i * 2));
    }

    // Inicializar partículas
    for (let i = 0; i < 8; i++) {
      particles.push(new Particle(canvas.width, canvas.height, '#cba6f7'));
    }

    // Dibujar líneas conectando partículas
    const drawConnections = (ctx: CanvasRenderingContext2D) => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.strokeStyle = `rgba(203, 166, 247, ${(1 - distance / 150) * 0.3})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    // Animación
    const animate = () => {
      // Fondo con gradiente
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#1e1e2e');
      gradient.addColorStop(0.5, '#2d2d4a');
      gradient.addColorStop(1, '#1e1e2e');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Dibujar ondas
      waves.forEach((wave) => wave.draw(ctx, time));

      // Actualizar y dibujar partículas
      particles.forEach((particle) => {
        particle.update(canvas.width, canvas.height);
        particle.draw(ctx);
      });

      // Dibujar conexiones
      drawConnections(ctx);

      // Línea de frecuencia sinusoidal
      ctx.strokeStyle = 'rgba(137, 180, 250, 0.4)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();

      for (let x = 0; x < canvas.width; x += 10) {
        const y = canvas.height / 2 + Math.sin((x + time * 2) * 0.01) * 30;
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();

      time++;
      requestAnimationFrame(animate);
    };

    animate();

    // Manejar redimensionamiento
    const handleResize = () => {
      canvas.width = window.innerWidth;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', marginBottom: '2rem' }}>
      <canvas
        ref={canvasRef}
        style={{
          display: 'block',
          width: '100%',
          background: 'linear-gradient(180deg, #1e1e2e 0%, #2d2d4a 50%, #1e1e2e 100%)',
          borderRadius: '12px',
          boxShadow: '0 8px 32px rgba(137, 180, 250, 0.1)',
        }}
      />
    </div>
  );
};
