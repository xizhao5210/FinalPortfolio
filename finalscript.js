
const themeBtn = document.querySelector('#theme-toggle');
const bodyElement = document.body;
const mainHeading = document.querySelector('h1');


function toggleTheme() {

    bodyElement.classList.toggle('dark-mode');

    if (bodyElement.classList.contains('dark-mode')) {
        themeBtn.textContent = "Switch to Light Mode";
        console.log("Dark mode active");
    } else {
        themeBtn.textContent = "Switch to Dark Mode";
    }
}


themeBtn.addEventListener('click', toggleTheme);
