import React, { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getData } from "../services/getData";
import Table from "../components/Table";
import Loader from "../components/Loader";
import BackButton from "../components/Buttons/BackButton";
import { TransactionItem } from "../types";

const Navigator: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [tableData, setTableData] = useState<TransactionItem[]>([]);

  useEffect(() => {
    getData().then((resp) => {
      if (location.state && location.state.itemType !== "total") {
        setTableData(
          resp.data.filter((item) => item.type === location.state.itemType)
        );
      } else {
        setTableData(resp.data);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="container mx-auto px-5">
      <div className="py-4 px-4 mx-auto lg:py-8">
        <h1
          className="mb-4 text-xl font-bold tracking-tight leading-none text-gray-800
            md:text-2xl lg:text-2xl dark:text-white"
        >
          Transactions {location.state.itemType}
        </h1>
        <BackButton onClick={() => navigate("/")}>Go Back</BackButton>
      </div>
      {tableData ? (
        <Table items={tableData} />
      ) : (
        <Loader>Please wait...</Loader>
      )}
    </main>
  );
};

export default Navigator;
