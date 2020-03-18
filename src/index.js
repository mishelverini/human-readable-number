module.exports = function toReadable(number) {
    let arrNum = (number + '').split('').map(function(element){
        return Number.parseInt(element);
    });
    let arrOne = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let arrTwo = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let arrThree = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let resString = '';

    if (1 == arrNum.length) {
        resString = arrOne[number];
    }
    if (2 == arrNum.length && 20 > number) {
        resString = arrTwo[arrNum[arrNum.length - 1]];
    }
    if (2 == arrNum.length && 20 <= number && 100 > number) {
        if (arrNum[arrNum.length - 1] == 0) {
            resString = arrThree[arrNum[0]];
        } else {
            resString = arrThree[arrNum[0]] + ' ' + arrOne[arrNum[arrNum.length - 1]];
        }
    }
    if (3 == arrNum.length && 100 <= number && 1000 > number) {
        if (0 == (number % 10)) {
            resString = arrOne[arrNum[0]] + ' ' + 'hundred' + ' ' + arrThree[arrNum[1]];
        }
        if (0 == arrNum[1]) {
            resString = arrOne[arrNum[0]] + ' ' + 'hundred' + ' ' + arrOne[arrNum[arrNum.length - 1]];
        } 
        if (2 <= arrNum[1] && arrNum[arrNum.length - 1] != 0) {
            resString = arrOne[arrNum[0]] + ' ' + 'hundred' + ' ' + arrThree[arrNum[1]] + ' ' + arrOne[arrNum[arrNum.length - 1]];
        } 
        if (1 == arrNum[1]) {
            resString = arrOne[arrNum[0]] + ' ' + 'hundred' + ' ' + arrTwo[arrNum[arrNum.length - 1]];
        }
        if (0 == (number % 100)) {
            resString = arrOne[arrNum[0]] + ' ' + 'hundred';
        }
    }

    return resString;
}
