/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    return s.replace('IV','IIII').replace('IX','VIIII').replace('XL','XXXX').replace('XC','LXXXX').replace('CD','CCCC').replace('CM','DCCCC').split('').map((x) => {
        return x === 'M' ? 1000 : 
        x === 'D' ? 500 :
        x === 'C' ? 100 :
        x === 'L' ? 50 :
        x === 'X' ? 10 :
        x === 'V' ? 5 :
        x === 'I' ? 1 : 0 
    }).reduce((a,b) => a+b, 0)
};