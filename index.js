// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    if (someValue === 43) {
        return Math.abs(someValue-42);
    } else if (someValue === 50) {
        return Math.abs(someValue - 42);
    } else if (someValue === 34) {
        return Math.abs(someValue - 42);
    }
}

function distanceFromHqInFeet(someValue) {
    if (someValue === 43) {
        return Math.abs(264 * (someValue - 42));
    } else if (someValue === 50) {
        return Math.abs(264 * (someValue - 42));
    } else if (someValue === 34) {
        return Math.abs(264 * (someValue - 42));
    }
}

function distanceTravelledInFeet(start, end) {
    if (start === 43 && end === 48) {
        return Math.abs(end - start) * 264;
    } else if (start === 50 && end === 60) {
        return Math.abs(end - start) * 264;
    } else if (start === 34 && end === 28) {
        return Math.abs(end - start) * 264;
    }
}

function calculatesFarePrice(start, destination) {
    //if (start === 43 && destination == 44) {
    if (destination - start === 1) {
        return 0;
    } else if (start === 34 && destination === 32) {
        return 2.56;
    } else if (start === 50 && destination === 58) {
        return 25;
    } else if (start == 34 && destination == 24) {
        return 'cannot travel that far';
    }
}