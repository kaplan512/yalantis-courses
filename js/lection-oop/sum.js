const sum = (...args) => [...args].reduce((a, b) => a + b, 0);

console.log(sum(1, 4, 5, 7))