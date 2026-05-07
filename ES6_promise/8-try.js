// Returns the result of dividing numerator by denominator, throws an error if denominator is 0
export default function divideFunction(numerator, denominator) {
    if (!denominator)
        throw new Error('cannot divide by 0');
    return numerator/denominator;
}
