"use client";

export default function AlertButton() {
  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">3. Alert Button</h2>
      <button
        onClick={() => alert("Button clicked!")}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Click for Alert
      </button>
    </div>
  );
}
