//! GLOBAL
const userInputUI = document.querySelector("#user-input").value; //? input from html
const searchUI = document.querySelector("#search"); // ? button from html
const formUI = document.querySelector("#form");
const printContainerUI = document.querySelector("#print-container");

//! event listener

searchUI.addEventListener("click", getHomeList());

async function getHomeList() {
  let userInput = userInputUI.value;
  fetch(
    "https://realty-in-us.p.rapidapi.com/properties/list-for-sale?state_code=ca&city= " +
      userInput +
      "&offset=0&limit=10",
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "d4fc518e26msh30c554e610cfda0p11e0c1jsn3fbb7b26b0c5",
        "X-RapidAPI-Host": "realty-in-us.p.rapidapi.com",
      },
    }
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}
