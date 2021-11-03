const power = (base, exponent) => {
    if(typeof base != 'number'||typeof exponent != 'number') return ('please enter a number! :)')
    if (exponent !== 0) {
        return base * power(base, exponent - 1);
    } else {
        return 1;
    }
}
console.log(power(3,2))