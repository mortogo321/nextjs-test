export default function FruitList() {
  const fruits = ["Apple", "Banana", "Orange"];

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">2. Fruit List</h2>
      <ul className="list-disc list-inside">
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}
