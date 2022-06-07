function distanceFromHqInBlocks (location) {
    const numberOfBlocks = location - 42
    if (location > 42) {
        return numberOfBlocks
    } else if (location < 42) {
        let blockBelow = numberOfBlocks * -1
        return blockBelow
    }
}
distanceFromHqInBlocks(43)
distanceFromHqInBlocks(50)
distanceFromHqInBlocks(34)


function distanceFromHqInFeet (location) {
    let blocksTravelled = distanceFromHqInBlocks(location)
    return blocksTravelled * 264
}

function distanceTravelledInFeet(start, destination) {
    let blocksTravelled = destination - start
    const distance = Math.abs(blocksTravelled * 264)
    return distance
}
function calculatesFarePrice(start, destination) {
    let blocksTravelled = destination - start
    const distance = Math.abs(blocksTravelled * 264)
    let price = distance - 400
    const cents = 0.01
    const dollar = 100 * cents
    if (distance < 401) {
        price = 0
        return price
    } else if (distance <= 2000) {
        price = (distance - 400) * (2 * cents)
        return price 
    } else if (distance <= 2500) {
        price = 25 * dollar
        return price
    } else {
        return "cannot travel that far"
    }
    }
    
