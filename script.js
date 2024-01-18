function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// Add this script to your HTML or in an external JavaScript file
// Wrap your existing JavaScript code inside a function
// Wrap your existing JavaScript code inside a function
function startTypingEffect() {
  const textElement = document.getElementById("typing-text");
  const textToType = "Software Developer";
  let index = 0;
  let cycleCount = 0;
  const maxCycles = 3; // Set the number of desired cycles

  function type() {
    textElement.textContent = textToType.slice(0, index);

    if (index < textToType.length) {
      index++;
      setTimeout(type, 150); // Adjust the typing speed if needed
    } else {
      index = 0;
      cycleCount++;

      if (cycleCount < maxCycles) {
        setTimeout(type, 2000); // Wait for 2 seconds before starting the next cycle
      }
    }
  }

  type(); // Start the typing effect
}

// Call the function to start the typing effect
startTypingEffect();
