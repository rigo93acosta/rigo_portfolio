import './App.css';
import './components/components.css';
import { BannerComponent } from './components/Banner';
import { ExperienceComponent } from './components/Experience';
import { EducationComponent } from './components/Education';
import { CertificationsComponent } from './components/Certifications';
import { PublicationsComponent } from './components/Publications';
import { ProjectsComponent } from './components/Projects';
import { BlogComponent } from './components/Blog';
import { ContactComponent } from './components/Contact';

const Portfolio = () => {
  return (
    <div className="container">
      <header>
        {/* Banner animado con ondas y partículas */}
        <BannerComponent />
        <h1>Rigoberto Acosta González</h1>
        <p style={{ fontSize: '1.1rem', color: '#89b4fa', fontWeight: '500' }}>
          Telecommunications Engineer | PhD Candidate | DSP & Photonics & Verification
        </p>
        <p>📍 San Carlos de Bariloche, Argentina</p>
      </header>

      <section>
        <h2>Sobre Mí</h2>
        <div className="card">
          <p>
            <strong>Rigoberto Acosta González</strong> - Ingeniero en Telecomunicaciones y Electrónica | Candidato a PhD en Ciencias de la Ingeniería
          </p>
          <p>
            Soy investigador orientado a la investigación y candidato a doctorado en el Instituto Balseiro, 
            especializado en <strong>Procesamiento Digital de Señales (DSP)</strong>, fotónica y sistemas integrados. 
            Con experiencia en Python y MATLAB para modelado científico y simulación, he trabajado en la 
            implementación de algoritmos avanzados de DSP para Conversión Fotónica Analógica-a-Digital (P-ADC).
          </p>
          <p>
            Mi enfoque combina la investigación teórica con la implementación práctica en hardware, 
            enlazando conocimientos en machine learning, FPGA y sistemas embebidos.
          </p>
        </div>
      </section>

      <section>
        <h2>🎯 Competencias & Expertise</h2>
        <div className="card">
          <h3>🛠️ Software & Modelado Científico</h3>
          <div>
            <span className="badge">Python (Avanzado)</span>
            <span className="badge">MATLAB (Experto)</span>
            <span className="badge">TensorFlow</span>
            <span className="badge">Scikit-learn</span>
            <span className="badge">NumPy/Pandas/SciPy</span>
          </div>
        </div>

        <div className="card">
          <h3>⚙️ Hardware & FPGA</h3>
          <div>
            <span className="badge">SystemVerilog</span>
            <span className="badge">Vivado</span>
            <span className="badge">Cocotb</span>
            <span className="badge">C/C++</span>
            <span className="badge">Rust</span>
          </div>
        </div>

        <div className="card">
          <h3>💻 Herramientas & DevOps</h3>
          <div>
            <span className="badge">Linux Admin</span>
            <span className="badge">Git/GitHub</span>
            <span className="badge">Docker</span>
            <span className="badge">Lumerical</span>
            <span className="badge">OptiSystem</span>
          </div>
        </div>
      </section>

      <section>
        <h2>💼 Experiencia Profesional</h2>
        <ExperienceComponent />
      </section>

      <section>
        <h2>🎓 Educación</h2>
        <EducationComponent />
      </section>

      <section>
        <h2>📜 Certificaciones</h2>
        <CertificationsComponent />
      </section>

      <section>
        <h2>📰 Publicaciones</h2>
        <PublicationsComponent />
      </section>

      <section>
        <h2>🚀 Proyectos Destacados</h2>
        <ProjectsComponent />
      </section>

      <section>
        <h2>📖 Artículos & Blog</h2>
        <BlogComponent />
      </section>

      <section>
        <h2>📞 Ponerse en Contacto</h2>
        <ContactComponent />
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} - Construido con Zephyr Cloud & Rspack</p>
      </footer>
    </div>
  );
};

export default Portfolio;
