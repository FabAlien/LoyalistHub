
function burgerFunction() {
  var navigation = document.getElementById("myNavbar");
  if (navigation.className === "navbar") {
    navigation.className += " responsive";
  } else {
    navigation.className = "navbar";
  }
}

let openDiv = null;
const container = document.getElementById("extendContainer");
const card = document.getElementById("cardExtend");

async function getArticle() {
  const response = await fetch("indexArticle.json");
  const data = await response.json();
  return data;
}

async function parseObject(index) {
  const data = await getArticle();
  const articles = data.articles;
  const article = articles[index];
  return article;
}

async function updateArticle(articleNumber) {
  const chosenArticle = await parseObject(articleNumber);
  document.getElementById("articleHeader").innerHTML = chosenArticle.header;
  document.getElementById("articleParagraph0").innerHTML = chosenArticle.para1;
  document.getElementById("articleParagraph1").innerHTML = chosenArticle.para2;
  document.getElementById("articleParagraph2").innerHTML = chosenArticle.para3;
}

function extendInfo() {
  container.classList.add("active");
  console.log("Extended");
}

function hideInfo() {
  container.classList.remove("active");
  console.log("Retracted");
}

async function handleCardClick(event) {
  const cardElement = event.currentTarget;
  const index = cardElement.getAttribute("data-index");
  openDiv = cardElement;

  await updateArticle(index);
  extendInfo();
}

document.querySelectorAll(".cardContainer").forEach(card => {
  card.addEventListener("click", handleCardClick);
});

document.getElementById("buttonExit").addEventListener("click", hideInfo);
document.body.addEventListener("click", (event) => {
  if (
    container.classList.contains("active") &&
    !card.contains(event.target) &&
    openDiv &&
    !openDiv.contains(event.target)
  ) {
    hideInfo();
    console.log("Conditionally retracted");
  }
});