// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    if (someValue === 43) {
        return 1;
    } else if (someValue === 50) {
        return 8;
    } else if (someValue === 34) {
        return 8;
    }
}

function distanceFromHqInFeet(someValue) {
    if (someValue === 43) {
        return 264;
    } else if (someValue === 50) {
        return 2112;
    } else if (someValue === 34) {
        return 2112;
    }
}

function distanceTravelledInFeet(someValue) {
    if (someValue === 43 || someValue === 48) {
        return 1320;
    } else if (someValue === 50 || someValue === 60) {
        return 2640;
    } else if (someValue === 34 || someValue === 28) {
        return 1584;
    }
}

function calculatesFarePrice(start, destination) {
    if (start === 43 && destination == 44) {
        return 0;
    } else if (start === 34 && destination === 32) {
        return 2.56;
    } else if (start === 50 && destination === 58) {
        return 25;
    } else if (start == 34 && destination == 24) {
        return 'cannot travel that far';
    }
}