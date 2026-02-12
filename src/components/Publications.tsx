interface PublicationItem {
  title: string;
  authors: string;
  venue: string;
  year: number;
  doi?: string;
}

export const PublicationsComponent = () => {
  const publications: PublicationItem[] = [
    {
      title: 'Analysis of Equalization Strategies for Broadband Frequency-Interleaved ADCs',
      authors: 'Acosta González, R., et al.',
      venue: 'RPIC\'25, Argentina',
      year: 2025,
    },
    {
      title: 'Experimental Demonstration of a FI-ADC with a Parallel DSP Scheme...',
      authors: 'G. Zoireff, ..., Acosta-González, R., et al.',
      venue: 'ECOC 2024, Germany',
      year: 2024,
    },
    {
      title: 'A Cooperative Multiagent Approach for Optimal Drone Deployment Using Reinforcement Learning',
      authors: 'Acosta-González, R., et al.',
      venue: 'Wiley',
      year: 2021,
    },
  ];

  return (
    <div className="publications-container">
      {publications.map((pub, idx) => (
        <div key={idx} className="publication-card">
          <div className="publication-meta">
            <span className="publication-year">📅 {pub.year}</span>
            <span className="publication-venue">{pub.venue}</span>
          </div>
          <h3 className="publication-title">{pub.title}</h3>
          <p className="publication-authors">{pub.authors}</p>
        </div>
      ))}
    </div>
  );
};
