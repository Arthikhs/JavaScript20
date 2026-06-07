function playGame(foul) {
  if (foul) {
    throw new Error("Red card! Player sent off."); // referee throws red card
  }
  return "Game continues smoothly";
}

try {
  console.log(playGame(true));
} catch (err) {
  console.log("Referee decision:", err.message);
}
