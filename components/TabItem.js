import React from "react";

export default function TabItem({ children, value, index }) {
  return <>{value === index && children}</>;
}
