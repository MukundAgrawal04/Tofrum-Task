function coinChange(T, testCases) {
    const results = []; // To store results for each test case

    for (let t = 0; t < T; t++) {
        const { n, target, coins } = testCases[t];
        const dp = Array(target + 1).fill(0); // DP table to store combinations
        dp[0] = 1; // Base case: One way to make amount 0 (no coins)

        // For each coin, update combinations for all amounts
        for (const coin of coins) {
            for (let amount = coin; amount <= target; amount++) {
                dp[amount] += dp[amount - coin];
            }
        }

        // Push the result for this test case
        results.push(dp[target]);
    }

    return results;
}

// Input example
const T = 3; // Number of test cases
const testCases = [
    { n: 3, target: 13, coins: [5, 2, 4] },
    { n: 3, target: 28, coins: [2, 5, 4] },
    { n: 4, target: 28, coins: [1, 2, 4, 5] },
];

// Output results
const results = coinChange(T, testCases);
results.forEach((result) => console.log(result)); // Output: 3, 16, 163
