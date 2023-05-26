import React, { FC } from "react";
import { TransactionsTable } from "../../types";

const Table: FC<TransactionsTable> = ({ items }) => {
  return (
    <div
      className="mb-5 relative overflow-x-auto bg-white border border-gray-200 rounded-lg
             shadow dark:bg-gray-800 dark:border-gray-700 te"
    >
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Account
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((field) => (
            <tr
              key={field._id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {field.name.first} {field.name.last}
              </th>
              <td className="px-6 py-4">{field._id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
