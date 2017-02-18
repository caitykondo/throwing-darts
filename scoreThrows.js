function scoreThrows(array) {
  let points = 0;
  let lessThan5 = true;
  array.forEach((radius, index, array)=>{
    if(radius > 10 ){
      points += 0;
      lessThan5 = false;
    }else if(radius >= 5 && radius <= 10){
      points += 5;
      lessThan5 = false;
    }else if (radius < 5){
      points += 10;
    }
  });
  if (lessThan5 === true && array.length !== 0){
    points += 100;
  }
  return points;
}

module.exports = scoreThrows;