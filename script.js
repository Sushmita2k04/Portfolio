// Toggle mobile menu
/*document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.navbar').classList.toggle('active');
});
*/
// Toggle Mobile Navigation Menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    document.querySelector('.navbar').classList.toggle('active');
});

// Optional: Smooth Scrolling for Navigation Links
const navItems = document.querySelectorAll('.nav-links a');

// Get the elements
const profileModal = document.getElementById('profileModal');
const viewProfileButtons = document.querySelectorAll('.view-profile-btn');
const backBtn = document.getElementById('backBtn');

// Show profile modal
viewProfileButtons.forEach(button => {
    button.addEventListener('click', () => {
        profileModal.style.display = 'flex';
    });
});

// Hide profile modal
backBtn.addEventListener('click', () => {
    profileModal.style.display = 'none';
});

// Close modal if clicked outside content
profileModal.addEventListener('click', (e) => {
    if (e.target === profileModal) {
        profileModal.style.display = 'none';
    }
});

navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = item.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        const navbarHeight = document.querySelector('.navbar').offsetHeight;

        window.scrollTo({
            top: targetSection.offsetTop - navbarHeight,
            behavior: 'smooth'
        });

        // Close the menu if it's open (for mobile)
        if (document.querySelector('.navbar').classList.contains('active')) {
            document.querySelector('.navbar').classList.remove('active');
        }
    });
});
// document.getElementById('toggleButton').addEventListener('click', function() {
//     var navbar = document.getElementById('navbar');
//     var content = document.getElementById('content');

//     if (navbar.classList.contains('hidden')) {
//         navbar.classList.remove('hidden');
//         content.classList.remove('shrink-content');
//         this.textContent = 'Hide Navbar';
//     } else {
//         navbar.classList.add('hidden');
//         content.classList.add('shrink-content');
//         this.textContent = 'Show Navbar';
//     }
// });
let navbar = document.getElementById('navbar');
let content = document.getElementById('content');
let hideTimeout;

// Function to hide the navbar
function hideNavbar() {
    navbar.classList.add('hidden');
    content.classList.add('shrink-content');
}

// Function to show the navbar
function showNavbar() {
    navbar.classList.remove('hidden');
    content.classList.remove('shrink-content');
}

// Function to reset the hide timer
function resetHideTimer() {
    clearTimeout(hideTimeout);
    showNavbar();
    hideTimeout = setTimeout(hideNavbar, 3000); // Hides navbar after 3 seconds of inactivity
}

// Set initial hide timer
hideTimeout = setTimeout(hideNavbar, 3000);

// Reset the hide timer on any user interaction
document.addEventListener('mousemove', resetHideTimer);
document.addEventListener('keydown', resetHideTimer);

