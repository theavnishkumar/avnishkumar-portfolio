"use client";

import Snowfall from "react-snowfall";

export default function SnowfallClient() {
  return (
    <Snowfall
      color="white"
      snowflakeCount={200}
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        zIndex: 999,
      }}
    />
  );
}
