"use client";

import { StrictMode, useEffect } from "react";
import ErrorBoundary from "../components/ErrorBoundary.jsx";
import { initGA } from "../utils/analytics.js";

export default function Providers({ children }) {
  useEffect(() => {
    initGA();
  }, []);

  return (
    <StrictMode>
      <ErrorBoundary>{children}</ErrorBoundary>
    </StrictMode>
  );
}
