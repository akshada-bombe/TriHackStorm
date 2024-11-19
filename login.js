document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const showRegister = document.getElementById("showRegister");
    const closeModal = document.getElementById("closeModal");
    const registerModal = document.getElementById("registerModal");
  
    // Handle login form submission
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const role = document.getElementById("role").value;
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
  
      // Validation for role selection
      if (!role) {
        document.getElementById("roleError").textContent = "Please select your role.";
        return;
      }
  
      // Clear error messages if validation passes
      document.getElementById("roleError").textContent = "";
  
      // Simulated login success
      console.log({ role, username, password });
  
      // Redirect to appropriate dashboard based on role
      if (role === "intern") {
        window.location.href = "intern-dashboard/intern-dashboard.html";
      } else if (role === "mentor") {
        window.location.href = "mentor-dashboard/mentor-dashboard.html";
      } else if (role === "coordinator") {
        window.location.href = "coordinator-dashboard/coordinator-dashboard.html";
      }
    });
  
    // Show registration modal
    showRegister.addEventListener("click", () => {
      registerModal.style.display = "flex";
    });
  
    // Close registration modal
    closeModal.addEventListener("click", () => {
      registerModal.style.display = "none";
    });
  
    // Handle registration form submission
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const role = document.getElementById("regRole").value;
      const username = document.getElementById("regUsername").value;
      const email = document.getElementById("regEmail").value;
      const password = document.getElementById("regPassword").value;
  
      console.log({ role, username, email, password });
      alert("Registration successful!");
      registerModal.style.display = "none";
    });
  });
  