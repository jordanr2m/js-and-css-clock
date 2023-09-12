const secondHand = document.querySelector(".second-hand"); // selecting seconds hand
const minHand = document.querySelector(".min-hand"); // selecting minutes hand
const hourHand = document.querySelector(".hour-hand"); // selecting hours hand

function setDate () {
    // console.log("Hi"); - ⁡⁣⁡⁣⁢⁣make sure the code is working⁡
    const now = new Date(); // grabbing the date
    const seconds = now.getSeconds(); // grabbing the current seconds
    // console.log(seconds); - ⁡⁣⁢⁣make sure code is working⁡
    const secondsDegrees = ((seconds / 60) * 360) + 90;
        // Now, we must turn the second into a degree. Do ⁡⁣⁣⁢seconds / 60⁡ to get a percentage. ⁡⁣⁣⁢Multiply by 360⁡ because that is the total number of degrees. ⁡⁣⁣⁢Add 90 degrees⁡ to offest the 90 we added in css to change the default axis.
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
        // using E6 template literal to style the transform property of the second hand
    // console.log(seconds); - ⁡⁣⁢⁣make sure code is working.⁡ See in the console that the timing is not matching up right. ⁡⁣⁣⁢Add 90 degrees above⁡ to offset.
    // console.log(seconds); - ⁡⁣⁢⁣make sure alignment correct⁡

    // Set Minute Hand
    const minutes = now.getMinutes(); // grabbing the current minutes
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;

    // Set Hour Hand
    const hour = now.getHours(); // grabbing the current hour
    const hourDegrees = ((hour / 12) * 360) + 90; // because clock shows only 12 hours
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000); // this line of code makes it run every second. 1000 milliseconds = 1 second.

setDate();