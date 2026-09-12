"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Join({ params }: { params: { code: string } }) {
  const [name, setName] = useState("");
  const router = useRouter();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Your name"
        className="w-full max-w-xs h-11 rounded-lg bg-neutral-900 border border-neutral-700 px-4 text-sm text-white"
      />
      <button
        onClick={() => router.push(`/room/${params.code}?name=${name}`)}
        className="w-full max-w-xs h-11 rounded-lg bg-white text-black text-sm font-medium mt-4"
      >
        Join
      </button>
    </main>
  );
}
