function isNStraightHand(hand: number[], groupSize: number): boolean {
    if (hand.length % groupSize !== 0) {
        return false;
    }
    
    const countMap = new Map<number, number>();
    for (const card of hand) {
        countMap.set(card, (countMap.get(card) || 0) + 1);
    }
    
    const uniqueCards = Array.from(countMap.keys()).sort((a, b) => a - b);
    
    for (const card of uniqueCards) {
        const count = countMap.get(card)!;
        if (count > 0) {
            for (let i = 1; i < groupSize; i++) {
                const nextCard = card + i;
                if (countMap.get(nextCard) === undefined || countMap.get(nextCard)! < count) {
                    return false;
                }
                countMap.set(nextCard, countMap.get(nextCard)! - count);
            }
        }
    }
    
    return true;
}
