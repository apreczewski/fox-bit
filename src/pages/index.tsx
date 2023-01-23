
import { ReactElement,useEffect, useRef, useState } from 'react';
import Head from 'next/head'

import { Card } from '@/components/Card';
import { ListCard } from '@/components/ListCard';

import * as S from '../components/Title/styles';
import { useSocket } from '@/hooks/useSocket';



export default function Home() {
  const { coinData, instruments } = useSocket()

  return (
    <div>
      <Head>
        <title>Foxbit - Frontend Challenge</title>
        <meta name="description" content="Foxbit frontend challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <S.Title>Foxbit - Frontend Challenge</S.Title>
        <ListCard>

          <>{console.log("coinData >> ", coinData)}</>

          {instruments && instruments
            .sort((a, b) => a.sortIndex - b.sortIndex)
            .map((instrument) => {

            return <Card key={instrument.instrumentId} coin={{...instrument,
              name: "Bitcoin",
              lastTradedPx: 119007.0195,
              rolling24HrVolume: -1.0181,
              rolling24HrPxChange: 10.4773,
            }} />
          })}
        </ListCard>
      </main>
    </div>
  )
}
