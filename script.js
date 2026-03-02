const text = "Hi, I'm Nana. A creative coder who loves storytelling, futuristic aesthetics, and building digital worlds.";

let i = 0;
function typingEffect() {
  if (i < text.length) {
    document.getElementById("typing-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typingEffect, 40);
  }
}

typingEffect();
