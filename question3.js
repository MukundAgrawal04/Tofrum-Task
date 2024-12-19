function coinChange(T, testCases) {
    const results = []; 

    for (let t = 0; t < T; t++) {
        const { n, target, coins } = testCases[t];
        const dp = Array(target + 1).fill(0); 
        dp[0] = 1; 
        for (const coin of coins) {
            for (let amount = coin; amount <= target; amount++) {
                dp[amount] += dp[amount - coin];
            }
        }

        results.push(dp[target]);
    }

    return results;
}

const T = 3; 
const testCases = [
    { n: 3, target: 13, coins: [5, 2, 4] },
    { n: 3, target: 28, coins: [2, 5, 4] },
    { n: 4, target: 28, coins: [1, 2, 4, 5] },
];

const results = coinChange(T, testCases);
results.forEach((result) => console.log(result)); 