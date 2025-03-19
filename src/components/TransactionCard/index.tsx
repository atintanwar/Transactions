import "./styles.css";

interface Data {
  logoUrl: string;
  transactionTitle: string;
  suburb?: string;
  shortCategory?: string;
  cashflow: "inflow" | "outflow";
  amount: number;
}

interface TransactionCardProps {
  data: Data;
}

const TransactionCard = ({ data }: TransactionCardProps) => {
  const {
    logoUrl,
    transactionTitle,
    suburb = "",
    shortCategory = "",
    amount,
    cashflow,
  } = data;
  const dynamicDetail =
    suburb && shortCategory
      ? `${suburb} | ${shortCategory}`
      : suburb + shortCategory;
  return (
    <div className="card">
      <img src={logoUrl} className="logo" alt="img" />
      <div className="left-detail-container">
        <span className="title">{transactionTitle}</span>
        <span>{dynamicDetail}</span>
      </div>
      <div className="right-detail-container">
        {cashflow == "inflow" ? (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 5V19"
              stroke="#00D373"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5 12H19"
              stroke="#00D373"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        ) : (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 10H15"
              stroke="#CC0000"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        )}
        <span>${amount}</span>
      </div>
    </div>
  );
};

export default TransactionCard;