import { useState } from "react";
import "./styles.css";

const Toolbar = () => {
  const [active, setActive] = useState("ALL");

  const handleClick = (e) => {
    console.log(e.currentTarget.dataset.id);
    setActive(e.currentTarget.dataset.id);
  };

  return (
    <div>
      <div
        style={{ backgroundColor: active === "ALL" ? "#00D373" : "#ffffff" }}
        className="icon-container"
        onClick={handleClick}
        data-id="ALL"
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="red"
          xmlns="http://www.w3.org/2000/svg"
          className="check-icon"
        >
          <g id="Check">
            <path
              id="Icon"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM16.7365 10.2366C17.1433 9.82978 17.1433 9.17022 16.7365 8.76342C16.3297 8.35661 15.6701 8.35661 15.2633 8.76342L10.4999 13.5268L8.73646 11.7634C8.32966 11.3566 7.6701 11.3566 7.26329 11.7634C6.85649 12.1702 6.85649 12.8298 7.26329 13.2366L9.76329 15.7366C9.95865 15.9319 10.2236 16.0417 10.4999 16.0417C10.7762 16.0417 11.0411 15.9319 11.2365 15.7366L16.7365 10.2366Z"
              fill={active === "ALL" ? "#ffffff" : "black"}
            />
          </g>
        </svg>
        <span
          style={{ color: active == "ALL" ? "white" : "black" }}
          className="text"
        >
          All
        </span>
      </div>
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="toolbar-icon"
        onClick={handleClick}
        style={{ backgroundColor: active === "INFLOW" ? "#00D373" : "#ffffff" }}
        data-id="INFLOW"
      >
        <path
          d="M12 5V19"
          stroke={active === "INFLOW" ? "#ffffff" : "black"}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M5 12H19"
          stroke={active === "INFLOW" ? "#ffffff" : "black"}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <svg
        width="40"
        height="40"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="toolbar-icon"
        onClick={handleClick}
        style={{
          backgroundColor: active === "OUTFLOW" ? "#00D373" : "#ffffff",
        }}
        data-id="OUTFLOW"
      >
        <path
          d="M5 10H15"
          stroke={active === "OUTFLOW" ? "#ffffff" : "black"}
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </div>
  );
};

export default Toolbar;
