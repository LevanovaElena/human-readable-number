module.exports = function toReadable(number) {
    let arrayOfstringNumber = new Map([
        [0, 'zero'], [1, 'one'], [2, 'two'], [3, 'three'], [4, 'four'], [5, 'five'], [6, 'six'], [7, 'seven'], [8, 'eight'], [9, 'nine'], [10, 'ten'],
        [11, 'eleven'], [12, 'twelve'], [13, 'thirteen'], [14, 'fourteen'], [15, 'fifteen'], [16, 'sixteen'], [17, 'seventeen'], [18, 'eighteen'], [19, 'nineteen'],
        [20, 'twenty'], [30, 'thirty'], [40, 'forty'], [50, 'fifty'], [60, 'sixty'], [70, 'seventy'], [80, 'eighty'], [90, 'ninety'],
        [100, 'hundred'], [1000, 'thousand']
    ]);
    let result = '';
    if (number / 10 < 2) result = arrayOfstringNumber.get(number);//>10 &&<20
    else if (number / 10 < 10) {
        result = arrayOfstringNumber.get(Math.trunc(number / 10) * 10);
        if (number % 10 !== 0)
            result = result + ' ' + arrayOfstringNumber.get(number % 10);
    }
    else {
        let hundred = Math.trunc(number / 100) * 100;
        result = arrayOfstringNumber.get(Math.trunc(number / 100)) + ' ' + arrayOfstringNumber.get(100);
        number = number - hundred;
        if (number !== 0) {
            if (number / 10 < 2) result = result + ' ' + arrayOfstringNumber.get(number);//>10 &&<20
            else if (number / 10 < 10) {
                result = result + ' ' + arrayOfstringNumber.get(Math.trunc(number / 10) * 10);
                if (number % 10 !== 0)
                    result = result + ' ' + arrayOfstringNumber.get(number % 10);
            }
        }

    }

    return result;
}
