const volumeSlider = document.getElementById("volume-slider");

// Set initial volume to 100% (1 in range 0-1)
audio.volume = volumeSlider.value;

// Update volume when slider is moved
volumeSlider.addEventListener("input", () => {
    audio.volume = volumeSlider.value;
});

// Optionally, you can update the slider position when the volume changes programmatically
audio.addEventListener("volumechange", () => {
    volumeSlider.value = audio.volume;
});

