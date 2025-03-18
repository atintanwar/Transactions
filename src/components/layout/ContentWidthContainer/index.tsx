import React, { ReactNode } from "react";

import "./styles.css";
import TransactionCard from "../../TransactionCard";
import Toolbar from "../../Toolbar";

const obj = {
  accountUuid: "c8ba8690-7f6e-483e-9604-3f12c28d97d3",
  accountId: "1916",
  transEnrichmentState: "done",
  transactionId: "322221",
  transactionIdH: "2KO7Z",
  thriveBankTransactionID: 322221,
  transactionType: "TRANSFER_OUTGOING",
  date: "12/02/2025",
  transactionTitle:
    "Payment to Team Thrive Pty Ltd T/A Thriday - Thriday Subscription 2025-02",
  status: "POSTED",
  bkStatus: "C",
  description:
    "Payment to Team Thrive Pty Ltd T/A Thriday - Thriday Subscription 2025-02",
  bankDescription:
    "TFR to ****66S3 MOB To-TEAM THRIVE PTY LTD WORKING ACCOUNT Ref-Thriday Subscription 2025-02",
  referenceClean: "",
  cashflow: "inflow",
  amount: "29.95",
  balanceAmount: null,
  postedDate: "2025-02-12T06:10:25",
  transactiondate: "2025-02-12T06:10:25",
  logoUrl:
    "https://webapp-ae-thrive-dev-primary.azurewebsites.net/images/cat-other-expenses-icon.png",
  receiptName: "Subscription Receipt.pdf",
  receiptUrl: "R692bc936-78b6-48a8-8c6f-b0cd088c760b.pdf",
  receiptID: 5831,
  attachedFileName: null,
  attachmentId: null,
  gst: "2.72",
  merchantPresence: null,
  category: "Payment",
  shortCategory: "Payment",
  categoryId: "28",
  merchantName: null,
  merchantNameAlias: null,
  addressShort: null,
  addressLong: null,
  suburb: "23",
  longitude: null,
  latitude: null,
  phone: null,
  email: null,
  webSite: null,
  acn: null,
  abn: null,
  originalCofACode: 358,
  currentCofACode: 358,
  chartOfAccount: null,
  salesTaxSource: "user",
  notes: null,
  invoiceTotalAmount: null,
  coaName: "Software and Subscriptions",
  businessUsePercentage: 100,
  tags: [],
  attachment: [],
  orderPriority: 0,
  id: "d12d",
};

type ContentWidthContainerProps = {
  children: ReactNode;
  className?: string;
  size?: "normal" | "small" | "slim" | "wide";
};

/*
    Use this to wrap any components that should be centre-aligned on the page.
    Adds bottom-padding to ensure consistent spacing between components.
*/

const ContentWidthContainer = ({
  children,
  className = "",
}: ContentWidthContainerProps) => (
  <section className={`c-container-content-width ${className}`}>
    {children}
    <Toolbar></Toolbar>
    <TransactionCard data={obj}></TransactionCard>
  </section>
);

export default ContentWidthContainer;
