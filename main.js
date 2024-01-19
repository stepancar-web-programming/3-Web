document.addEventListener('DOMContentLoaded', () => {
  let nightMode = localStorage.getItem('nightMode') === 'true'; 

  applyNightMode(nightMode);

  document.getElementById('night-mode-toggle').addEventListener('click', () => {
    nightMode = !nightMode; 
    applyNightMode(nightMode);
    localStorage.setItem('nightMode', nightMode);
  });

  const currentYearElement = document.getElementById('current-year');
  const currentYear = new Date().getFullYear();
  currentYearElement.textContent = currentYear;

  displayCurrentDateTime();
  setInterval(displayCurrentDateTime, 1000);
});

function applyNightMode(nightMode) {
  document.body.classList.toggle('night-mode', nightMode);
  document.getElementsByTagName('footer')[0].classList.toggle('night-mode-footer', nightMode);
}

function displayCurrentDateTime() {
  const dateTimeContainer = document.getElementById('current-date-time');
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
  const formattedDateTime = now.toLocaleDateString('en-US', options);

  dateTimeContainer.innerHTML = `<p>${formattedDateTime}</p>`;
}
