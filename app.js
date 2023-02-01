const pwEl = document.getElementById('pw')
const copyEl = document.getElementById('copy')
const lengthEl = document.getElementById('length')
const upperEl = document.getElementById('upper')
const lowerEl = document.getElementById('lower')
const numberEl = document.getElementById('number')
const symbolEl = document.getElementById('symbol')
const generateEl = document.getElementById('generate')

const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowercase = 'abcdefghijklmnopqrstuvwxyz'
const numbers = '0123456789'
const symbols = '!"#$%^&*()_+='

function getUppercase() {
    return uppercase[Math.floor(Math.random() * uppercase.length)]
}

function getLowercase() {
    return lowercase[Math.floor(Math.random() * lowercase.length)]
}

function getNumbers() {
    return numbers[Math.floor(Math.random() * numbers.length)]
}

function getSymbols() {
    return symbols[Math.floor(Math.random() * symbols.length)]
}

generateEl.addEventListener('click', passwordGenerate)

function passwordGenerate() {
    const length = lengthEl.value
    let password = ''

    if (upperEl.checked) {
        password += getUppercase()
    }

    if (lowerEl.checked) {
        password += getLowercase()
    }

    if (numberEl.checked) {
        password += getNumbers()
    }

    if (symbolEl.checked) {
        password += getSymbols()
    }

    for (let i = password.length; i < length; i++) {
        const x = generateX()
        password += x
    }

    pwEl.value = password
}

function generateX() {
    let arr = []

    if (upperEl.checked) {
        arr.push(getUppercase())
    }

    if (lowerEl.checked) {
        arr.push(getLowercase())
    }

    if (numberEl.checked) {
        arr.push(getNumbers())
    }

    if (symbolEl.checked) {
        arr.push(getSymbols())
    }

    if (arr.length === 0) {
        return ''
    }
    return arr[Math.floor(Math.random() * arr.length)]

}

copyEl.addEventListener('click', () => {
    let text = document.getElementById('pw')

    text.select()

    navigator.clipboard.writeText(text.value)

    alert("Copied the text: " + text.value)
})