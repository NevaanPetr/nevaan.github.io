// Function to set the selected theme
function setTheme(themeName) {
    document.body.className = themeName;
  
    // Add or remove a class from the buttons based on the selected theme
    const themeButtons = document.querySelectorAll(".theme-button");
    themeButtons.forEach((button) => {
      button.classList.toggle("dark-mode-buttons", themeName === "dark-mode");
    });
  }
  
  // Add event listeners to the theme buttons
  document.getElementById("default-theme").addEventListener("click", () => {
    setTheme("default-mode");
  });
  
  document.getElementById("dark-theme").addEventListener("click", () => {
    setTheme("dark-mode");
  });
  
  document.getElementById("blue-theme").addEventListener("click", () => {
    setTheme("blue-mode");
  });
  
  document.getElementById("red-theme").addEventListener("click", () => {
    setTheme("red-mode");
  });
  
  document.getElementById("random-theme").addEventListener("click", () => {
    setTheme("random-mode");
  });
 
  document.getElementById("light-theme").addEventListener("click", () => {
    setTheme("light-mode");
  });
  
  document.getElementById("blade-theme").addEventListener("click", () => {
    setTheme("blade-mode");
  });
  
  document.getElementById("mint-theme").addEventListener("click", () => {
    setTheme("mint-mode");
  });
  