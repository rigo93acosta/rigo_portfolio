interface CertificationItem {
  title: string;
  issuer: string;
  platform: string;
  year: number;
}

export const CertificationsComponent = () => {
  const certifications: CertificationItem[] = [
    {
      title: 'Digital Signal Processing Specialization',
      issuer: 'EPFL',
      platform: 'Coursera',
      year: 2026,
    },
    {
      title: 'Machine Learning Specialization',
      issuer: 'DeepLearning.AI / Stanford',
      platform: 'Coursera',
      year: 2024,
    },
    {
      title: 'Linux Server Administration',
      issuer: 'Platzi',
      platform: 'Platzi',
      year: 2025,
    },
    {
      title: 'FPGA Development and Verilog',
      issuer: 'LinkedIn Learning',
      platform: 'LinkedIn Learning',
      year: 2025,
    },
    {
      title: 'Python for Data Analysis',
      issuer: 'Platzi',
      platform: 'Platzi',
      year: 2024,
    },
  ];

  return (
    <div className="certifications-container">
      {certifications.map((cert, idx) => (
        <div key={idx} className="certification-card">
          <div className="certification-content">
            <h3 className="certification-title">🎓 {cert.title}</h3>
            <p className="certification-issuer">{cert.issuer}</p>
            <div className="certification-footer">
              <span className="certification-platform">{cert.platform}</span>
              <span className="certification-year">{cert.year}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
