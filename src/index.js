module.exports = function toReadable (number) {
    const numberStr = number.toString()
    let result = []

    const firstDigits = [
        'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
        'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ]

    const secondDigits = [
        '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ]

    if (numberStr.length === 3) {
        result.push(firstDigits[+numberStr[0]] + ' hundred')
    }

    if (numberStr.length > 1) {
        let i = numberStr[numberStr.length - 2]

        if (i === '1') {
            result.push(firstDigits[number % 100])
        } else if (i > 0) {
            result.push(secondDigits[+i])
        }
    }

    if (
        number === 0 ||
        (numberStr[numberStr.length - 2] !== '1' && numberStr[numberStr.length - 1] !== '0')
    ) {
        result.push(firstDigits[numberStr[numberStr.length - 1]])
    }

    return result.join(' ').trim()
}
