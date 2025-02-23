document.addEventListener("DOMContentLoaded", function() {
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
  
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  
    const tbody = document.querySelector(".calendar tbody");
    let row = document.createElement("tr");
  
    for (let i = 0; i < firstDayOfMonth; i++) {
      row.appendChild(document.createElement("td"));
    }
  
    for (let day = 1; day <= daysInMonth; day++) {
      if ((row.children.length + 1) % 7 === 0) {
        tbody.appendChild(row);
        row = document.createElement("tr");
      }
  
      const cell = document.createElement("td");
      cell.textContent = day;
  
      if (day === today.getDate()) {
        cell.classList.add("today");
      }
  
      row.appendChild(cell);
    }
  
    tbody.appendChild(row);
  });
  