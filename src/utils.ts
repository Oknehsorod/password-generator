export function getRandElement<T>(array: Array<T>): T {
    return array[Math.floor(Math.random() * array.length)];
}