function sayYes() {
    document.body.innerHTML = `
        <div class="yes-container">
            <h1>YAY! 💖 Ritu Said YES! 🎉</h1>
        </div>
        <canvas id="confetti"></canvas>
    `;
    
    startConfetti(); // Start the confetti animation
}

// Function to start confetti animation
function startConfetti() {
    const canvas = document.getElementById("confetti");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const confettiPieces = [];

    class Confetti {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height - canvas.height;
            this.size = Math.random() * 8 + 2;
            this.speedY = Math.random() * 3 + 2;
            this.speedX = Math.random() * 2 - 1;
            this.color = `hsl(${Math.random() * 360}, 100%, 70%)`;
        }

        update() {
            this.y += this.speedY;
            this.x += this.speedX;

            if (this.y > canvas.height) {
                this.y = 0 - this.size;
                this.x = Math.random() * canvas.width;
            }
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }

    function createConfetti() {
        for (let i = 0; i < 150; i++) {
            confettiPieces.push(new Confetti());
        }
    }

    function animateConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        confettiPieces.forEach((confetti) => {
            confetti.update();
            confetti.draw();
        });
        requestAnimationFrame(animateConfetti);
    }

    createConfetti();
    animateConfetti();
}

// "No" button shake effect
document.addEventListener("DOMContentLoaded", () => {
    const noButton = document.getElementById("noButton");

    noButton.addEventListener("mouseover", () => {
        noButton.classList.add("shake");

        // Change color randomly
        const colors = ["#ff4d4d", "#ff751a", "#ffcc00", "#66ff66", "#3399ff"];
        noButton.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        // Change text randomly
        const texts = ["No 💔", "Think Again? 🤔", "Are You Sure? 😢", "Really? 😭", "Pls Say Yes! 😍"];
        noButton.innerText = texts[Math.floor(Math.random() * texts.length)];

        setTimeout(() => {
            noButton.classList.remove("shake");
        }, 500);
    });
});
