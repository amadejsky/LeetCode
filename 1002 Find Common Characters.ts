function commonChars(words: string[]): string[] {
    if (words.length === 0) return [];

    let commonFreq: { [key: string]: number } = {};
    for (const char of words[0]) {
        commonFreq[char] = (commonFreq[char] || 0) + 1;
    }
    for (let i = 1; i < words.length; i++) {
        const currentFreq: { [key: string]: number } = {};
        for (const char of words[i]) {
            currentFreq[char] = (currentFreq[char] || 0) + 1;
        }
        for (const char in commonFreq) {
            if (currentFreq[char]) {
                commonFreq[char] = Math.min(commonFreq[char], currentFreq[char]);
            } else {
                delete commonFreq[char];
            }
        }
    }
    const result: string[] = [];
    for (const char in commonFreq) {
        for (let i = 0; i < commonFreq[char]; i++) {
            result.push(char);
        }
    }
    
    return result;
}
