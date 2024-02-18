const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");
const hisob1 = document.querySelector(".p1");
const hisob2 = document.querySelector(".p2");
const select = document.querySelector("select");
const reset = document.querySelector(".reset");
const body = document.querySelector("body");
const card = document.querySelector(".card");
const options = Array.from(select.querySelectorAll("option")).map((e) => {
  return e.value;
});

let currentValue;

player1.addEventListener("click", () => {
  currentValue = hisob1.textContent;
  currentValue++;
  hisob1.textContent = currentValue;

  const optionsValue = select.value;
  if (currentValue == optionsValue) {
    body.setAttribute("class", "hidden");
    card.classList.add("cards");
  }
});

player2.addEventListener("click", () => {
  let currentValue = hisob2.textContent;
  currentValue++;
  hisob2.textContent = currentValue;

  const optionsValue = select.value;
  if (currentValue == optionsValue) {
    body.setAttribute("class", "hidden");
    card.classList.add("cards");
  }
});

reset.addEventListener("click", () => {
  currentValue = 0;
  hisob1.textContent = currentValue;
  hisob2.textContent = currentValue;
  body.classList.remove("hidden");
  card.classList.remove("cards");
});
