// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Function to add transition class
    function addTransitionClass() {
        document.body.classList.add('transition');
        
        // Remove class after transition ends to allow for new transitions
        setTimeout(function () {
            document.body.classList.remove('transition');
        }, 1000); // Match this duration with the CSS transition duration
    }

    // Apply transition class when links are clicked
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default link behavior
            const href = this.getAttribute('href');

            // Add transition class
            addTransitionClass();

            // Navigate to the new page after the transition
            setTimeout(function () {
                window.location.href = href;
            }, 1000); // Match this duration with the CSS transition duration
        });
    });

    // Optionally apply transition on page load
    addTransitionClass();
});
