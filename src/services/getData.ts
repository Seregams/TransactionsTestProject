import { TransactionsData } from "../types";

export function getData(): Promise<TransactionsData> {
  return fetch("data/data.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .catch(function (error) {
      return console.log(`Error ${error}`);
    });
}
