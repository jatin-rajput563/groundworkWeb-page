const navbarbtn = () => {
    document.getElementById("name").classList.toggle("show-navbar")
    document.body.classList.toggle("overflow-hidden")
};
window.addEventListener("scroll", function () {
    let button = document.getElementById("backToTop");
    if (window.scrollY > 500) {
        button.classList.add("show");
    } else {
        button.classList.remove("show");
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
