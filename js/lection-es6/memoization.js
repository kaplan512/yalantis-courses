const memoization = (fn) => {
    let cache = new Set();
    return (...args) => {
        let n = args;
        if (n in cache) {
            console.log('взято из кеша');
            return cache[n];
        }
        else {
            console.log('вычислено');
            let result = fn(...args);
            cache[n] = result;
            return result;
        }

    }
}

const sum = (...args) => [...args].reduce((a, b) => a + b, 0);

const multiply = (x, y) =>{return x * y;};

const memoizedSum = memoization(sum);
const memoizedMultmemoizedMult = memoization(multiply);

console.log(memoizedSum(4, 2));
console.log(memoizedSum(2, 4));
console.log(memoizedSum(4, 2));
console.log(memoizedSum(4, 3));
console.log(memoizedMultmemoizedMult(4, 3));
console.log(memoizedMultmemoizedMult(2, 4));
console.log(memoizedMultmemoizedMult(4, 2));
console.log(memoizedMultmemoizedMult(4, 3));