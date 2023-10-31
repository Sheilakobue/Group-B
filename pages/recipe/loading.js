import React from "react";
import { FaSpinner } from "react-icons/fa";

export default function Loading() {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <FaSpinner size="3em" color="#007bff" className="loading-spinner" />
      
    </div>
  );
}
