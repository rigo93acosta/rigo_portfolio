interface ArticleData {
  title: string;
  date: string;
  category: string;
  excerpt: string;
  link: string;
  platform: string;
}

export const BlogComponent = () => {
  const articles: ArticleData[] = [
    {
      title: 'Verificación de Hardware con Python: UVM y cocotb',
      date: '2024',
      category: 'Verificación',
      excerpt: 'Guía completa sobre verificación de hardware utilizando UVM (Universal Verification Methodology) y cocotb, herramientas esenciales para validar diseños FPGA y ASIC.',
      link: 'https://rigo93acosta.github.io/posts/2026/01/blog-verification-uvm-cocotb/',
      platform: 'GitHub Blog',
    },
    {
      title: 'Verificación de Hardware con Docker, Cocotb y UV',
      date: '2024',
      category: 'DevOps',
      excerpt: 'Artículo técnico sobre cómo crear entornos reproducibles con Docker para verificación de hardware, integrando Cocotb y herramientas modernas de desarrollo.',
      link: 'https://www.linkedin.com/pulse/verificaci%25C3%25B3n-de-hardware-con-docker-cocotb-y-uv-acosta-gonz%25C3%25A1lez-p5a6f?trackingId=glg4Ip5jSP2T6joFYaVZRg%3D%3D&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Bsau2bsIcQfCGMmyzC2rVYA%3D%3D',
      platform: 'LinkedIn',
    },
    {
      title: 'Mi Estrategia para Aprender Verilog de Forma Rápida y Efectiva',
      date: '2024',
      category: 'HDL',
      excerpt: 'Comparte mi experiencia personal sobre las mejores prácticas y recursos para dominar Verilog, incluyendo ejercicios prácticos y herramientas de aprendizaje recomendadas.',
      link: 'https://www.linkedin.com/pulse/mi-estrategia-para-aprender-verilog-de-forma-r%25C3%25A1pida-y-rigoberto-6v92f?trackingId=froYqcwySVK7AxI7XpkwFg%3D%3D&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recent_activity_content_view%3BBtzPnfYOSJqrs2TBtBsbmw%3D%3D',
      platform: 'LinkedIn',
    },
  ];

  return (
    <div className="articles-list">
      {articles.map((article, idx) => (
        <div key={idx} className="article-card">
          <div className="article-header">
            <div>
              <span className="article-category">{article.category}</span>
              <h3 className="article-title">{article.title}</h3>
            </div>
            <span className="article-date">{article.date}</span>
          </div>
          <p className="article-excerpt">{article.excerpt}</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <a href={article.link} target="_blank" rel="noopener noreferrer" className="article-link">
              Leer más →
            </a>
            <span style={{ fontSize: '0.8rem', color: '#a6adc8', fontWeight: '500' }}>
              {article.platform}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
