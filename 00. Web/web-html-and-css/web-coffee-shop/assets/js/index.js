const burgerIcon = document.getElementById("burger-icon");
const navigation = document.getElementById("nav-bar");

burgerIcon.addEventListener("click", openNav);

function openNav(){
    if (navigation.style.display==="none") {
        navigation.style.display="flex";
    } else {
        navigation.style.display="none";
    }
}
