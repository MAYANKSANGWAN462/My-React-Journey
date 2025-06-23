

export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {turn.player} selected {turn.square.row},{turn.square.col} {/* this is hte message which i want to show */}
        </li>
      ))}
      {/*when you want to transform the array of objects turns to the list element (li) we are using the map here */}
    </ol>
  );
}
