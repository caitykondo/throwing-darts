// 0 points: radius above 10
// 5 points: radius between 5 and 10 inclusive
// 10 points: radius less than 5


function scoreThrows(array) {
  points = 0;
  array.forEach((radius, index, array)=>{
    if(radius > 10 ){
      points += 0;
    }else if(radius >= 5 && radius <= 10){
       points += 5;
    }else if (radius < 5){
      points += 10;
    }
  });
  return points;
}

let r1 = [1, 5, 11]; //15
let r2 = [15, 20, 30]; //0
let r3 = [1, 2, 3, 4]; //140

console.log(scoreThrows(r1));