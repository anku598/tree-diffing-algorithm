// Scene 4.2 and 5.9: 10,000-line file, one changed line.
// Your numbers will differ a little, so say "about" in the video.
const { lcsDiff } = require('./lcs-diff');
const { myersDistance } = require('./myers-distance');
// Run with: node --max-old-space-size=4096 benchmark.js  (the table needs about 100 million cells)

const N = 10000;
const oldFile = Array.from({ length: N }, (_, i) => `line ${i}`);
const newFile = oldFile.slice();
newFile[N / 2] = 'line CHANGED';

let t = process.hrtime.bigint();
const lcsEdits = lcsDiff(oldFile, newFile).filter(l => l[0] !== ' ').length;
const lcsMs = Number(process.hrtime.bigint() - t) / 1e6;
console.log(`LCS table: edits = ${lcsEdits}, ${lcsMs.toFixed(0)} ms`);

t = process.hrtime.bigint();
const d = myersDistance(oldFile, newFile);
const myersMs = Number(process.hrtime.bigint() - t) / 1e6;
console.log(`Myers:     edits = ${d}, ${myersMs.toFixed(1)} ms`);
