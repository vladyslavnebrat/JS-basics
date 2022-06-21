function getGoalsStat(players) {
  let res = [];
  for (const key in players) {
    res[key] = players[key];
  }
  return res;
}
