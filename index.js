// Code your solution in this file!
const returnFirstTwoDrivers = function(namesOfDrivers) {
    let firstTwoDrivers = namesOfDrivers.slice(0, 2);
    return firstTwoDrivers;
}

const returnLastTwoDrivers = function(namesOfDrivers) {
    let lastTwoDrivers = namesOfDrivers.slice(namesOfDrivers.length - 2, namesOfDrivers.length);
    return lastTwoDrivers;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
    return function (fare){
        return integer * fare;
    }
}

const fareDoubler = function(fare) {
    return fare * 2;
}

const fareTripler = function(fare) {
    return fare * 3;
}

function selectDifferentDrivers(namesOfDrivers, twoDrivers) {
    return twoDrivers(namesOfDrivers);
}