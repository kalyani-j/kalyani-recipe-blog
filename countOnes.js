let a = [1,0,1,0,1,0]
let i = 0, counter = 0, oneSeries = 0;

while (i < a.length) {
    if (a[i] === 1)
        counter++;
    else {
        if (counter > 1) {
            oneSeries++;
        }
        counter = 0;
    }
    i++;
}

if (counter > 1) {
    oneSeries++;
}

console.log(oneSeries);