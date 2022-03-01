function solution(number) {
    let list = []
    for (let i = 3; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            list.push(i)
        }
    }
    let sum = list.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
    return sum
}