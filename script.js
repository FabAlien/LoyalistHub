
function burgerFunction() {
  var x = document.getElementById('myNavbar');
  if (x.className === 'navbar') {
    x.className += ' responsive';
  } else {
    x.className = 'navbar';
  }
}



async function getArticle() {
  const response = await fetch("/jsonRepository/articles.json");
  const data = await response.json();
  return data;
}

async function parseObject(index) {
  const data = await getArticle();
  const articles = data.articles;
  const article0 = articles[index];
  return article0;
}

async function updateArticle(articleNumber) {
  const chosenArticle = await parseObject(articleNumber);
  
  document.getElementById("articleHeader").innerHTML = chosenArticle.header;
  document.getElementById("articleParagraph0").innerHTML = chosenArticle.para1;
  document.getElementById("articleParagraph1").innerHTML = chosenArticle.para2;
  document.getElementById("articleParagraph2").innerHTML = chosenArticle.para3;
}