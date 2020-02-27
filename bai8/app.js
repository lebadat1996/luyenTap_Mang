let a = [12, 4, 8, 10, 11, 2, 6, 16, 7, 9];
console.log(a);
let count;
for (let i = 0; i < a.length-1; i++) {
    for (let j =i+1 ; j < a.length; j++) {
        if (a[i] < a[j]) {
            count = a[i];
            a[i] = a[j];
            a[j] = count;
        }
    }
}
console.log(a);
