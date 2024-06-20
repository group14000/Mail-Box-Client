import React, { ReactNode } from 'react';
import Navbar from '@/components/Navbar/Navbar';

interface LayoutProps {
  children: ReactNode;
}

const MailLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <main className="flex-grow p-4">
        {children}
      </main>
    </div>
  );
};

export default MailLayout;
