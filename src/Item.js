
export default function Item({ item, onDeleteItems, onToggle }) {
  return (
    <li>
      <input type="checkbox" onClick={() => onToggle(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
}
