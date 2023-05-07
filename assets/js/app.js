// Preloader 
window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    preloader.style.display = "none";
});

// Notification
const myButton = document.querySelector('#notification-toggle');
const myElement = document.querySelector('#notificationToggleItem');

myButton.addEventListener('click', function () {
    if (myElement.style.display === 'none') {
        myElement.style.display = 'block';
    } else {
        myElement.style.display = 'none';
    }
});

// Profile
const profileBtn = document.querySelector('#profile-toggle');
const profileElement = document.querySelector('#profileToggleItem');

profileBtn.addEventListener('click', function () {
    if (profileElement.style.display === 'none') {
        profileElement.style.display = 'block';
    } else {
        profileElement.style.display = 'none';
    }
});
