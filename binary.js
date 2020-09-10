'use strict'

const testBinary = [0b0011, 0b0010, 0b0001, 0b0000, 0b1100, 0b1000, 0b0100, 0b0000]

const getNow = val => val & 0b0011 // получить текущее состояние
const getNext = val => (val & 0b1100) >> 2 // получить ожидаемое состояние

const setNext = (now, next) => {
    now = now >> 2
    return now | (next << 2)
}

const logBinArr = binArr => binArr.forEach(bin => {
    console.log(`now: ${getNow(bin)}`)
    console.log(`next: ${getNext(bin)}`)
    console.log('----')
})

const countActive = arr => {
    let res = 0b0000
    for(let i = 0; i < 8; i++) {
        if (getNow(arr[i]) ===  0b0001) { res++ }
    }
    return res
}