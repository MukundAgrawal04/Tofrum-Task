function lengthOfLongestSubstring(s) {
    let maxLength = 0; // To store the maximum length
    let currentSubstring = ""; // To store the current substring without repeating characters

    for (let char of s) {
        // If the character already exists in the current substring
        if (currentSubstring.includes(char)) {
            // Remove characters from the start until the duplicate is gone
            currentSubstring = currentSubstring.slice(currentSubstring.indexOf(char) + 1);
        }
        // Add the current character to the substring
        currentSubstring += char;
        // Update the maximum length if the current substring is longer
        maxLength = Math.max(maxLength, currentSubstring.length);
    }

    return maxLength;
}

// Test cases
console.log(lengthOfLongestSubstring("ABCBC")); // Output: 3
console.log(lengthOfLongestSubstring("AAA"));   // Output: 1
