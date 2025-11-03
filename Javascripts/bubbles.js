// connect to bubble container
const bubbleContainer = document.querySelector(".bubble-container");

// get images
const bubbleImages = [
  "https://i.postimg.cc/8z8Pz7Yz/bubble4.png",
  "https://i.postimg.cc/13x538dQ/bubble1.png",
  "https://i.postimg.cc/Z5kK5WQK/bubble2.png",
  "https://i.postimg.cc/2Sp8S1t5/bubble3.png",
  "https://i.postimg.cc/8z8Pz7Yz/bubble4.png",
  "https://i.postimg.cc/T38Y3Ksw/bubble5.png",
  "https://i.postimg.cc/8z8Pz7Yz/bubble4.png"
];


// create bubble
const createBubble = () => {
  const bubble = document.createElement("img");
  bubble.src = bubbleImages[Math.floor(Math.random() * bubbleImages.length)];
  bubble.classList.add("bubble");

  // random position, size, duration
  bubble.style.left = Math.random() * 100 + "vw";
  const size = 20 + Math.random() * 20;
  bubble.style.width = size + "px";
  const duration = 12 + Math.random() * 8;
  bubble.style.animationDuration = duration + "s";

  // random final opacity
  bubble.addEventListener("animationend", () => bubble.style.opacity = 0.2 + Math.random() * 0.8);

  bubbleContainer.appendChild(bubble);

  // remove after animation
  setTimeout(() => bubble.remove(), duration * 1000);
};

// generate bubbles continuously
setInterval(createBubble, 400);
