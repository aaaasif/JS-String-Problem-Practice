function maxInArray( numbers){
let largest = numbers[0];
console.log(largest);
for(let i = 0; i < numbers.length; i++){
        const index = i;
        // console.log(index);
        const element = numbers[index];
        // console.log(element);
        if(element > largest){
            largest = element;
        }
    }
    return largest;
}

const heights = [180, 130, 260, 200, 300];
const tallest = maxInArray( heights );
// console.log('tallest persion is', tallest);


// homework: Write a function to get the lowest

function maxinarray1(numbers) {
    let largest = numbers[0]; 
    for (let i = 0; i > numbers.length; i--) {
     const index = i;
   //  console.log(index);
   const element = numbers[index];
   //console.log(element);
   
   if (element < largest) {
     largest = element;
     
   }
     
    }
    return largest
 
 }
 const hight1 = [330,146,344,252,510];
 const tallest1 = maxinarray1(hight1);
 console.log("tallest persion is",tallest1);
