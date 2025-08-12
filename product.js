document.addEventListener("DOMContentLoaded", function () {
    const backBtn = document.querySelector(".button:first-child");
    const nextBtn = document.querySelector(".button:last-child");

    backBtn.addEventListener("click", function () {
        alert("Going back...");
        
    });

    nextBtn.addEventListener("click", function () {
        alert("Proceeding to next step...");
        });
});