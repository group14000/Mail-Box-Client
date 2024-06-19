import React, { ReactNode } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Sidebar from '@/components/Sidebar/Sidebar';

interface LayoutProps {
  children: ReactNode;
}

const MailLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-grow p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MailLayout;
