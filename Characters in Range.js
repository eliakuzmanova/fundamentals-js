function charInRange(one,two) {

    let first = Math.min(one.charCodeAt(0), two.charCodeAt(0));
    let second = Math.max(one.charCodeAt(0), two.charCodeAt(0));
    let allChrarsArr = [];
    
        for (let i = first + 1; i < second; i++) {
            allChrarsArr.push(String.fromCharCode(i));
        }
        console.log(allChrarsArr.join(" "));
}
// charInRange('a',
// 'd'
// );
charInRange('#',
':'
);
// charInRange('C',
// '#'
// );