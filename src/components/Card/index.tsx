import React from 'react';
import Image from 'next/image';

import { CardProps } from '@/types/hooks';

import * as S from './styles';

export const Card = ({ coin }: CardProps) => {
  const status = coin?.rolling24HrVolume < 0 ? true : false;

  return (
      <S.Container>
        <S.SessionFirst status={status}>
          <Image
            src={`https://statics.foxbit.com.br/icons/colored/btc.svg`}
            width="28"
            height="28"
            alt={''}
          />
          <div>
            {
              status ? (
                <Image
                  src="/assets/icons/arrow-positive.svg"
                  width="12"
                  height="12"
                  alt={''}
                />
              ) : (
                <Image
                  src="/assets/icons/arrow-negative.svg"
                  width="12"
                  height="12"
                  alt={''}
                />
              )
            }
            <span>{Math.abs(coin?.rolling24HrVolume).toFixed(2)}%</span>
          </div>
        </S.SessionFirst>

        <S.SessionSecund>
          <span>{coin.name}</span>
        </S.SessionSecund>

        <S.SessionThird>
          <span>R$</span>
          <span>{coin?.lastTradedPx.toLocaleString('pt-br', {minimumFractionDigits: 4})}</span>
        </S.SessionThird>

        <S.SessionFourth>
          <span>Volume (24h)</span>
          <span>{coin?.rolling24HrVolume.toLocaleString('pt-br', {minimumFractionDigits: 2})} {coin?.symbol.split("/")[0]}</span>
        </S.SessionFourth>
      </S.Container>
  );
}
