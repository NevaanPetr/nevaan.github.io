// Get references to frames and the button
const frames = document.querySelectorAll(".box");
const toggleButton = document.getElementById("toggleButton");

// Initialize a flag variable to keep track of the state
let isToggled = false;

// Function to toggle the frames and refresh the page when clicked again
function toggleFramesAndRefresh() {
    if (isToggled) {
        // If currently toggled, refresh the page
        location.reload();
    } else {
        // If not toggled, hide all frames
        frames.forEach(frame => {
            frame.style.display = "none"; // Hide all frames
        });
        isToggled = true; // Update the flag
    }
}

// Add a click event listener to the button
toggleButton.addEventListener("click", toggleFramesAndRefresh);
