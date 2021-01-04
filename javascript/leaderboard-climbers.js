
// Sort Leaderboard based on score
function leaderboardSort(leaderboard, changes) {
  names = [];
  nums = [];
  for(let i = 0; i < changes.length; i++) {
      // Split names and numbers
      names[i] = changes[i].split(" ")[0];
      nums[i] = changes[i].split(" ")[1];
      index = leaderboard.indexOf(names[i]); //Index of name in original array
      leaderboard.splice(index,1); // Remove name from the array
      leaderboard.splice(index - Number(nums[i]),0,names[i]); // Add it to its new place
  }
  delete names;
  delete nums;
  return leaderboard;
}