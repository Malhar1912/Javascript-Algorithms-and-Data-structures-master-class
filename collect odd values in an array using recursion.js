function oddvalues(arr){
    let result=[];
    function helper(helperinput){
        if(helperinput.length===0){
            return;
        }
        if(helperinput[0]%2!==0){
            result.push(helperinput[0])
        }
        helper(helperinput.slice(1))
    }
    helper(arr)
    return result;
}