import { ReactNode } from "react";

import "./styles.css";
import Toolbar from "../../Toolbar";
import TransactionList from "../../TransactionList";

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
  </section>
);

export default ContentWidthContainer;
