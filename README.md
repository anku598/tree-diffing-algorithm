# How Git and React Know What Changed: code from the video

Code for Tree Diffing Algorithm of **The Senior Dev Diaries** (Algorithms for Frontend Engineers): diff algorithms, from a `package.json` pull request to React keys.

| File                        | Video scene | What it does                                                                       |
| --------------------------- | ----------- | ---------------------------------------------------------------------------------- |
| `lcs-diff.js`               | 3           | Diff witLongest Common Subsequence table. Prints the `package.json` diff.          |
| `myers-distance.js`         | 5           | Myers' algorithm: the length of the shortest edit script (prints 2).               |
| `benchmark.js`              | 4 and 5     | 10,000-line file, one changed line: LCS table vs Myers.                            |
| `react-type-change-bug.jsx` | 7.4         | Rule 1: changing the element type throws away state, plus the fix.                 |
| `react-index-key-bug.jsx`   | 7.6         | Rule 2: `key={index}` puts a note on the wrong card. Change it to `key={card.id}`. |

## Run it

```bash
node lcs-diff.js          # - "moment" / + "dayjs", the other 3 lines are the LCS
node myers-distance.js    # 2
node --max-old-space-size=4096 benchmark.js
```

The benchmark needs about 100 million table cells for the LCS version, so give Node extra memory. Your timings will differ: on one run the LCS table took about 2.5 to 3.5 s, and Myers (distance only) about 1 ms.

The two React files are not runnable alone. Drop `Column` into a React 18 app (for example a Vite React template) and add a tiny `CardSearch` component for the first file.

## Notes

- Myers' algorithm: Eugene Myers, "An O(ND) Difference Algorithm and Its Variations", 1986.
- Git's default diff is Myers. Try `git diff --histogram` when a moved function makes the diff messy.
- Diagrams for this episode are in the companion gist (see the video description).
