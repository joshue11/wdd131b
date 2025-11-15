// weather.js
// Static values (change if you want): must match what's shown in HTML
const temperatureC = 7;   // °C
const windKmh = 10;       // km/h

// One-line function that returns wind chill (metric).
function calculateWindChill(tC, vKmh) {
  return Math.round((13.12 + 0.6215 * tC - 11.37 * Math.pow(vKmh, 0.16) + 0.3965 * tC * Math.pow(vKmh, 0.16)) * 10) / 10;
}

// Only compute when conditions are met:
// Metric conditions: temperature <= 10°C and wind speed > 4.8 km/h
document.addEventListener("DOMContentLoaded", () => {
  // Set the static displays from the HTML (keeps consistent)
  const tempEl = document.getElementById("tempDisplay");
  const windEl = document.getElementById("windDisplay");
  const windChillEl = document.getElementById("windChillDisplay");

  tempEl.textContent = `${temperatureC} °C`;
  windEl.textContent = `${windKmh} km/h`;

  if (temperatureC <= 10 && windKmh > 4.8) {
    const wc = calculateWindChill(temperatureC, windKmh);
    windChillEl.textContent = `${wc} °C`;
  } else {
    windChillEl.textContent = "N/A";
  }

  // Footer year and last modified
  const yearEl = document.getElementById("currentYear");
  const lastEl = document.getElementById("lastModified");
  yearEl.textContent = new Date().getFullYear();
  lastEl.textContent = `Last modified: ${document.lastModified}`;
});
