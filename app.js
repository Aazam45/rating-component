
const mainContainer = document.querySelector(".main-container");
const thankYouContainer = document.querySelector(".thank-you")
const submitButton = document.querySelector(".btn-submit");
const ratingNum = document.getElementById("rating");
const ratingBtn = document.querySelectorAll(".btn");


submitButton.addEventListener("click", ()=> {
    thankYouContainer.classList.remove("hidden");
    mainContainer.style.display = "none";
});

ratingBtn.forEach((rating) => {
    rating.addEventListener("click", ()=> {
        ratingNum.innerHTML = rating.innerHTML;
    })
});