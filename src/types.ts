export type TransactionsPageInfo = {
  name: string;
  type: string;
};

export type TransactionsData = {
  total: number;
  data: TransactionItem[];
};
export type TransactionOwnerName = {
  first: string;
  last: string;
};

export type TransactionItem = {
  _id: string;
  amount: string;
  type: string;
  name: TransactionOwnerName;
  company: string;
  address: string;
  email: string;
  phone: string;
};

export type CardInfo = {
  item: TransactionsPageInfo;
  total: number;
  itemIndex: number;
};
export type TransactionsTable = {
  items: TransactionItem[];
};
