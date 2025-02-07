function sayYes() {
    alert("Yay! ❤️ Love you, Ritu! 💍");
    document.body.innerHTML = "<h1 style='color:#ff4d4d; font-size:50px; text-align:center;'>YAY! 💖 Ritu Said YES! 🎉</h1>";
}

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
