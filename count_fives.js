
function countFive(num){
    if(num<10){
        if(num==5)
            return 1;
        else
            return 0;
    }
    else{
        if(num%10==5)
            return 1 + countFive(Math.floor(num/10));
        else
            return 0 + countFive(Math.floor(num/10));
    }
}

console.log(countFive(51255525));