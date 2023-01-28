function sumOfOddNumbers(n) {
    let sum = 0;
    let y = 1
    for(let i = 1; i <=n; i++) {
        console.log(y);
        sum += y
        y+=2
    }
    console.log(`Sum: ${sum}`);
}
sumOfOddNumbers(5);