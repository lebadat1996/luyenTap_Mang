let array = [22,34,44,33,21,1,5,9,54,10];
console.log (array);
let v= parseInt(document.getElementById("number1").value);
function deletes() {
    for(let i=0;i<array.length;i++){
        if(v===array[i]){
            array.splice(i,1);
        }
    } console.log(array);
}

