module.exports = function reverse (n) {
    const absoluteNum = Math.abs(n);
    const strOfnumber = absoluteNum.toString();
    return +strOfnumber.split('').reverse().join('');
}
