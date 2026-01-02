// const chatToggle = document.getElementById("chatToggle");
// const chatbot = document.getElementById("ai-chatbot");
// const closeChat = document.getElementById("closeChat");
// const chatBody = document.getElementById("chatBody");

// chatToggle.onclick = () => chatbot.style.display = "flex";
// closeChat.onclick = () => chatbot.style.display = "none";

// function sendMessage() {
//   const input = document.getElementById("userInput");
//   const msg = input.value.trim();
//   if (!msg) return;

//   chatBody.innerHTML += `<div class="user-msg">${msg}</div>`;
//   input.value = "";

//   setTimeout(() => {
//     chatBody.innerHTML += `<div class="bot-msg">${botReply(msg)}</div>`;
//     chatBody.scrollTop = chatBody.scrollHeight;
//   }, 700);
// }

// function botReply(msg) {
//   msg = msg.toLowerCase();

//   if (msg.includes("booking"))
//     return "📅 Booking ke liye 'Book Now' page visit karein ya Contact karein.";

//   if (msg.includes("katha"))
//     return "📖 Shreemad Bhagwat Katha 7 din ya custom duration me available hai.";

//   if (msg.includes("contact"))
//     return "📞 Aap hume Contact Us page se directly reach kar sakte hain.";

//   return "🙏 Dhanyavaad! Team jald hi aapse sampark karegi.";
// }


// // auto relpy on enter key
// function botReply(msg) {
//   msg = msg.toLowerCase();

//   if (msg.includes("booking")) {
//     return `📅 Booking ke liye:
//     <br>👉 <a href="booking.html">Book Now Page</a>
//     <br>📞 Ya WhatsApp karein:
//     <br><a href="https://wa.me/91XXXXXXXXXX" target="_blank">Click to WhatsApp</a>`;
//   }

//   if (msg.includes("katha")) {
//     return "📖 Shreemad Bhagwat Katha 7 din ya custom duration me available hai.";
//   }

//   if (msg.includes("price") || msg.includes("cost")) {
//     return "💰 Pricing event, city aur duration par depend karti hai. WhatsApp par details milegi.";
//   }

//   if (msg.includes("contact")) {
//     return `📞 Contact:
//     <br>📱 +91 XXXXXXXXXX
//     <br>📧 info@bhagwatkatha.com`;
//   }

//   return "🙏 Dhanyavaad! Aap booking, katha, price ya contact ke baare me pooch sakte hain.";
// }



// send message on enter key press   new js code

const chatToggle = document.getElementById("chatToggle");
const chatbot = document.getElementById("ai-chatbot");
const closeChat = document.getElementById("closeChat");
const chatBody = document.getElementById("chatBody");
const userInput = document.getElementById("userInput");

chatToggle.onclick = () => chatbot.style.display = "flex";
closeChat.onclick = () => chatbot.style.display = "none";

/* Enter key support */
userInput.addEventListener("keypress", e => {
  if (e.key === "Enter") sendMessage();
});

function quickSend(text) {
  userInput.value = text;
  sendMessage();
}

function sendMessage() {
  const msg = userInput.value.trim();
  if (!msg) return;

  chatBody.innerHTML += `<div class="user-msg">${msg}</div>`;
  userInput.value = "";
  scrollBottom();

  showTyping();

  setTimeout(() => {
    hideTyping();
    chatBody.innerHTML += `<div class="bot-msg">${botReply(msg)}</div>`;
    scrollBottom();
  }, 700);
}

function showTyping() {
  chatBody.innerHTML += `<div class="bot-msg" id="typing">🤖 Typing...</div>`;
  scrollBottom();
}

function hideTyping() {
  const t = document.getElementById("typing");
  if (t) t.remove();
}

function scrollBottom() {
  chatBody.scrollTop = chatBody.scrollHeight;
}

/* Smart AI Replies */
function botReply(msg) {
  msg = msg.toLowerCase();

  if (msg.includes("booking")) {
    return `📅 Booking ke liye <b>Book Now</b> page visit karein
    <br>📲 <a href="https://wa.me/919795856977" target="_blank">WhatsApp Support</a>`;
  }

  if (msg.includes("price") || msg.includes("cost")) {
    return "💰 Price city & duration par depend karti hai. WhatsApp par exact quote milega.";
  }

  if (msg.includes("katha")) {
    return "📖 Shreemad Bhagwat Katha 7-day & custom format me available hai.";
  }

  if (msg.includes("contact")) {
    return "📞 Call: +91  97958 56977<br>📧 info@bhagwatkatha.com";
  }

  return "🙏 Aap Booking, Price, Katha ya Contact ke baare me pooch sakte hain.";
}




