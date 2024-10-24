function scrolldiv() { $([document.documentElement, document.body]).animate({ scrollTop: $("#contact-page-section").offset().top }, 100); }
var btn = $('.btn-fixed'); $(window).scroll(function () { if ($(window).scrollTop() > 100) { btn.addClass('show'); } else { btn.removeClass('show'); } }); btn.on('click', function (e) { e.preventDefault(); $([document.documentElement, document.body]).animate({ scrollTop: $("#contact-page-section").offset().top }, 100); }); function getTimeRemaining(endtime) { var t = Date.parse(endtime) - Date.parse(new Date()); var seconds = Math.floor((t / 1000) % 60); var minutes = Math.floor((t / 1000 / 60) % 60); var hours = Math.floor((t / (1000 * 60 * 60)) % 24); var days = Math.floor(t / (1000 * 60 * 60 * 24)); return { 'total': t, 'days': days, 'hours': hours, 'minutes': minutes, 'seconds': seconds }; }
function initializeClock(id, endtime) {
    var clock = document.getElementById(id); var daysSpan = clock.querySelector('.days'); var hoursSpan = clock.querySelector('.hours'); var minutesSpan = clock.querySelector('.minutes'); var secondsSpan = clock.querySelector('.seconds'); function updateClock() { var t = getTimeRemaining(endtime); daysSpan.innerHTML = ('0' + t.days).slice(-2); hoursSpan.innerHTML = ('0' + t.hours).slice(-2); minutesSpan.innerHTML = ('0' + t.minutes).slice(-2); secondsSpan.innerHTML = ('0' + t.seconds).slice(-2); if (t.total <= 0) { clearInterval(timeinterval); } }
    updateClock(); var timeinterval = setInterval(updateClock, 1000);
}
var deadline = new Date(Date.parse(new Date()) + 1 * 24 * 60 * 60 * 1000); initializeClock('clockdiv', deadline); function sendMessage() { $("#sucsess-modal").modal("show"); setTimeout(function () { window.location.href = "https://numo.sa/ar/b/alghrf-altgary-alsnaaay-bynbaa"; }, 5000); }

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
