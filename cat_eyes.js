
function catEyes(cats){
    if(cats==0)
        return 0;
    else{
        return 2 + catEyes(cats-1);
    }
}

console.log(catEyes(9));