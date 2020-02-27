let a = [12, 4, 8, 10, 11, 2, 6, 16, 7, 9];
console.log(a);
let max = a[0];

for (i = 0; i < a.length; i++) {
    if(max<a[i]){
        max=a[i];
        console.log( "max="+ a[i] + " index="+ i);
    }
}
