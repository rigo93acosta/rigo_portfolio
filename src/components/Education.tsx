interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  details?: string[];
  thesis?: string;
}

export const EducationComponent = () => {
  const education: EducationItem[] = [
    {
      degree: 'PhD en Ciencias de la Ingeniería',
      institution: 'Instituto Balseiro',
      location: 'San Carlos de Bariloche, Argentina',
      period: '2022 – Present',
      details: [
        'Investigación: Conversión Fotónica Analógica-a-Digital',
        'Cursos relevantes: Fotónica Integrada, Redes Neuronales, Comunicaciones Digitales',
      ],
    },
    {
      degree: 'BSc en Telecomunicaciones y Electrónica',
      institution: 'UCLV (Universidad Central "Marta Abreu")',
      location: 'Santa Clara, Cuba',
      period: '2012 – 2017',
      thesis: 'Pizarra electrónica interactiva con comunicación inalámbrica',
    },
  ];

  return (
    <div className="education-container">
      {education.map((edu, idx) => (
        <div key={idx} className="education-card">
          <div className="education-header">
            <div>
              <h3 className="education-degree">{edu.degree}</h3>
              <p className="education-institution">{edu.institution}</p>
            </div>
            <span className="education-period">{edu.period}</span>
          </div>
          <p className="education-location">📍 {edu.location}</p>
          {edu.details && (
            <ul className="education-details">
              {edu.details.map((detail, detailIdx) => (
                <li key={detailIdx}>{detail}</li>
              ))}
            </ul>
          )}
          {edu.thesis && (
            <p className="education-thesis">
              <strong>Tesis:</strong> {edu.thesis}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};
