// Function to open modal
function openModal(title, content) {
  const modal = document.getElementById("modal");
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalContent").innerText = content;
  modal.style.display = "flex";
}

// Function to close modal
function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

// Function to logout
function logout() {
  alert("You have been logged out.");
  window.location.href = "../login.html";
}
