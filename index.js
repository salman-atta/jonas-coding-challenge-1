

let  calcAverage = (a,b,c)=>   (a+b+c) /3

let dolphineavg = calcAverage(85,54,41);
let koalaavg= calcAverage(23,34,27);
console.log(dolphineavg,koalaavg)

let checkwinner = function (dolphineavg,koalaavg){
  if(dolphineavg>koalaavg){
    console.log(`Dolphin wins (${dolphineavg} vs ${koalaavg})`)
  }else{
    console.log(`Koala wins (${dolphineavg} vs ${koalaavg})`)
  }
  return checkwinner;
}
checkwinner(dolphineavg,koalaavg)
// console.log(checkwinner);