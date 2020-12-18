
function sumInt(num){
    if(num<10)
        return num;
    else
        return num%10 + sumInt(Math.floor(num/10));
}

//console.log(27/10);
console.log(sumInt(7743));