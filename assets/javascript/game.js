/* const title = document.querySelector(".title__game");

const valor =
  localStorage.getItem(
    "Player"
  ); /* recupera o valor armazenado no local Starage */

/* title.innerHTML = valor; */

const grid = document.querySelector(".grid");

const personagens = [
  "beth",
  "jerry",
  "jessica",
  "morty",
  "pessoa-passaro",
  "pickle-rick",
  "rick",
  "summer",
  "meeseeks",
  "scroopy",
];

const createElement = (tag, className) => {
  const element = document.createElement(tag); /* criando a div */
  element.className = className; /* inserindo uma classe na div criada */
  return element;
};

let firstCard = "";
let secondCard = "";

const checkEndGame = () => {
  const disableCards = document.querySelectorAll(".disabled-card");

  if (disableCards.length == 20) {
    alert("Você venceu!");
  }
};

const checkCards = () => {
  const firstPersonagem = firstCard.getAttribute("data-personagem");
  const secondPersonagem = secondCard.getAttribute("data-personagem");

  if (firstPersonagem == secondPersonagem) {
    firstCard.firstChild.classList.add("disabled-card");
    secondCard.firstChild.classList.add("disabled-card");

    firstCard = "";
    secondCard = "";

    checkEndGame();
  } else {
    setTimeout(() => {
      firstCard.classList.remove("reveal-card");
      secondCard.classList.remove("reveal-card");

      firstCard = "";
      secondCard = "";
    }, 500);
  }
};

const revelCard = ({ target }) => {
  if (target.parentNode.className.includes("reveal-card")) {
    /* verifica se a carta já foi virada, se foi, mantem a carta travada */
    return;
  }

  if (firstCard == "") {
    target.parentNode.classList.add("reveal-card");
    firstCard = target.parentNode;
  } else if (secondCard == "") {
    target.parentNode.classList.add("reveal-card");
    secondCard = target.parentNode;

    checkCards();
  }
};

const creatCard = (personagem) => {
  const card = createElement(
    "div",
    "card"
  ); /* criando a div através da função CreateElement*/
  const front = createElement("div", "face front");
  const back = createElement("div", "face back");

  /* inserindo personagem na face da carta */
  front.style.backgroundImage = `url('../images/${personagem}.png')`;

  /* inserindo a div front/back na div card */
  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener("click", revelCard);
  card.setAttribute("data-personagem", personagem);

  return card;
};

const loadingGame = () => {
  const duplicatePersonagens = [
    ...personagens,
    ...personagens,
  ]; /* duplica o array de personagens */

  const embaralherPersonagens = duplicatePersonagens.sort(
    () => Math.random() - 0.5
  ); /* embaralha as cartas */
  embaralherPersonagens.forEach((personagem) => {
    const card = creatCard(personagem);
    grid.appendChild(card);
  });
};

loadingGame();
