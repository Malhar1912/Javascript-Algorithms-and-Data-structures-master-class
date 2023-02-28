function arethereduplicates(a){
    let counter={}
    for(var i of a){
        counter[i]=(counter[i]||0)+1;
    }
    for(var key in counter){
        if (counter[key]>1){
            return true;
        }
    }
    return false;
}