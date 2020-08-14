export function getFormattedNumber(value: number): string | number {
    if (isNaN(value) || value < 0) {
        return 0;
    }
    if (value < 1000) {
        return value;
    }
    if (value >= 1000 && value < 1000000) {
        return (value / 1000).toFixed(1) + 'k';
    }
    return (value / 1000000).toFixed(1) + 'm';
}


export function isNaturalNumber(item: any): boolean {
    return !isNaN(item) && item > 0;
}
