function greater(x, a, b, c){
    let max = (a > b && a < x)? a: (b > c && b < x) ? b : (c < x) ? c : b
    if(max > x){
        return x - max;
    }
    return max == a ? 'A' : max == b ? 'B' : 'C';
}

console.log(`5\n1 2 3\noutput: ${greater(5,1,2,3)}\n`);
console.log(`10\n11 12 9\noutput: ${greater(10,11,12,9)}\n`);
console.log(`20\n23 21 22\noutput: ${greater(20,23,21,22)}`);

a > b ? a : b;