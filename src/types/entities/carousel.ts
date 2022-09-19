interface Casino {
  id: number;
  name: string;
  logo: string;
  link: string;
  isExclusive: boolean;
  type: string;
  bonusPercent: number;
  bonusAmount: number;
  freeSpinCount: number;
}

export interface BodyProps {
  items: Casino[];
}

export interface CasinoCardProps {
  item: Casino;
}
