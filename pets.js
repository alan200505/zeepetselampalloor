// Move the text up by changing its top position
const textElement = document.getElementById('text');
textElement.style.top = '50px'; // Adjust this value to move the text up

const headingElement = document.getElementById('heading');
const text = "This is a typing effect.";
let index = 0;

function typeText() {
  if (index < text.length) {
    headingElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeText, 100);
  }
}

typeText();
