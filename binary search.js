function binarySearch(arr,val){
    let left=0;
    let right=arr.length-1;
    while(left<=right){
        let middle = Math.floor((left+right)/2);
        let currentelement = arr[middle];
        if(arr[middle]<val){
            left=middle+1;
        }
        else if(arr[middle]>val){
            right=middle-1;
        }
        else{
            return middle;
        }
        return -1;
    }
  
}