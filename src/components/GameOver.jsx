export default function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner} Won 🥳</p>}
      {!winner && <p>it's a draw 🤦‍♂️</p>}
      <button onClick={onRestart}>Rematch</button>
    </div>
  );
}
