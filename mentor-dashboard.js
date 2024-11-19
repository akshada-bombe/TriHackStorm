// Open evaluation form for a specific intern
function openEvaluationForm(internName) {
  const form = document.getElementById("evaluationForm");
  document.getElementById("internName").innerText = internName;
  form.classList.remove("hidden");
}

// Submit evaluation
function submitEvaluation() {
  const evaluationContent = document.getElementById("evaluationContent").value;

  if (!evaluationContent.trim()) {
      alert("Please write your evaluation before submitting.");
      return;
  }

  alert("Evaluation submitted successfully!");
  document.getElementById("evaluationForm").classList.add("hidden");
  document.getElementById("evaluationContent").value = ""; // Clear the textarea
}

// View report
function viewReport(internName) {
  alert(`Viewing report for ${internName}.`);
  // Replace this alert with actual logic to fetch and display the report.
}

// Logout function
function logout() {
  alert("You have been logged out.");
  window.location.href = "../login.html"; // Redirect to login page
}
