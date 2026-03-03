const grid = document.getElementById("grid");
const yearText = document.getElementById("year");

const now = new Date();
const year = now.getFullYear();

yearText.textContent = year;

// Calculate day of year
function getDayOfYear(date) {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date - start;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

const todayNumber = getDayOfYear(now);

// Check leap year
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

const totalDays = isLeapYear(year) ? 366 : 365;

// Generate dots
for (let i = 1; i <= totalDays; i++) {
  const dot = document.createElement("div");
  dot.classList.add("dot");

  if (i <= todayNumber) {
    dot.classList.add("filled");
  }

  grid.appendChild(dot);
}