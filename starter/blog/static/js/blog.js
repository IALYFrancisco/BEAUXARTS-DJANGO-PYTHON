const profile = document.querySelector("img#profile");
const action = document.querySelector(".action")

profile.addEventListener("mouseenter", () => {
    action.style.display = "block";
})

profile.addEventListener("mouseleave", () => {
    action.style.display = "none";
})

action.addEventListener("mouseenter", () => {
    action.style.display = "block";
})

action.addEventListener("mouseleave", () => {
    action.style.display = "none";
})