import { useState, useEffect, useRef } from 'react';

interface SkillItem {
  name: string;
  percentage: number;
}

interface SkillCategory {
  category: string;
  emoji: string;
  skills: SkillItem[];
}

export const SkillsComponent = () => {
  const [animated, setAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setAnimated(true);
      }
    }, { threshold: 0.1 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const skillsData: SkillCategory[] = [
    {
      category: 'Software & Modelado',
      emoji: '💻',
      skills: [
        { name: 'Python', percentage: 95 },
        { name: 'MATLAB', percentage: 98 },
        { name: 'TensorFlow', percentage: 85 },
        { name: 'Scikit-learn', percentage: 90 },
        { name: 'NumPy/Pandas/SciPy', percentage: 92 },
      ],
    },
    {
      category: 'Hardware & FPGA',
      emoji: '⚙️',
      skills: [
        { name: 'SystemVerilog', percentage: 85 },
        { name: 'Vivado (FPGA)', percentage: 88 },
        { name: 'Cocotb', percentage: 82 },
        { name: 'C/C++', percentage: 75 },
        { name: 'Rust', percentage: 70 },
      ],
    },
    {
      category: 'Herramientas & DevOps',
      emoji: '🛠️',
      skills: [
        { name: 'Linux Admin', percentage: 90 },
        { name: 'Git/GitHub', percentage: 92 },
        { name: 'Docker', percentage: 85 },
        { name: 'Lumerical/OptiSystem', percentage: 80 },
        { name: 'Signal Processing', percentage: 95 },
      ],
    },
    {
      category: 'Especializaciones',
      emoji: '🎯',
      skills: [
        { name: 'DSP (Procesamiento Digital)', percentage: 96 },
        { name: 'Machine Learning', percentage: 88 },
        { name: 'Fotónica Integrada', percentage: 85 },
        { name: 'Comunicaciones Ópticas', percentage: 88 },
        { name: 'Sistemas Embebidos', percentage: 87 },
      ],
    },
  ];

  return (
    <div ref={ref} className="skills-container">
      {skillsData.map((category, idx) => (
        <div key={idx} className="skill-category">
          <h3>{category.emoji} {category.category}</h3>
          <div className="skills-grid">
            {category.skills.map((skill, skillIdx) => (
              <div key={skillIdx} className="skill-item">
                <span className="skill-name">{skill.name}</span>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{
                      width: animated ? `${skill.percentage}%` : '0%',
                      transitionDelay: animated ? `${skillIdx * 0.1}s` : '0s',
                    }}
                  />
                </div>
                <span className="skill-percent">{skill.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
