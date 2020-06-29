// Add border to array of words
function borderArr(arr){

    let newArr=[];
    newArr.push("---------------");
    for(i=0;i<arr.length;i++){
     newArr.push("*"+arr[i],"*")
    }
    newArr.push("---------------");
   return  newArr;
}

console.log(borderArr(["Ram","abc","rathna","sakthi","sar","LM","PV"]))