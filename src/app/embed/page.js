"use client";
import React, { Suspense } from "react";
import Navbar from "../components/Navbar";
import dynamic from "next/dynamic";

const EmbedContent = dynamic(() => import("./EmbedContent"), {
  suspense: true,
});

export default function Embed() {
  return (
    <div>
      <Navbar scrollSet={false} opacitySet={false} inverse={true} />
      <Suspense fallback={<div>Loading...</div>}>
        <EmbedContent />
      </Suspense>
    </div>
  );
}
