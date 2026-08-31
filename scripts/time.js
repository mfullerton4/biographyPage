function updateDateTime() {
    const now = new Date();
    //Time
    const timeString = now toLocalTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });
    document.getElementById("currentTime").textContent = timeString;

    //date
    const dateString = now.toLocaleDateString([], {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    document.getElementById("currentDate").textContent = dateString;
}

updateDateTime();
setInterval(updateDateTime, 1000);