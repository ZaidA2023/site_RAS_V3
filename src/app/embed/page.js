// /app/embed/page.js
"use client";

export const dynamic = "force-dynamic";

import { useSearchParams } from "next/navigation";
import Navbar from "../components/Navbar";
import React, { Suspense } from "react";

export default function Embed() {
  const searchParams = useSearchParams();
  const source = searchParams.get("source");

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <Navbar scrollSet={false} opacitySet={false} inverse={true} />
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
      </div>
    </Suspense>
  );
}
