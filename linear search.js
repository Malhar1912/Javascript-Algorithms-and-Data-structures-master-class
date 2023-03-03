function search(arr,val){
    for(var i=0;i<arr.length;i++){
        if (arr[i]===val){
            return i;
        }
    }
    console.log("value not present in given array");
}