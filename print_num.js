
function print(num){
    if(num==0)
        return 0;
    else{
        console.log(num);
        print(num-1);
    }
}

print(3);