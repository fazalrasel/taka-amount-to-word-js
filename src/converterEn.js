const numbers = require('./numbers').en;

const converter = (n) => {
    let words = [];

    const core = 10000000;

    if (n >= core * 100) {
        let coreLeftOver = parseInt(n / (core));
        words = words.concat(converter(coreLeftOver));
        words.push('core');
        n = n - coreLeftOver * core;
    }

    if (n >= core) { // more then core
        let ref = parseInt((n / core));
        let string = numbers[ref];
        words.push(string, 'core');
        n = n - ref * core;
    }

    const lac = 100000;
    if (n >= lac) { // more then lac
        let ref = parseInt(n / lac);
        let string = numbers[ref];
        words.push(string, 'lac');
        n = n - ref * lac;
    }

    const thousand = 1000;
    if (n >= thousand) { // more then thousand
        let ref = parseInt(n / thousand);
        let string = numbers[ref];
        words.push(string, 'thousand');
        n = n - ref * thousand;
    }

    const hundred = 100;
    if (n >= hundred) { // more then hundred
        let ref = parseInt(n / hundred);
        let string = numbers[ref];
        words.push(string, 'hundred');
        n = n - ref * hundred;
    }

    if (n > 0) {
        words.push(numbers[n])
    }

    return words;
};

module.exports = (n, suffix) => {
    if (typeof n === 'string') {
        throw new Error('String is not allowed.');
    }

    if (n < 0) {
        throw new Error('Amount Is Less then Zero.');
    }

    if (n > Number.MAX_SAFE_INTEGER) {
        throw new Error(`Greater than ${Number.MAX_SAFE_INTEGER} is not allowed.`);
    }

    if (n === 0) {
        return 'Zero Taka Only';
    }

    let numberStringArray = n.toString().split('.');

    let words = converter(parseInt(numberStringArray[0]));

    if (numberStringArray[1]) {
        let fraction = n.toString().split('.').pop();
        words.push('point');
        for (let s of fraction) {
            words.push(numbers[s]);
        }
    }

    if (suffix) {
        words.push('taka', 'only');
    }

    // Capitalizing first character
    words[0] = words[0].charAt(0).toUpperCase() + words[0].substring(1);
    return words.join(' ');
};
