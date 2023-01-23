import React from 'react';
import { SocketProvider } from '@/hooks/useSocket';
import { IProps } from '@/types/hooks';

export const AppProvider: React.FC<IProps> = ({ children }) => (
  <SocketProvider>
    {children}
  </SocketProvider>
);
