import React from "react";
import { Truck, ShieldCheck, Calendar, Headphones } from "lucide-react";

const features = [
  {
    icon: <Truck className="text-white w-6 h-6" />,
    title: "Envío Rápido",
    description: "Desde 100*",
  },
  {
    icon: <ShieldCheck className="text-white w-6 h-6" />,
    title: "Garantía",
    description: "Más de 2 años",
  },
  {
    icon: <Calendar className="text-white w-6 h-6" />,
    title: "Abierto",
    description: "365 Días",
  },
  {
    icon: <Headphones className="text-white w-6 h-6" />,
    title: "Atención Personalizada",
    description: "",
  },
];

const ServiceFeatures: React.FC = () => {
  return (
    <div className="border rounded-lg p-6 grid grid-cols-1 md:grid-cols-4 gap-6">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col items-center md:flex-row md:justify-start text-center md:text-left"
        >
          {/* Ícono con fondo en gradiente */}
          <div className="p-3 rounded-full bg-gradient-to-r from-blue-400 to-blue-700 flex items-center justify-center mb-2 md:mb-0 md:mr-3">
            {feature.icon}
          </div>

          {/* Texto */}
          <div>
            <h3 className="text-lg font-bold">{feature.title}</h3>
            {feature.description && (
              <p className="text-gray-500 text-sm">{feature.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceFeatures;
