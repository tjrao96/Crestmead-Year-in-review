export interface PropertyHighlight {
  id: string;
  title: string;
  category: string;
  price: string;
  address: string;
  beds: number;
  baths: number;
  cars: number;
  imageUrl: string;
  description: string;
  soldDate: string;
  location: {
    lat: number;
    lng: number;
  };
}

export interface RecentSale {
  address: string;
  price: string;
  beds: number;
  baths: number;
  cars: number;
  date: string;
  type: string;
  land: string;
  location?: {
    lat: number;
    lng: number;
  };
}

export interface MarketStat {
  label: string;
  value: string;
  subtext: string;
}

export enum ChatStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}