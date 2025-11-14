
function burgerFunction() {
  var x = document.getElementById('myNavbar');
  if (x.className === 'navbar') {
    x.className += ' responsive';
  } else {
    x.className = 'navbar';
  }
}


const container = document.getElementById("extendContainer");
const card = document.getElementById("cardExtend");
const openDiv = document.querySelector(".cardContainer");

window.extendInfo = function() {
  container.classList.add("active");
  console.log("Success");
};

window.hideInfo = function() {
  container.classList.remove("active");
  console.log("Success");
};

document.body.addEventListener("click", (event) => {
  if (
    container.classList.contains("active") &&
    !card.contains(event.target) &&
    event.target !== openDiv
  ) {
    hideInfo();
  }
});