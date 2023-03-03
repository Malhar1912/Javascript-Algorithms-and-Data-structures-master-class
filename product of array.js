function productofarray(arr){
    if(arr.length===0){
        return 1;
    }    
    return arr[0]*productofarray(arr.slice(1));
}