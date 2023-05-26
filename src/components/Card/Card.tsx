import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import DefaultButton from "../Buttons/DefaultButton";
import { CardInfo } from "../../types";

const Card: FC<CardInfo> = ({ item, total, itemIndex }) => {
  const navigate = useNavigate();
  return (
    <div
      key={item.name + itemIndex}
      className="firstElemSpan mt-3 p-6 bg-white border border-gray-200 rounded-lg
             shadow dark:bg-gray-800 dark:border-gray-700 te"
    >
      <a href="/">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {itemIndex === 0 ? <> Welcome </> : <> {total} </>}
        </h5>
      </a>
      {itemIndex === 0 ? (
        <>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            With supporting text below as a natural lead-in to additional
            content
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            You have {total} transactions
          </p>
        </>
      ) : (
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {item.name}
        </p>
      )}
      <DefaultButton
        type="button"
        onClick={() =>
          navigate(
            {
              pathname: "/navigator",
              search: `tab=${itemIndex}`,
            },
            { state: { itemType: item.type } }
          )
        }
      >
        {itemIndex === 0 ? "Show Transactions" : "Show all"}
      </DefaultButton>
    </div>
  );
};

export default Card;
