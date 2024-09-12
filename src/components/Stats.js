export default function Stats({ items }) {
  const numItems = items.length;
  const packedItems = items.filter((items) => items.packed).length;
  const percentage = Math.round((packedItems / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {numItems === 0
          ? "Start adding some items to your list."
          : percentage === 100
            ? "You got everything! Ready to go. ✈️"
            : `You have ${numItems} in your list and you already packed packed ${packedItems} (${percentage}%)`}
      </em>
    </footer>
  );
}
