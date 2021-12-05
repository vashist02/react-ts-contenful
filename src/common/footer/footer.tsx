import React from 'react';
import './footer.scss';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="footer__wrapper">
        <p>Copyright &copy; {year} Imitiation.mu &reg;</p>
      </div>
    </footer>
  );
};
