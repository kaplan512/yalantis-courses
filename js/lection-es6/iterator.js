function *endlessIterator(){
    let counter = 0;
    while (true){
        yield counter;
        counter += 1;
        if (counter > 1000000) {
            break
        }
    }
    return counter;
}

const endless = endlessIterator();

function *take(int, func) {
    let counter = 0;
    while (func.next().value <= int){
        yield counter;
        counter += 1;
    }
    return counter;
}

for (let i of take(3, endless)) {
    console.log(i)
};