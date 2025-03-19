import TransactionCard from "../TransactionCard/index";
import { useSelector } from "react-redux";
import "./styles.css";

interface Transaction {
  date: string;
  logoUrl: string;
  transactionTitle: string;
  suburb?: string;
  shortCategory?: string;
  cashflow: "inflow" | "outflow";
  amount: number;
}

interface RootState {
  data: Transaction[];
  error: string | null;
}

const TransactionList = () => {
  const { data, error } = useSelector((state: RootState) => state);
  console.log(error, "error");
  const groupByDateData =
    data.length > 0
      ? data.reduce<Record<string, Transaction[]>>((acc, item) => {
          (acc[item.date] = acc[item.date] || []).push(item);
          return acc;
        }, {})
      : {};
  return (
    <div>
      {error === null &&
        Object.keys(groupByDateData).map((key, index) => {
          return (
            <div className="dateContainer">
              <div className="date-text">{key}</div>
              {groupByDateData[key].map((item, index) => {
                return (
                  <TransactionCard key={index} data={item}></TransactionCard>
                );
              })}
            </div>
          );
        })}
      {error !== null && <h2>{error}</h2>}
    </div>
  );
};

export default TransactionList;
