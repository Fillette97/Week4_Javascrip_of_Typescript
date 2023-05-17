function calculateDuration(input) {
    var duration = {
        years: 0,
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    };

    // Compute years, months, days, hours, minutes, and seconds
    duration.years = Math.floor(input / (365 * 24 * 60 * 60));
    input %= 365 * 24 * 60 * 60;

    duration.months = Math.floor(input / (31 * 24 * 60 * 60));
    input %= 31 * 24 * 60 * 60;

    duration.days = Math.floor(input / (24 * 60 * 60));
    input %= 24 * 60 * 60;

    duration.hours = Math.floor(input / 3600);
    input %= 3600;

    duration.minutes = Math.floor(input / 60);
    input %= 60;

    duration.seconds = input;

    return duration;
}

function getPluralSuffix(value) {
    return (value === 1) ? "" : "s";
}

var input = parseInt(prompt("Input an integer:"));
var duration = calculateDuration(input);

// Print the result
console.log(duration.years + " Year" + getPluralSuffix(duration.years) +
    ", " + duration.months + " Month" + getPluralSuffix(duration.months) +
    ", " + duration.days + " Day" + getPluralSuffix(duration.days) +
    ", " + duration.hours + " Hour" + getPluralSuffix(duration.hours) +
    ", " + duration.minutes + " Minute" + getPluralSuffix(duration.minutes) +
    ", " + duration.seconds + " Second" + getPluralSuffix(duration.seconds));