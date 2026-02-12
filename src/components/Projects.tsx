interface ProjectData {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  year: number;
}

export const ProjectsComponent = () => {
  const projects: ProjectData[] = [
    {
      title: 'Verification UVM & Cocotb',
      subtitle: 'Verificación de Hardware con ML',
      description: 'Sistema completo de verificación funcional de hardware usando UVM con Python y cocotb. Incluye cursos progresivos (básico a avanzado) y un proyecto innovador de verificación guiada por Machine Learning que logra convergencia 100-1000x más rápida que métodos aleatorios. Implementa técnicas de ML-Guided Verification con dinámica temporal para optimizar generación de estímulos.',
      tags: ['SystemVerilog', 'UVM', 'cocotb', 'Python', 'ML', 'FPGA', 'Verificación'],
      github: 'https://github.com/rigo93acosta/verification_uvm_cocotb',
      year: 2024,
    },
    {
      title: 'MLB Predictive Analytics Pipeline',
      subtitle: 'Machine Learning & Data Science',
      description: 'Sistema completo de análisis predictivo NBA con modelos ensemble que logra 99.8% de accuracy. Incluye pipeline automatizado de recolección de datos, EDA con análisis de multicolinealidad (VIF), 5 modelos ML optimizados (Random Forest, XGBoost, Logistic Regression, Neural Network), y sistema de predicciones en tiempo real. Características innovadoras: variables de interacción inteligentes y análisis de zonas de tiro por jugador.',
      tags: ['Python', 'ML', 'XGBoost', 'Scikit-learn', 'Data Science', 'NBA API'],
      github: 'https://github.com/rigo93acosta/mlNBA',
      year: 2024,
    },
    {
      title: 'YouTube Desktop Media Player',
      subtitle: 'Aplicación GUI con Python',
      description: 'Reproductor de YouTube para escritorio con interfaz gráfica basada en Tkinter y motor de reproducción VLC. Soporta reproducción directa de videos, selección de calidad (720p, 1080p), manejo de subtítulos multi-idioma y streams separados de video/audio para máxima calidad.',
      tags: ['Python', 'Tkinter', 'VLC', 'yt-dlp', 'GUI'],
      github: 'https://github.com/rigo93acosta/MediaPlayer',
      year: 2023,
    },
    {
      title: 'Verilog Digital Design Learning',
      subtitle: 'Diseño Digital & FPGA',
      description: 'Colección educativa de proyectos Verilog progresivos: lógica combinacional (Full Adder, Mux/Demux), lógica secuencial (flip-flops), codificadores de prioridad y bloques más complejos. Incluye testbenches, archivos de simulación con iverilog, visualización de waveforms en GTKWave y herramientas de verificación.',
      tags: ['Verilog', 'FPGA', 'Digital Design', 'Simulation', 'iverilog', 'GTKWave'],
      github: 'https://github.com/rigo93acosta/Verilog',
      year: 2023,
    },
    {
      title: 'System Identification & DSP',
      subtitle: 'Procesamiento Digital de Señales',
      description: 'Implementación de técnicas de identificación de sistemas usando tonos y secuencias pseudo-aleatorias (PRBS) para caracterizar funciones de transferencia. Includes frequency response analysis, correlation methods y análisis de sistemas usando Python, NumPy y Jupyter notebooks para visualización de resultados.',
      tags: ['Python', 'DSP', 'System ID', 'NumPy', 'SciPy', 'Jupyter'],
      github: 'https://github.com/rigo93acosta/System_Identification_Code',
      year: 2023,
    },
    {
      title: 'UAV IoT Reinforcement Learning',
      subtitle: 'RL & Drones - Computación distribuida',
      description: 'Proyecto de Aprendizaje por Refuerzo aplicado a sistemas multi-agente de UAVs para aplicaciones IoT. Implementa algoritmos cooperativos para coordinación de drones en ambientes distribuidos, con énfasis en estrategias de exploración y sensado colaborativo en redes de sensores inalámbricas.',
      tags: ['Python', 'Reinforcement Learning', 'UAV', 'IoT', 'Multi-Agent', 'RL'],
      github: 'https://github.com/rigo93acosta/Discover_Sensor',
      year: 2023,
    },
  ];

  return (
    <div className="projects-grid">
      {projects.map((project, idx) => (
        <div key={idx} className="project-card">
          <div className="project-header">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-subtitle">{project.subtitle}</p>
          </div>
          <div className="project-content">
            <p className="project-description">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, tagIdx) => (
                <span key={tagIdx} className="project-tag">
                  {tag}
                </span>
              ))}
            </div>
            <div className="project-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  🔗 GitHub
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                  🚀 Demo
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
