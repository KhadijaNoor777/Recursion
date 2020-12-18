
function calPowerOf(base, expo){
    if(expo==1)
        return base;
    else{
        return base * calPowerOf(base, expo-1);
    }
}

console.log(calPowerOf(2,5));