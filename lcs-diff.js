// Code block A: LCS diff with a table (Scene 3)
function lcsDiff(oldList, newList) {
  const n = oldList.length, m = newList.length;

  // dp[i][j] = how many items oldList[i..] and newList[j..] still share
  const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      dp[i][j] = oldList[i] === newList[j]
        ? dp[i + 1][j + 1] + 1                 // same item: 1 + diagonal
        : Math.max(dp[i + 1][j], dp[i][j + 1]); // different: max(down, right)
    }
  }

  // Walk from the top-left to build the diff
  const diff = [];
  let i = 0, j = 0;
  while (i < n && j < m) {
    if (oldList[i] === newList[j]) { diff.push('  ' + oldList[i]); i++; j++; }
    else if (dp[i + 1][j] >= dp[i][j + 1]) { diff.push('- ' + oldList[i]); i++; }
    else { diff.push('+ ' + newList[j]); j++; }
  }
  while (i < n) diff.push('- ' + oldList[i++]);
  while (j < m) diff.push('+ ' + newList[j++]);
  return diff;
}

const oldDeps = ['"axios": "^1.6.0",', '"moment": "^2.29.4",', '"react": "^18.2.0",', '"zod": "^3.22.4"'];
const newDeps = ['"axios": "^1.6.0",', '"dayjs": "^1.11.10",', '"react": "^18.2.0",', '"zod": "^3.22.4"'];

if (require.main === module) {
  console.log(lcsDiff(oldDeps, newDeps).join('\n'));
  //   "axios": "^1.6.0",
  // - "moment": "^2.29.4",
  // + "dayjs": "^1.11.10",
  //   "react": "^18.2.0",
  //   "zod": "^3.22.4"
}

module.exports = { lcsDiff, oldDeps, newDeps };
