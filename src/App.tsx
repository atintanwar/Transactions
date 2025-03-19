// Font imports
import "@fontsource/source-sans-pro";
import "@fontsource/source-sans-pro/600.css";
import "@fontsource/source-sans-pro/700.css";

import ContentWidthContainer from "./components/layout/ContentWidthContainer";

import "./App.css";
import Toolbar from "./components/Toolbar";
import TransactionList from "./components/TransactionList";

/*
  To reference icons:
  
  import checkIcon from "./assets/check-circle-fill.svg";
  import receiptIcon from "./assets/receipt.svg";
  import plusIcon from "./assets/plus.svg";
  import minusIcon from "./assets/minus.svg";

  <img src={receiptIcon} />
*/

const App = () => {
  return (
    <ContentWidthContainer>
      <main className="content">
        <h1>Code Challenge</h1>
        <Toolbar></Toolbar>
        <TransactionList></TransactionList>
      </main>
    </ContentWidthContainer>
  );
};

export default App;
