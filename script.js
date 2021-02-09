// leap year
var leap = function (num) {
    if (num % 400 === 0)
        return true;
    else if (num % 100 === 0)
        return false;
    else if (num % 4 === 0)
        return true;
    return false;
};
console.log(leap(400));
//function to reverse number
var reverseString = function (str) {
    return str.split('').reverse().join('');
};
//function to reverse number without predefined functions
var reverseString2 = function (str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
};
console.log(reverseString('abcd'));
console.log(reverseString2('efgh'));
