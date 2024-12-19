function findMaxPathSum(T, testCases) {
    const results = []; // To store results for each test case

    for (let t = 0; t < T; t++) {
        const { n, m, matrix } = testCases[t];
        const dp = Array.from({ length: n }, () => Array(m).fill(0)); // DP table

        // Initialize the first row
        for (let j = 0; j < m; j++) {
            dp[0][j] = matrix[0][j];
        }

        // Fill the DP table
        for (let i = 1; i < n; i++) {
            for (let j = 0; j < m; j++) {
                const down = dp[i - 1][j];
                const diagLeft = j > 0 ? dp[i - 1][j - 1] : 0;
                const diagRight = j < m - 1 ? dp[i - 1][j + 1] : 0;

                // Current cell value + maximum from above
                dp[i][j] = matrix[i][j] + Math.max(down, diagLeft, diagRight);
            }
        }

        // Find the maximum value in the last row
        results.push(Math.max(...dp[n - 1]));
    }

    return results;
}

// Input example
const T = 2; // Number of test cases
const testCases = [
    {
        n: 4,
        m: 6,
        matrix: [
            [12, 22, 5, 0, 20, 18],
            [0, 2, 5, 25, 18, 17],
            [12, 10, 5, 4, 2, 1],
            [3, 8, 2, 20, 10, 8],
        ],
    },
    {
        n: 2,
        m: 2,
        matrix: [
            [3, 8],
            [7, 3],
        ],
    },
];

// Output results
const results = findMaxPathSum(T, testCases);
results.forEach((result) => console.log(result)); // Output: 70, 15
