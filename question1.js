function lengthOfLongestSubstring(s) {
    let maxLength = 0; 
    let currentSubstring = ""; 

    for (let char of s) {
        if (currentSubstring.includes(char)) {
            currentSubstring = currentSubstring.slice(currentSubstring.indexOf(char) + 1);
        }
        currentSubstring += char;
        maxLength = Math.max(maxLength, currentSubstring.length);
    }

    return maxLength;
}

// Test cases
console.log(lengthOfLongestSubstring("ABCBC")); // Output: 3
console.log(lengthOfLongestSubstring("AAA"));   // Output: 1
