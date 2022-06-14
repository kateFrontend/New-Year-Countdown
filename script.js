function christmasCountdown() {
    const christmasDate = new Date ("December 25, 2022 00:00");
    const now = new Date();
    const diff = christmasDate - now; //difference

    const msInSecond = 1000; // how many milliseconds in one second - 1.000
    const msInMinute = 60 * 1000; // how many milliseconds in one minute - 60.000
    const msInHour = 60 *60 *1000; // how many milliseconds in one hour - 3 600 000
    const msInDay = 24 * 60 * 60 * 1000; // how many milliseconds in one day - 86 400 000

    const displayDay = Math.floor(diff/msInDay); // round up a number
    document.querySelector(".days").textContent = displayDay;

    const displayHour = Math.floor((diff%msInDay) / msInHour);
    document.querySelector(".hours").textContent = displayHour;

    const displayMinute = Math.floor((diff%msInHour) / msInMinute);
    document.querySelector(".minutes").textContent = displayMinute;

    const displaySecond = Math.floor((diff%msInMinute) / msInSecond);
    document.querySelector(".seconds").textContent = displaySecond;


}

setInterval(christmasCountdown, 1000)

christmasCountdown();