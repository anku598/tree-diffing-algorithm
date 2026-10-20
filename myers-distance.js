// Code block B: Myers, length of the shortest edit script (Scene 5)
function myersDistance(a, b) {
  const n = a.length, m = b.length;
  const v = { 1: 0 }; // v[k] = furthest x reached on diagonal k (k = x - y)

  for (let d = 0; d <= n + m; d++) {          // d = coins spent so far
    for (let k = -d; k <= d; k += 2) {        // every diagonal reachable with d coins
      const goDown = k === -d || (k !== d && v[k - 1] < v[k + 1]);
      let x = goDown ? v[k + 1] : v[k - 1] + 1; // down = insert, right = delete
      let y = x - k;

      while (x < n && y < m && a[x] === b[y]) { x++; y++; } // free highway ride

      v[k] = x;
      if (x >= n && y >= m) return d;         // reached the finish
    }
  }
}

if (require.main === module) {
  const { oldDeps, newDeps } = require('./lcs-diff');
  console.log(myersDistance(oldDeps, newDeps)); // 2
}

module.exports = { myersDistance };
