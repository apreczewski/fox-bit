import React,{ PropsWithChildren } from 'react';

import * as S from './styles';

interface ChildrenProps{
  children: React.ReactNode;
}

export const ListCard= ({ children }: ChildrenProps) => {
  return (
    <S.Container>
      {children}
    </S.Container>
  );
}
