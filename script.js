let fanStatus = "OFF";

// Turn fan ON
function turnOnFan() {
    fanStatus = "ON";
    updateFan();
}

// Turn fan OFF
function turnOffFan() {
    fanStatus = "OFF";
    updateFan();
}

// Update fan status and log data
function updateFan() {
    document.getElementById("fanStatus").innerText = fanStatus;
    document.getElementById("message").innerText =
        "Ventilation is " + (fanStatus === "ON" ? "running" : "stopped");

    addLog();
}

// Add log entry
function addLog() {
    const temp = document.getElementById("temp").innerText;
    const humidity = document.getElementById("humidity").innerText;
    const time = new Date().toLocaleString();

    const table = document.getElementById("logTable");
    const row = table.insertRow(0);

    row.insertCell(0).innerText = time;
    row.insertCell(1).innerText = temp;
    row.insertCell(2).innerText = humidity;
    row.insertCell(3).innerText = fanStatus;
}

// Fake sensor data (demo purpose)
setInterval(() => {
    document.getElementById("temp").innerText =
        Math.floor(Math.random() * 5) + 28;

    document.getElementById("humidity").innerText =
        Math.floor(Math.random() * 10) + 60;
}, 3000);
