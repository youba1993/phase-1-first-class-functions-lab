
const returnFirstTwoDrivers = (drivers) => {return drivers.slice(0, 2);};
const returnLastTwoDrivers = (drivers) => {return drivers.slice(-2)};
const selectingDrivers =[returnFirstTwoDrivers,returnLastTwoDrivers];
function createFareMultiplier(number, fareMultiplier){
   return fareMultiplier = ()=>{return number*number};
}
const fareMultipl = createFareMultiplier();
function fareDoubler(fareMultipl){
    return fareMultipl*2;
}
const fareTriple = createFareMultiplier();
function fareTripler(fareTriple){
    return fareTriple*3;
}
function selectDifferentDrivers(drivers, returnDrivers){

    if (returnDrivers === returnFirstTwoDrivers){
       return  returnFirstTwoDrivers(drivers);
    }if (returnDrivers === returnLastTwoDrivers){
      return  returnLastTwoDrivers(drivers);
    }

}