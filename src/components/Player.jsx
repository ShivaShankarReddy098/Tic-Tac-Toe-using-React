import { useState } from "react";
export default function Player({
  initialname,
  symbol,
  isActive,
  onChangeName,
}) {
  const [isPlayerName, setPlayerName] = useState(initialname);
  const [isEditing, setIsEditing] = useState(false);
  function handleEditClick() {
    // setIsEditing(isEditing ? false : true);
    // setIsEditing(!isEditing);
    setIsEditing((editing) => !editing); //react recomonded this 👌
    if (isEditing) {
      onChangeName(symbol, isPlayerName);
    }
  }
  function handlechange(event) {
    setPlayerName(event.target.value);
  }
  let playerName = <span className="player-name">{isPlayerName}</span>;
  let button = "Edit";
  if (isEditing) {
    playerName = (
      <input
        type="text"
        required
        value={isPlayerName}
        onChange={handlechange}
      />
    );
    // button = "Save";
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "save" : "Edit"}</button>
    </li>
  );
}
