import React, { useState } from "react";
import { Item } from "./Item";

export function PackingList({ items, onDeleteItem, onToggleItem, onClick }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onClick={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>

      <div className="actions" onChange={(e) => setSortBy(e.target.value)}>
        <select value={sortBy}>
          <option value="input">Sort By Input Order</option>
          <option value={"description"}>Sort By description</option>
          <option value={"packed"}>Sort By packed status</option>
        </select>
        <button onClick={onClick}>Clear list</button>
      </div>
    </div>
  );
}
