"use client";

import { useState, useEffect } from "react";

export default function NameForm() {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  useEffect(() => {
    const savedName = localStorage.getItem("submittedName");
    if (savedName) {
      setSubmittedName(savedName);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedName(name);
    localStorage.setItem("submittedName", name);
    setName("");
  };

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">6. Name Form (Persistent)</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="border border-gray-400 rounded px-3 py-2 mr-2 text-black bg-white"
        />
        <button
          type="submit"
          className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
        >
          Submit
        </button>
      </form>
      {submittedName && (
        <p className="text-lg">
          Submitted Name: <strong>{submittedName}</strong>
        </p>
      )}
    </div>
  );
}
