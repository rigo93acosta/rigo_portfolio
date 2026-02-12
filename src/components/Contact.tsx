import { useState } from 'react';

export const ContactComponent = () => {
  const [copied, setCopied] = useState(false);

  const email = 'rigo93acosta@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="contact-section">
      <div className="contact-content">
        <div className="contact-text">
          <p>
            ¿Tienes un proyecto interesante o quieres colaborar? Me encantaría conocer tus ideas.
            Contactame por cualquiera de estos canales:
          </p>
        </div>
        <div className="contact-buttons">
          <button onClick={handleCopyEmail} className="social-button">
            📧 Email
          </button>
          <a
            href="https://github.com/rigo93acosta"
            target="_blank"
            rel="noopener noreferrer"
            className="social-button secondary"
          >
            💻 GitHub
          </a>
           <a
             href="https://www.linkedin.com/in/rigoberto-acosta-glez/"
             target="_blank"
             rel="noopener noreferrer"
             className="social-button tertiary"
           >
             💼 LinkedIn
           </a>
        </div>
      </div>

      {copied && (
        <div className="copy-feedback">
          ✓ Email copiado al portapapeles
        </div>
      )}
    </div>
  );
};
