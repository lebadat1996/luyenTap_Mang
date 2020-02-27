let a = [1, 4, 8, 10, 22, 2, 6, 16, 7, 9];
console.log(a);
let max = a[0];
let sum = 0;
let i,tb ;
for ( i = 0; i < a.length; i++) {
    if (max<a[i]){
        max = a[i];
    }
}
console.log("Gia tri lon nhat " + max);

for (i=0; i<a.length; i++){
    sum +=a[i];
}
    tb = sum/(a.length)
console.log("tong cac gia tri trong mang la: "+ sum);
console.log("TRung binh cac gia tri trong mang la: "+ tb);

