/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x < 2) {
        return x
    }
    for (let i = 0; i <= x; i++) {
        // Since we want sqrt rounded down to nearest integer, we know if the square of i > x, then it must be the previous i-1      which is our rounded down sqrt
        if ((i * i) > x) {
            return i - 1
        }
    }
};