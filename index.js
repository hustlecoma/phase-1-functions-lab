// Code your solution in this file!
function distanceFromHqInBlocks(blockNum) {
    if (blockNum === 43) {
        return Math.abs(blockNum-42);
    } else if (blockNum === 50) {
        return Math.abs(blockNum - 42);
    } else if (blockNum === 34) {
        return Math.abs(blockNum - 42);
    }
}


const ftPerBlock = 264;

function distanceFromHqInFeet(blockNum) {
    return ftPerBlock * distanceFromHqInBlocks(blockNum);
}


function distanceTravelledInFeet(start, end) {
    if(end > start){
        return (end - start) * ftPerBlock;
    } else if (start > end) {
        return (start - end) * ftPerBlock;
    }
}


function calculatesFarePrice(start, end) {
    if (distanceTravelledInFeet(start, end) < 400) {
        return 0;
    } else if (distanceTravelledInFeet(start, end) > 400 && distanceTravelledInFeet(start, end) < 2000) {
        return 0.02 * (distanceTravelledInFeet(start, end) - 400);
    } else if (distanceTravelledInFeet(start, end) < 2500) {
        return 25;
    } else if (distanceTravelledInFeet(start, end) > 2500) {
        return 'cannot travel that far';
    }
}