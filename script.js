
function burgerFunction() {
  var navigation = document.getElementById("myNavbar");
  if (navigation.className === "navbar") {
    navigation.className += " responsive";
  } else {
    navigation.className = "navbar";
  }
}


const container = document.getElementById("extendContainer");
const card = document.getElementById("cardExtend");
const openDiv = document.querySelector(".cardContainer");

window.extendInfo = function() {
  container.classList.add("active");
};

window.hideInfo = function() {
  container.classList.remove("active");
};

document.body.addEventListener("click", (event) => {
  if (
    container.classList.contains("active") &&
    !card.contains(event.target) &&
    !openDiv.contains(event.target)
  ) {
    hideInfo();
  }
});