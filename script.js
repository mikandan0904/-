const targetDate = new Date("2027-01-01T00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

const days = Math.floor(distance / (1000 * 60 * 60 * 24));

 document.getElementById("countdown").innerHTML = `${days}日`;

if (distance < 0) {
        document.getElementById("countdown").innerHTML = "新年おめでとう！";
    }
}

setInterval(updateCountdown, 1000);
