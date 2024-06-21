AOS.init();

let interval;
const progressBarIds = ['progressBar1', 'progressBar2', 'progressBar3', 'progressBar4'];

const updateProgressBar = (progressBar, tabIndex) => {
    let width = 0;
    interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            const nextTabIndex = (tabIndex % progressBarIds.length) + 1;
            showTab(nextTabIndex);
        } else {
            width++;
            progressBar.style.width = `${width}%`;
            progressBar.setAttribute('aria-valuenow', width);
        }
    }, 100); // Adjust the interval time as needed
};

const resetProgressBar = (progressBar) => {
    progressBar.style.width = '0%';
    progressBar.setAttribute('aria-valuenow', 0);
};

const showTab = (tabIndex) => {
    $(`#myTab a[href="#tab${tabIndex}"]`).tab('show');
    const progressBar = document.getElementById(progressBarIds[tabIndex - 1]);
    resetProgressBar(progressBar);
    updateProgressBar(progressBar, tabIndex);
};

// Event listeners for tab clicks
document.querySelectorAll('#myTab a').forEach((tab, index) => {
    tab.addEventListener('click', () => {
        clearInterval(interval); // Clear the previous interval
        const tabIndex = index + 1;
        const progressBar = document.getElementById(progressBarIds[tabIndex - 1]);
        resetProgressBar(progressBar);
        updateProgressBar(progressBar, tabIndex);
    });
});

// Initial setup: Start progress bar for the first tab
showTab(1);




$(document).ready(function(){
    $("#card-carousel").owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        // autoplay: true,
        // autoplayTimeout: 5000,
        autoplayHoverPause: true
    });
});


  
