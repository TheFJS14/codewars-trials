function getCount(str) {
    let vowels = str.match(/[aeiou]/gi)
    if (vowels !== null) {
        return vowels.length
    } else {
        return 0
    }
}