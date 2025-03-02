const targetDate = new Date("2025-03-21T00:00:00").getTime();

const timerElement = document.getElementById("timer");
const mainContent = document.getElementById("main-content");
const countdownContainer = document.getElementById("countdown-container");
mainContent.style.display = "none";
const countdown = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
        clearInterval(countdown);
        countdownContainer.style.display = "none";
        mainContent.style.display = "block";
        return;
    }
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor ((timeLeft % (1000 * 60)) / 1000);

    timerElement.textContent = `${days}d ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

},1000);