interface Props {
  items: Array<{id: string, text: string, checked: boolean }>;
  onChange: (id: string, checked: boolean) => void;
}
export default function MultiSelect({
  items,
  onChange,
}: Props) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <label>
            <input type="checkbox" checked={item.checked} onChange={(e) => onChange(item.id, e.currentTarget.checked)} />
              {item.text}
          </label>
        </li>
      ))}
    </ul>
  );
}
