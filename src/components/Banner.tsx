import { useEffect, useRef } from 'react';

// Clase para dibujar circuitos electrónicos
class Circuit {
  x: number;
  y: number;
  size: number;
  angle: number;
  speed: number;

  constructor(x: number, y: number, size: number, speed: number) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.angle = Math.random() * Math.PI * 2;
    this.speed = speed;
  }

  draw(ctx: CanvasRenderingContext2D, time: number) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle + time * this.speed * 0.01);

    // Dibujar circuito de PCB (pistas)
    ctx.strokeStyle = 'rgba(0, 217, 255, 0.5)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(-this.size, -this.size);
    ctx.lineTo(this.size, -this.size);
    ctx.lineTo(this.size, this.size);
    ctx.lineTo(-this.size, this.size);
    ctx.lineTo(-this.size, -this.size);
    ctx.stroke();

    // Puntos de conexión (nodes)
    const nodes = [
      [-this.size / 2, -this.size / 2],
      [this.size / 2, -this.size / 2],
      [this.size / 2, this.size / 2],
      [-this.size / 2, this.size / 2],
      [0, 0],
    ];

    nodes.forEach((node) => {
      ctx.fillStyle = `rgba(0, 217, 255, ${0.7 + Math.sin(time * 0.05) * 0.3})`;
      ctx.beginPath();
      ctx.arc(node[0], node[1], 3, 0, Math.PI * 2);
      ctx.fill();

      // Línea de conexión interna
      ctx.strokeStyle = `rgba(99, 102, 241, ${0.4 + Math.sin(time * 0.03) * 0.2})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(node[0], node[1]);
      ctx.stroke();
    });

    ctx.restore();
  }
}

// Clase para antenas
class Antenna {
  x: number;
  y: number;
  height: number;
  frequency: number;
  phase: number;

  constructor(x: number, y: number, height: number, frequency: number, phase: number) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.frequency = frequency;
    this.phase = phase;
  }

  draw(ctx: CanvasRenderingContext2D, time: number) {
    // Palo principal de la antena
    ctx.strokeStyle = 'rgba(167, 139, 250, 0.7)';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x, this.y - this.height);
    ctx.stroke();

    // Ondas de radio emanando
    for (let i = 0; i < 3; i++) {
      const waveRadius = 20 + i * 15 + Math.sin(time * this.frequency + this.phase) * 10;
      const opacity = Math.max(0, 1 - waveRadius / 80);
      ctx.strokeStyle = `rgba(167, 139, 250, ${opacity * 0.6})`;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(this.x, this.y - this.height / 2, waveRadius, 0, Math.PI * 2);
      ctx.stroke();
    }

    // Punto de emisión
    ctx.fillStyle = 'rgba(167, 139, 250, 1)';
    ctx.beginPath();
    ctx.arc(this.x, this.y - this.height, 4, 0, Math.PI * 2);
    ctx.fill();
  }
}

// Clase para bits (0s y 1s)
class BitChain {
  x: number;
  y: number;
  bits: string;
  speed: number;
  offset: number;

  constructor(x: number, y: number, speed: number) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.offset = 0;
    // Generar cadena de bits aleatoria
    this.bits = Array.from({ length: 50 }, () => (Math.random() > 0.5 ? '1' : '0')).join('');
  }

  draw(ctx: CanvasRenderingContext2D, time: number) {
    ctx.font = '12px monospace';
    ctx.fillStyle = 'rgba(0, 217, 255, 0.6)';
    ctx.textBaseline = 'middle';

    const displayBits = this.bits.substring(0, 20);
    let drawX = this.x + (time * this.speed) % 400;

    if (drawX > ctx.canvas.width + 100) {
      drawX = -200;
    }

    displayBits.split('').forEach((bit, index) => {
      const bitX = drawX + index * 12;
      if (bitX > -50 && bitX < ctx.canvas.width + 50) {
        const opacity = 0.4 + Math.sin(time * 0.05 + index) * 0.3;
        ctx.fillStyle = `rgba(0, 217, 255, ${opacity})`;
        ctx.fillText(bit, bitX, this.y);
      }
    });
  }
}

// Clase para Wave (del original)
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

    ctx.strokeStyle = `rgba(0, 217, 255, ${opacity * 0.6})`;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(this.x, this.y, currentRadius, 0, Math.PI * 2);
    ctx.stroke();
  }
}

// Clase para Particle (del original)
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
    ctx.fillStyle = `rgba(167, 139, 250, ${this.alpha})`;
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
    canvas.height = 350;

    let time = 0;
    const waves: Wave[] = [];
    const particles: Particle[] = [];
    const circuits: Circuit[] = [];
    const antenas: Antenna[] = [];
    const bitChains: BitChain[] = [];

    // Inicializar ondas
    for (let i = 0; i < 3; i++) {
      waves.push(new Wave(canvas.width / 2, canvas.height / 2, 50 + i * 40, '#00d9ff', 0.02 + i * 0.01, i * 2));
    }

    // Inicializar partículas
    for (let i = 0; i < 8; i++) {
      particles.push(new Particle(canvas.width, canvas.height, '#a78bfa'));
    }

    // Inicializar circuitos electrónicos
    for (let i = 0; i < 3; i++) {
      const x = (canvas.width / 4) * (i + 1);
      const y = canvas.height / 3 + Math.random() * 50;
      circuits.push(new Circuit(x, y, 30 + i * 10, 0.02 + i * 0.01));
    }

    // Inicializar antenas
    antenas.push(new Antenna(canvas.width * 0.15, canvas.height * 0.5, 60, 0.05, 0));
    antenas.push(new Antenna(canvas.width * 0.85, canvas.height * 0.5, 60, 0.06, Math.PI / 2));

    // Inicializar cadenas de bits
    bitChains.push(new BitChain(-200, canvas.height * 0.25, 0.5));
    bitChains.push(new BitChain(-200, canvas.height * 0.75, 0.6));

    // Dibujar líneas conectando partículas
    const drawConnections = (ctx: CanvasRenderingContext2D) => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.strokeStyle = `rgba(167, 139, 250, ${(1 - distance / 150) * 0.3})`;
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
      // Fondo con gradiente moderno (Aurora colors)
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#0a0e27');
      gradient.addColorStop(0.5, '#1a1f4b');
      gradient.addColorStop(1, '#0a0e27');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Dibujar ondas
      waves.forEach((wave) => wave.draw(ctx, time));

      // Dibujar circuitos electrónicos
      circuits.forEach((circuit) => circuit.draw(ctx, time));

      // Dibujar antenas
      antenas.forEach((antenna) => antenna.draw(ctx, time));

      // Actualizar y dibujar partículas
      particles.forEach((particle) => {
        particle.update(canvas.width, canvas.height);
        particle.draw(ctx);
      });

      // Dibujar conexiones
      drawConnections(ctx);

      // Dibujar cadenas de bits
      bitChains.forEach((chain) => chain.draw(ctx, time));

      // Línea de frecuencia sinusoidal mejorada
      ctx.strokeStyle = 'rgba(0, 217, 255, 0.4)';
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
          background: 'linear-gradient(180deg, #0a0e27 0%, #1a1f4b 50%, #0a0e27 100%)',
          borderRadius: '12px',
          boxShadow: '0 8px 32px rgba(0, 217, 255, 0.15)',
        }}
      />
    </div>
  );
};
