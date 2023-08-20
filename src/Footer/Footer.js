import React from 'react';
import './Footer.scss';

const Footer = () => {
  const handleGitHubClick = () => {
    window.open('https://github.com/lochan1996', '_blank');
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <span>© Lochan Sindunoori</span>
        <div className="github-icon" onClick={handleGitHubClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 0a12 12 0 00-3.792 23.373c.6.112.822-.261.822-.576V19.22c-3.338.724-4.042-1.508-4.042-1.508a3.173 3.173 0 00-1.323-1.751c-1.082-.724.084-.712.084-.712a2.515 2.515 0 011.849 1.252 2.554 2.554 0 003.474 1.003 2.568 2.568 0 01.759-1.606c-2.656-.3-5.445-1.328-5.445-5.93a4.663 4.663 0 011.242-3.243 4.32 4.32 0 01.112-3.196s1.01-.325 3.3 1.233a11.79 11.79 0 016.21 0c2.288-1.558 3.295-1.233 3.295-1.233a4.318 4.318 0 01.117 3.196 4.65 4.65 0 011.239 3.243c0 4.613-2.794 5.63-5.456 5.924a2.832 2.832 0 01.814 2.208v3.28c0 .32.218.693.828.574A12.001 12.001 0 0012 0z" />
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
