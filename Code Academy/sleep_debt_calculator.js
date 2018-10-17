//Sleep debt calculator

//setting hours slept for each day
const getSleepHours = day => {
    switch (day) {
        case 'Monday':
            return 8;
        case 'Tuesday':
            return 8;
        case 'Wednesday':
            return 8;
        case 'Thursday':
            return 8;
        case 'Friday':
            return 8;
        case 'Saturday':
            return 8;
        case 'Sunday':
            return 8;
    }
}

const getActualSleepHours = () => 
    getSleepHours('Monday') +
        getSleepHours('Tuesday') +
        getSleepHours('Wednesday') +
        getSleepHours('Thursday') +
        getSleepHours('Friday');


const getIdealSleepHours = () => {
    const idealHours = 7.5;
    return idealHours * 7;
}

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();

    if (actualSleepHours === idealSleepHours) {
        return 'Perfect Amount of sleep!';
    }
    else if (actualSleepHours > idealSleepHours) {
        console.log('You got ' + (actualSleepHours - idealSleepHours) + ' more hour(s) sleep than you needed this week! Well rested!');
    }
    else if (actualSleepHours < idealSleepHours) {
        console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
    }
}


calculateSleepDebt();

//display the total
console.log(getActualSleepHours());
console.log(getIdealSleepHours());
calculateSleepDebt();