function addAndSubstract(num1,num2,num3) {
    let add = (first,second) => first + second;

    let addResult = add(num1,num2)

    let subsract = third => addResult - third 

    let subsractResult = subsract(num3);
    console.log(subsractResult);
}
addAndSubstract(23,
    6,
    10
    );
addAndSubstract(1,
    17,
    30
    );
addAndSubstract(42,
    58,
    100
    );
