// components/ServiceFeatures.tsx
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
    <div className="border rounded-lg p-6 grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center justify-center text-center">
          {/* Ícono con fondo en gradiente */}
          <div className="mr-3 p-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-700">
            {feature.icon}
          </div>

          {/* Texto */}
          <div className="text-left">
            <h3 className="text-lg font-bold">{feature.title}</h3>
            {feature.description && (
              <p className="text-gray-500 text-sm">{feature.description}</p>
            )}
          </div>

          {/* Separador */}
          {index < features.length - 1 && (
            <div className="hidden md:block mx-6 h-12 border-l border-gray-200"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ServiceFeatures;
