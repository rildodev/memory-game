const input = document.querySelector(".login__input"); /* captura input */
const button = document.querySelector(".login__buttton"); /* captura botão */
const form = document.querySelector(".login__form");

const validateInput = ({ target }) => {
  if (target.value.length > 2) {
    button.removeAttribute(
      "disabled"
    ); /* enable button with more 3 caracters */
  } else {
    button.setAttribute(
      "disabled",
      true
    ); /* disabled button with less 3 caracters */
  }
};

const handleSubmit = (event) => {
  event.preventDefault(); /* bloqueia recarregamento de page */

  localStorage.setItem("Player", input.value); /* salva dados no navegador */

  window.location = "./assets/pages/game.html";
};

input.addEventListener("input", validateInput);
form.addEventListener("submit", handleSubmit);
