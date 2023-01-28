function loadingBar(num) {

    let arrLoading = [".", ".", ".", ".", ".", ".", ".", ".", ".", "."]
    
    let steps = num / 10;
    
    for (let i = 0; i < steps; i++) {
        if (num == 100) {
            break;
        }
        arrLoading[i] = "%"
        
    }
    if(num != 100){
        console.log(`${num}% [${arrLoading.join("")}]`);
    console.log("Still loading...");
    } else {
        console.log("100% Complete!");
        console.log(`[${arrLoading.join("")}]`);
    }
}

loadingBar(30);
loadingBar(50);
loadingBar(100);

/*
30    30% [%%%.......]
        Still loading...

50	   50% [%%%%%.....]
       Still loading...
100	    100% Complete!
        [%%%%%%%%%%]
        **/
