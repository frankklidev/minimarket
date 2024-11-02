
import React from 'react';

const MainContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <main className="container mx-auto p-8">{children}</main>;
};

export default MainContent;
