document.addEventListener("DOMContentLoaded", () => {
    fetchInternProgress();
  });
  
  function fetchInternProgress() {
    fetch('http://localhost:5000/api/coordinators/progress') // Replace with actual endpoint
      .then(response => response.json())
      .then(data => {
        const progressTable = document.getElementById("progressTable").querySelector("tbody");
        progressTable.innerHTML = ''; // Clear any previous rows
  
        data.forEach(intern => {
          const row = `
            <tr>
              <td>${intern.name}</td>
              <td>${intern.companyName}</td>
              <td>${intern.reportsSubmitted}</td>
              <td>${intern.status}</td>
            </tr>
          `;
          progressTable.innerHTML += row;
        });
      })
      .catch(error => console.error("Error fetching intern progress:", error));
  }
  