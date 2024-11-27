import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-neutralLight py-6 text-center">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-sm md:text-base">
          © {new Date().getFullYear()} <strong>Ferretería App</strong>. Todos los derechos reservados.
        </p>
        <div className="mt-4 flex justify-center space-x-6">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutralLight hover:text-neutralLighter transition"
          >
            Términos
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutralLight hover:text-neutralLighter transition"
          >
            Privacidad
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutralLight hover:text-neutralLighter transition"
          >
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
