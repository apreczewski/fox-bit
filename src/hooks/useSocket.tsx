import { CoinDataProps, IProps, SocketContextProps } from "@/types/hooks";
import { InstrumentProps } from "@/types/hooks";
import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";

const SocketContext = createContext<SocketContextProps>({} as SocketContextProps);

export const SocketProvider: React.FC<IProps> = ({children}) => {
  const [loading, setLoading] = useState(false);
  const [coinData, setCoinData] = useState<CoinDataProps[]>([]);
  const [instruments, setInstruments] = useState<InstrumentProps[]>([]);

  var ws = useRef<WebSocket | null>(null).current;

  const handleLoading = (status: boolean) => {
    if(status){
      setLoading(!status);
    } else {
      setLoading(status);
    }
  }

  const getInstruments = () => {
    if (!ws) return;

    const payloadInstruments = {
      m: 0,
      i: 2,
      n: 'GetInstruments',
      o: JSON.stringify({ OMSID: 1}),
    };

    ws.send(JSON.stringify(payloadInstruments));
  }

  const getSubscribeLevel = useCallback((id: number) => {
    if (!ws) return;
    const payload = {
      m: 0,
      i: 2,
      n: 'SubscribeLevel1',
      o: JSON.stringify({ InstrumentId: id }),
    }

    ws.send(JSON.stringify(payload));
  }, [ws])

  const handleSubscribeLevel = useCallback((data: any) => {
    const {
      InstrumentId: instrumentId,
      LastTradedPx: lastTradedPx,
      Rolling24HrVolume: rolling24HrVolume,
      Rolling24HrPxChange: rolling24HrPxChange,
    } = data

    const instrumentFind = instruments.find(instrument => {

      if(instrumentId === instrument?.instrumentId){
        return instrument
      }
    })

    console.log("instrumentFind >> ", instrumentFind);

    setCoinData(coins => [...coins, { ...instrumentFind, instrumentId, lastTradedPx, rolling24HrVolume, rolling24HrPxChange }])
  }, [instruments])

  const handleUpdateLevel = useCallback((data: any) => {
    const {
      InstrumentId: instrumentId,
      LastTradedPx: lastTradedPx,
      Rolling24HrVolume: rolling24HrVolume,
      Rolling24HrPxChange: rolling24HrPxChange,
    } = data

    console.log("coinData >> ", coinData);

    const newCoins = coinData.map(coin => {
      console.log("coin >> ", instrumentId, coin);
      if(instrumentId === coin?.instrumentId){
        return { ...coin,
          instrumentId,
          lastTradedPx,
          rolling24HrVolume,
          rolling24HrPxChange
        }
      } else {
        return coin
      }
    })

    console.log("newCoins >> ", newCoins);

    setCoinData(newCoins)
  }, [coinData])

  useEffect(() => {
    // Analisar o motivo do erro
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ws = new WebSocket('wss://api.foxbit.com.br/');

    ws.addEventListener('open', function open() {
      console.log('connected');
      getInstruments();
    });

    ws.addEventListener('close', function close() {
      console.log('disconnected');
    });
  },[])

  useEffect(() => {
    if (!ws) return;

    ws.addEventListener('message', function message(response) {
      const data = JSON.parse(response?.data);
      const result = JSON.parse(data?.o);

      // RESPONSE WITH ALL CRYPTOS
      if (data?.n === 'GetInstruments') {
        console.log('Instruments >> ', result);
        const listInstrument = result.map(({
          InstrumentId: instrumentId,
          Symbol: symbol,
          SortIndex: sortIndex
        }: any) => {
          return { instrumentId, symbol, sortIndex }
        })

        setInstruments(listInstrument);

        listInstrument.map((instrument: any) =>
          getSubscribeLevel(instrument?.instrumentId)
        )
        setLoading(false);
      }

      // FIRST RESPONSE
      if (data?.n === 'SubscribeLevel1') {
        setLoading(true);
        handleSubscribeLevel(result);
      }

      // UPDATE RESPONSE
      if (data?.n === 'Level1UpdateEvent') {
        // handleUpdateLevel(result);
      }
    });
  }, [ws, handleSubscribeLevel, handleUpdateLevel, getSubscribeLevel])

  return (
    <SocketContext.Provider value={{
      loading,
      coinData,
      instruments,
      handleLoading,
      getSubscribeLevel,
    }}>
      {children}
    </SocketContext.Provider>
  )
}

export const useSocket = (): SocketContextProps => {
  const context = useContext(SocketContext);

  if(!context){
    throw new Error("useSocket must be used within an Props. Example: homeProps");
  }

  return context;
}
