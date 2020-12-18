
function mobileSpeakers(mobile){
    if(mobile==0)
        return 0;
    else{
        if(mobile%2==0)
            return 2 + mobileSpeakers(mobile-1);
        else
            return 1 + mobileSpeakers(mobile-1);
    }
}

console.log(mobileSpeakers(1));