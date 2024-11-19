import React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex flex-col md:flex-row items-center justify-center h-screen gap-12 px-8 bg-gradient-to-br from-purple-light via-purple to-yellow">
    {children}
  </div>
);

export default Layout;

