let ratings = document.querySelector('.ratings');
let rating;
let submitBtn = document.querySelector('button[type="submit"]');


ratings.addEventListener("click", (e) => {
    let active = ratings.querySelector('.active');
    if(active != null){
        active.classList.remove("active");
    }
    if(e.target.nodeName = "LI"){
        e.target.classList.add("active");
        rating = e.target.innerHTML;
    }
});

submitBtn.addEventListener('click', (e) => {
    e.preventDefault;
    e.target.parentElement.style.display = "none";
    document.querySelector(".card.thank-you").style = "display: flex;";
    document.querySelector("#rating").innerHTML = rating ?? 0;
});