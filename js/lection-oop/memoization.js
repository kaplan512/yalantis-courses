const memoization = (fn) => {
    let cache = {};
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
console.log(memoizedAdd(2, 4));
console.log(memoizedAdd(4, 2));
console.log(memoizedAdd(4, 3));
console.log(memoizedSum(4, 3));
console.log(memoizedSum(2, 4));
console.log(memoizedSum(4, 2));
console.log(memoizedSum(4, 3));