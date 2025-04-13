"use client";

import { useSearchParams } from "next/navigation";

export default function EmbedContent() {
  const searchParams = useSearchParams();
  const source = searchParams.get("source");

  return (
    <iframe
      src={source}
      style={{
        width: "100%",
        height: "200vh",
        border: "none",
        padding: "0",
        position: "absolute",
        marginTop: -35,
      }}
    />
  );
}
