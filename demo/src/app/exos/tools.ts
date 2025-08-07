export function randInt(max: number): number {
    return Math.floor(Math.random() * max);
}

export function randIntInRange(min: number, max: number): number {
    return Math.floor(Math.random() * (max-min+1) + min);
}