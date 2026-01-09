"use client";

import { useState } from "react";

export default function ClickCounter() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">1. Click Counter</h2>
      <p className="mb-2">Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Click me
      </button>
    </div>
  );
}
