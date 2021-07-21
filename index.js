const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

function returnFirstTwoDrivers() {
    return drivers.slice(0,2); 
}


function returnLastTwoDrivers() {
    return drivers.slice(2); 
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(number){
    return function(fare) {
        return fare * number; 
    
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)



function selectDifferentDrivers(drivers, options) {
    return options(drivers)
}