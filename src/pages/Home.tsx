import React, { FC, useEffect, useState } from "react";
import { getData } from "../services/getData";
import Card from "../components/Card";
import Loader from "../components/Loader";
import { TransactionsData, TransactionsPageInfo } from "../types";

const PagesInfo: TransactionsPageInfo[] = [
  { name: "Total", type: "total" },
  { name: "Income", type: "income" },
  { name: "Outcome", type: "outcome" },
  { name: "Investment", type: "investment" },
  { name: "Loans", type: "loan" },
];

const filterTransactionsByType = (
  type: string,
  data: TransactionsData["data"]
): number => {
  return data.filter((item: { type: string }) => item.type === type).length;
};

const Home: FC = () => {
  const [transactionsData, setTransactionsData] =
    useState<TransactionsData | null>(null);

  useEffect(() => {
    getData().then((response) => setTransactionsData(response));
  }, []);

  return (
    <main className="container mx-auto px-5">
      <div className="grid grid-cols-2 gap-4 justify-center">
        {transactionsData ? (
          <>
            {PagesInfo.map((transactionInfo) =>
              transactionInfo.name !== "Total" ? (
                <Card
                  item={transactionInfo}
                  total={filterTransactionsByType(
                    transactionInfo.type,
                    transactionsData.data
                  )}
                  itemIndex={PagesInfo.indexOf(transactionInfo)}
                />
              ) : (
                <Card
                  item={transactionInfo}
                  total={transactionsData.total}
                  itemIndex={PagesInfo.indexOf(transactionInfo)}
                />
              )
            )}
          </>
        ) : (
          <Loader>Please wait...</Loader>
        )}
      </div>
    </main>
  );
};

export default Home;
