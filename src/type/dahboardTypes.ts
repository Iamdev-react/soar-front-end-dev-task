export interface WeeklyActivityChartProps {
  weeklyActivity: { day: string; deposit: number; withdraw: number }[];
}

//-------------------------------------------------------------------------------

export interface BalanceHistoryChartProps {
  balanceHistory: { month: string; balance: number }[];
}

//-------------------------------------------------------------------------------

export interface CardData {
  type: string;
  balance: number;
  cardHolder: string;
  validThru: string;
  cardNumber: string;
}

export interface MyCardsProps {
  cards: CardData[];
}
//-------------------------------------------------------------------------------
export interface User {
  id: number;
  name: string;
  role: string;
  avatar: string;
}

export interface QuickTransferProps {
  quickTransfer: {
    users: User[];
  };
}

//-------------------------------------------------------------------------------

export interface Transaction {
  title: string;
  date: string;
  amount: number;
  type: string;
  icon: string;
}

export interface RecentTransactionsProps {
  transactions: Transaction[];
}
// -------------------------------------------------------------------------------
export interface ChartLabelProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  value: number;
  index: number;
}
