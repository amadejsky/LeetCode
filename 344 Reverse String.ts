/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    const reversed: string[] = [];
    for(let i=s.length-1; i>=0; i--){
        reversed.push(s[i]);
    }
    for(let i=0; i<s.length;i++){
        s[i] = reversed[i];
    }
    
};