function longestPalindrome(s: string): number {
     const countMap: { [key: string]: number } = {};
    
    for (const char of s) {
        if (countMap[char]) {
            countMap[char]++;
        } else {
            countMap[char] = 1;
        }
    }

    let length = 0;
    let oddFound = false;
    
    for (const count of Object.values(countMap)) {
        if (count % 2 === 0) {
            length += count;
        } else {
            length += count - 1;
            oddFound = true;
        }
    }
    if (oddFound) {
        length += 1;
    }
    
    return length; 
};