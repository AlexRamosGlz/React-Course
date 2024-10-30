export function Stats({ items }) {

    if (!items.length) return (
      <p className="stats">
        <em>Start Adding some items to your packing list 🚀</em>
      </p>
    )
  
    const itemsNum = items.length;
    const numPacked = items.filter(item => item.packed === true).length
    const percentage = Math.floor(numPacked / itemsNum * 100)
  
    return (
      <footer className="stats">
        <em>{percentage === 100 ? 'You  got everything ready' : `You have ${itemsNum} items on tour list, and you already packed ${numPacked} (${percentage}%)`}</em>
      </footer>
    );
  }
  