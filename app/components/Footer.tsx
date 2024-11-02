
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-neutralLight p-4 mt-8 text-center">
      <p className="text-sm">
        © {new Date().getFullYear()} Ferretería App. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
