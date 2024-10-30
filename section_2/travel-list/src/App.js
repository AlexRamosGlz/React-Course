import { useState } from "react";
import { Form } from "./components/Form";
import { Logo } from "./components/Logo";
import { PackingList } from "./components/PackingList";
import { Stats } from "./components/Stats";

export default function App() {

  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item])
    console.log(items)
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter(item => item.id !== id))
  }

  function handleToggleItem(id) {
    setItems((items) => items.map(item => item.id === id ? { ...item, packed: !item.packed } : item))
  }

  function handleDeleteItems() {
    setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClick={handleDeleteItems} />
      <Stats items={items} />
    </div>
  );
}

