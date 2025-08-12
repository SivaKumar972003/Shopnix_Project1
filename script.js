document.addEventListener("DOMContentLoaded", function () {
    const themeCards = document.querySelectorAll(".theme-card");

    themeCards.forEach(card => {
        const button = card.querySelector(".btn");

        button.addEventListener("click", () => {
            
            themeCards.forEach(c => {
                c.classList.remove("selected");
                const btn = c.querySelector(".btn");
                btn.textContent = "Apply";
                btn.className = "btn apply-btn";
            });

            
            card.classList.add("selected");
            button.textContent = "✔";
            button.className = "btn selected-btn";
        });
    });
});