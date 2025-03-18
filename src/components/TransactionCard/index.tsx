import "./styles.css";

const TransactionCard = ({ data }) => {
  const { logoUrl, transactionTitle, suburb, shortCategory, amount, cashflow } =
    data;
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

// a logo (the "logoUrl" property)
// a title (the "transactionTitle" property)
// a subtitle
// the "suburb" property, if it has a value
// the "shortCategory" property, if it has a value
// if both properties have values, display a separator between them
// an amount (the "amount" property)
// styled differently based on the "cashflow" property
// when cashflow == "inflow"
// prefix with green "+"
// when cashflow == "outflow"
// prefix with red "-"
