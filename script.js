// Coffee details data
const coffeeDetails = {
  "Espresso": "Khahwo xooggan oo dhadhan leh, ku habboon kicitaan degdeg ah.",
  "Cappuccino": "Isku-dar kareem leh oo espresso, caano kulul, iyo xumbo.",
  "Latte": "Isku-dar kareem leh oo espresso, caano kulul, iyo xumbo..",
  "Mocha": "Mocha: Kahwo dhadhan shukulaato leh oo lagu daray espresso iyo caano."
};

// Show modal with coffee details
function showDetails(coffeeName) {
  document.getElementById("coffeeTitle").innerText = coffeeName;
  document.getElementById("coffeeDescription").innerText = coffeeDetails[coffeeName];
  document.getElementById("coffeeModal").style.display = "block";
}

// Close modal
function closeModal() {
  document.getElementById("coffeeModal").style.display = "none";
}

// Close modal when clicking outside
window.onclick = function(event) {
  const modal = document.getElementById("coffeeModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};window.onload = function () {
    document.getElementById("warning-box").style.display = "block";
  };
  window.onload = function () {
  // Show warning only the first time
  if (!localStorage.getItem("seenWarning")) {
    document.getElementById("first-warning").style.display = "block";
  }
};

function closeWarning() {
  document.getElementById("first-warning").style.display = "none";
  localStorage.setItem("seenWarning", "true");
}