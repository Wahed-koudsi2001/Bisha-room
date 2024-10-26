document.addEventListener('DOMContentLoaded', function () {
    const filterItems = document.querySelectorAll('.ul-courses li');
    const courses = document.querySelectorAll('.main-courses .box');

    filterItems.forEach(item => {
        item.addEventListener('click', function () {
            const filterValue = this.getAttribute('data-filter');

            // Remove 'active' class from all filter items and add it to the clicked one
            filterItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');

            // Show/Hide courses based on the selected filter
            courses.forEach(course => {
                if (filterValue === 'all' || course.classList.contains(filterValue)) {
                    course.style.display = 'block';
                } else {
                    course.style.display = 'none';
                }
            });
        });
    });
});

// Set the countdown to 24 hours from the current time
const targetDate = new Date().getTime() + 24 * 60 * 60 * 1000;

// Update the countdown every second
const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Time calculations for hours, minutes, and seconds
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the respective elements
    document.getElementById("days").innerHTML = "00"; // Fixed value for 24 hours
    document.getElementById("hour").innerHTML = hours < 10 ? "0" + hours : hours;
    document.getElementById("minute").innerHTML = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;

    // If the countdown is over, display a message and clear the interval
    if (distance < 0) {
        clearInterval(countdown);
        document.querySelector(".clock").innerHTML = "EXPIRED";
    }
}, 1000);