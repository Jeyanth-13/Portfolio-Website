const text = "Hello! I'm Jey";
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

// Keyword Animation
document.addEventListener("DOMContentLoaded", type);
const keywords = [
  "Designer",
  "Problem Solver",
  "UX Strategist",
  "Creative Thinker",
  "Team Collaborator"
];
let keycarousel = 0;
const carousel = document.getElementById("keyword-carousel");
function updateKeyword() {
  // carousel.style.opacity = 0;
  setTimeout(() => {
    carousel.textContent = keywords[keycarousel];
    carousel.style.opacity = 1;
    keycarousel = (keycarousel + 1) % keywords.length;
  }, 300);
}
updateKeyword();
setInterval(updateKeyword, 2500); // Change every 2.5 seconds

const cursor = document.querySelector('.custom-cursor');















// part -2
// window.addEventListener('mousemove', e => {
//   cursor.style.top = e.clientY + 'px';
//   cursor.style.left = e.clientX + 'px';
// });


// window.addEventListener("DOMContentLoaded", () => {
//   const titles = ["UX UI", "Product", "3D", "Graphic"];
//   let currentIndex = 0;
//   const titleEl = document.getElementById("role-title");

//   // Insert the first text
//   const firstSpan = document.createElement("span");
//   firstSpan.textContent = titles[currentIndex];
//   firstSpan.classList.add("active");
//   titleEl.appendChild(firstSpan);

//   function updateTitle() {
//     const current = titleEl.querySelector(".active");
//     const next = document.createElement("span");

//     currentIndex = (currentIndex + 1) % titles.length;
//     next.textContent = titles[currentIndex];
//     titleEl.appendChild(next);

//     // Trigger transitions
//     requestAnimationFrame(() => {
//       current.classList.remove("active");
//       current.classList.add("out");
//       next.classList.add("active");
//     });

//     // Remove the old element after transition ends
//     setTimeout(() => current.remove(), 800);
//   }

//   setInterval(updateTitle, 2500); // duration before next word scrolls
// });


// part -1
// const titles = ["UX UI", "Product", "3D"];
// let currentIndex = 0;
// const titleEl = document.getElementById("role-title");

// function updateTitle() {
//   // Create the next element
//   const nextEl = document.createElement("span");
//   nextEl.textContent = titles[currentIndex];
//   nextEl.classList.add("slide-in");

//   // Insert next element below the current one
//   titleEl.appendChild(nextEl);

//   // Wait a moment to start slide-out of the previous one
//   const previousEl = titleEl.querySelector(".slide-out");
//   if (previousEl) previousEl.remove(); // remove any old ones

//   const activeEl = titleEl.querySelector(".slide-in");
//   if (activeEl && activeEl !== nextEl) {
//     activeEl.classList.remove("slide-in");
//     activeEl.classList.add("slide-out");
//     setTimeout(() => activeEl.remove(), 600); // remove after anim completes
//   }

//   // Prepare for next update
//   currentIndex = (currentIndex + 1) % titles.length;
// }

// // Start cycle
// updateTitle();
// setInterval(updateTitle, 3000);

