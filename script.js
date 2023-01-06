// set local storage
localStorage.setItem("rating", 4);
let prevActive = null;

const rating = document.getElementById('rating');

rating.addEventListener('click', (e) => {
    const list = e.target.nodeName === "LI";

    if (!list) {
        return
    }

    e.target.classList.add("active");

    if (prevActive !== null) {
        prevActive.classList.remove("active");
    }

    prevActive = e.target;
    var rateClick = e.target.textContent;
    localStorage.setItem('rating', rateClick);

});