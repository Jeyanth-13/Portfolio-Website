const text = "Hello! i'm Jey";
const typingSpeed = 60;

let i = 0;
const target = document.getElementById("typing-text");

// Add blinking cursor during typing
target.classList.add("typing-cursor");

function type() {
  if (i < text.length) {
    target.innerHTML += text.charAt(i);
    i++;
    setTimeout(type, typingSpeed);
  } else {
    // Remove the blinking cursor once done
    target.classList.remove("typing-cursor");
    target.style.borderRight = "none";
  }
}

// Keyword Carousel Animation
document.addEventListener("DOMContentLoaded", type);
const keywords = [
  "Designer",
  "Problem Solver",
  "UX Strategist",
  "Creative Thinker",
  "Team Collaborator"
];
let index = 0;
const carousel = document.getElementById("keyword-carousel");
function updateKeyword() {
  carousel.style.opacity = 0;
  setTimeout(() => {
    carousel.textContent = keywords[index];
    carousel.style.opacity = 1;
    index = (index + 1) % keywords.length;
  }, 300);
}
updateKeyword();
setInterval(updateKeyword, 2500); // Change every 2.5 seconds

const cursor = document.querySelector('.custom-cursor');

window.addEventListener('mousemove', e => {
  cursor.style.top = e.clientY + 'px';
  cursor.style.left = e.clientX + 'px';
});

// Animation for Heading Text (Product Designer)
const glowText = document.getElementById("glowText");

glowText.addEventListener("mousemove", (e) => {
  const rect = glowText.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const xPercent = (x / rect.width) * 100;
  const yPercent = (y / rect.height) * 100;

  glowText.setAttribute("data-text", glowText.textContent);
  glowText.style.setProperty('--glow-x', `${xPercent}%`);
  glowText.style.setProperty('--glow-y', `${yPercent}%`);

  glowText.style.setProperty('--glow-opacity', 1);
  glowText.querySelector('::after');
  glowText.style.setProperty('--opacity', 1);
  glowText.style.setProperty('--hover', '1');
  glowText.style.setProperty('--position', `${xPercent}% ${yPercent}%`);

  glowText.style.setProperty('--glow-bg', `radial-gradient(circle at ${xPercent}% ${yPercent}%, rgba(160, 255, 200, 0.8), transparent 40%)`);
  glowText.style.setProperty('--glow-opacity', `1`);

  glowText.style.setProperty('--background', `radial-gradient(circle at ${xPercent}% ${yPercent}%, rgba(160, 255, 200, 0.8), transparent 40%)`);
  glowText.style.setProperty('--glow-position', `${xPercent}% ${yPercent}%`);
  glowText.style.setProperty('--glow-opacity', `1`);

  glowText.style.setProperty('--radial', `radial-gradient(circle at ${xPercent}% ${yPercent}%, rgba(160, 255, 200, 0.9), transparent 40%)`);

  glowText.style.backgroundImage = `radial-gradient(circle at ${xPercent}% ${yPercent}%, rgba(160, 255, 200, 0.9), transparent 40%)`;
});

glowText.addEventListener("mouseleave", () => {
  glowText.style.backgroundImage = `none`;
});