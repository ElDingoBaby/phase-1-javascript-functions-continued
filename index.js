
function saturdayFun(activity) {
    const message = `This Saturday, I want to roller-skate!`
    if (activity) {
        return `This Saturday, I want to ${activity}!`
    } else {
        return message
    }
}

const mondayWork = function (activity) {
    let defaultActivity
    const defaultMessage = `This Monday, I will go to the office.`
    if (activity) {
        return `This Monday, I will ${activity}.`
    } else if (defaultActivity) {
        return `This Monday, I will go to the office.`
    } else {
        return defaultMessage
    }
}

function wrapAdjective(start, character = "Special") {
    if (character = ``) {
        return function (character) {
            return `You are ${start}${character}!`
        }
    } else if (character = `||`) {
        return function (character) {
            return `You are ${start}${character}${start}!`
        }
    }
}