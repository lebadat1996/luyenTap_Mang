let a = [12, 4, 8, 10, 11, 2, 6, 16, 7, 9];
console.log(a);
let dem=0;
for (i = 0; i < a.length; i++) {
    if(a[i]>=10){
        console.log(a[i]);
        dem = dem +1;
    }
}
        alert("So kon hon va bang 10 la: "+dem);
