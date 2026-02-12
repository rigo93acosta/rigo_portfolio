interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills?: string[];
}

export const ExperienceComponent = () => {
  const experience: ExperienceItem[] = [
    {
      title: 'Graduate Researcher',
      company: 'Instituto Balseiro',
      location: 'San Carlos de Bariloche, Argentina',
      period: '2022 – Present',
      description: [
        'Desarrollo de algoritmos avanzados de DSP para Conversión Fotónica Analógica-a-Digital (P-ADC)',
        'Implementación de simulaciones científicas y pipelines de procesamiento de datos usando Python y MATLAB',
        'Diseño de esquemas paralelos de DSP para comunicaciones ópticas',
        'Publicaciones en conferencias internacionales (ECOC 2024) sobre estrategias de ecualización para ADCs',
      ],
      skills: ['Python', 'MATLAB', 'DSP', 'FPGA', 'Comunicaciones Ópticas'],
    },
    {
      title: 'Teaching Assistant',
      company: 'Instituto Balseiro',
      location: 'San Carlos de Bariloche, Argentina',
      period: '2024',
      description: [
        'Dirección de sesiones prácticas sobre Procesamiento Estadístico de Señales y Procesos Estocásticos',
        'Enseñanza a estudiantes de ingeniería con énfasis en aplicaciones prácticas',
      ],
      skills: ['Procesamiento de Señales', 'Docencia', 'Mentoría'],
    },
    {
      title: 'Instructor Professor',
      company: 'Universidad Central "Marta Abreu" (UCLV)',
      location: 'Santa Clara, Cuba',
      period: '2017 – 2022',
      description: [
        'Enseñanza de Microprocesadores y Sistemas Embebidos',
        'Supervisión de 3 tesis de pregrado en co-diseño hardware-software',
        'Desarrollo de firmware en C y Assembly; implementación de protocolos de comunicación inalámbrica',
      ],
      skills: ['C', 'Assembly', 'Sistemas Embebidos', 'Docencia'],
    },
  ];

  return (
    <div className="experience-container">
      {experience.map((job, idx) => (
        <div key={idx} className="experience-card">
          <div className="experience-header">
            <div>
              <h3 className="experience-title">{job.title}</h3>
              <p className="experience-company">{job.company}</p>
            </div>
            <span className="experience-period">{job.period}</span>
          </div>
          <p className="experience-location">📍 {job.location}</p>
          <ul className="experience-description">
            {job.description.map((desc, descIdx) => (
              <li key={descIdx}>{desc}</li>
            ))}
          </ul>
          {job.skills && (
            <div className="experience-skills">
              {job.skills.map((skill, skillIdx) => (
                <span key={skillIdx} className="experience-skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
