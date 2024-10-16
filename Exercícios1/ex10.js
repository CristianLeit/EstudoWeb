function numDiv3(n) {
    const divide = n % 3 == 0 ? n + ' é divisivel por 3' : n + ' não é divisivel por 3'
    return divide
}
console.log(numDiv3(5));
console.log(numDiv3(6));