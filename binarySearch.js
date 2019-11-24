const binarySearch = (array, target) => {
  let downLimit = 0;
  let upLimit = array.length - 1;
  let answer =[];
  while(downLimit <= upLimit) {
    let middleIndex = Math.floor((downLimit + upLimit) / 2);
    if(target === array[middleIndex]) {
      console.log("Target founded index is => " + middleIndex);
      answer.push(true);
      answer.push(middleIndex);
      return answer;
    }
    if(target > array[middleIndex]) {
      console.log("Searching the right side of Array")
      downLimit = middleIndex + 1;
    }
    if(target < array[middleIndex]) {
      console.log("Searching the left side of array")
      upLimit = middleIndex - 1;
    }
    else {
      console.log("Not Found this loop iteration. Looping another iteration.")
    }
  }
  console.log("Target value not found in array");
  answer.push(false);
  return answer;
}

var data = [1,2,3,4,5,6,7,8,9,10];//<-Input
var target = 6;
var bsOutput = binarySearch(data, target);

if(bsOutput[0] === true){
  console.log('Value=> '+ data[bsOutput[1]]+ ' Index position: ' + bsOutput[1]);
}else{
  console.log(bsOutput);
}
