import { ReactNode } from "react";

export interface IProps {
  children?: ReactNode | undefined
}

export interface CoinDataProps {
  instrumentId: number,
  lastTradedPx: number,
  rolling24HrVolume: number,
  rolling24HrPxChange: number,
}

export interface InstrumentProps {
  symbol: string,
  sortIndex: number,
  instrumentId: number,
}

export interface SocketContextProps {
  loading?: boolean;
  coinData?: CoinDataProps[],
  instruments?: InstrumentProps[],
  handleLoading?: (status: boolean) => void,
  getSubscribeLevel?: (id: number) => void,
  handleSubscribeUpdateLevel?: (data: any) => void,
}

export interface CardProps {
  coin: {
    symbol: string,
    name?: string,
    sortIndex: number,
    instrumentId: number,
    lastTradedPx: number,
    rolling24HrVolume: number,
    rolling24HrPxChange: number,
  }
}
