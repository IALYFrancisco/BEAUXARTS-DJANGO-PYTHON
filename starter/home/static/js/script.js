const linkToSwitch = document.getElementById("linkToSwitch");
const frontCard = document.querySelector('form.front')
const backCard = document.querySelector('form.back')
linkToSwitch.addEventListener('click', () => {
    frontCard.style.transition = "0.5";
    backCard.style.transition = "0.5s";
    frontCard.classList.toggle('active')
    backCard.classList.toggle('active')
})