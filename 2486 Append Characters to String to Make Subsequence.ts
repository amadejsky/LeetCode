function appendCharacters(s: string, t: string): number {
    let tIndex = 0;
    const tLength = t.length;

    for (let i = 0; i < s.length; i++) {
        if (tIndex < tLength && s[i] === t[tIndex]) {
            tIndex++;
        }
    }
    return tLength - tIndex;
}