const day = document.querySelector(".calendar__day-number");
const dayName = document.querySelector(".calendar__day-name");
const month = document.querySelector(".calendar__month");
const year = document.querySelector(".calendar__year");

const today = new Date();

const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const weekdays = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];

function setDates() {
    day.innerHTML = today.getDate();
    dayName.innerHTML = weekdays[today.getDay()];
    month.innerHTML = months[today.getMonth()];
    year.innerHTML = today.getFullYear();
}


setDates();