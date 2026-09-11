"use client";

import { useState } from "react";

export default function Join() {
  const [name, setName] = useState("");
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Your name"
        className="w-full max-w-xs h-11 rounded-lg bg-neutral-900 border border-neutral-700 px-4 text-sm text-white"
      />
      <p className="text-white mt-4">{name}</p>
    </main>
  );
}
