let currentSlideIndex = 0;
let slides = [];

// Initialize the slider
function initializeSlider() {
    slides = document.getElementsByClassName("slide"); // Get all the slides
    console.log("Number of slides:", slides.length); // Check how many slides are selected

    if (slides.length > 0) {
        showSlide(currentSlideIndex); // Show the first slide initially
    } else {
        console.error("No slides found!");
    }
}

// Show the slide at the specified index
function showSlide(index) {
    if (index >= slides.length) {
        currentSlideIndex = 0; // Wrap to the first slide
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1; // Wrap to the last slide
    } else {
        currentSlideIndex = index;
    }

    // Hide all slides
    Array.from(slides).forEach(slide => slide.style.display = "none");

    // Show the current slide
    slides[currentSlideIndex].style.display = "block";
}

// Move to the previous slide
function prevSlide() {
    showSlide(currentSlideIndex - 1);
}

// Move to the next slide
function nextSlide() {
    showSlide(currentSlideIndex + 1);
}

// Initialize the slider on page load
window.onload = initializeSlider;
