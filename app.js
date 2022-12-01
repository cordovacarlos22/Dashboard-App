//! modules 

import { printResult} from "./functions.js";
import {validateInput} from "./functions.js";
import {inputInvalid}  from "./functions.js";

//! GLOBAL
const ctx = document.getElementById("myChart");
const userInputUI = document.querySelector("#user-input-city"); //? input from UI to get city
const userInputStateUI = document.querySelector("#user-input-state"); //? input from UI to get State
const sortBy = document.querySelector("#sort-by");//? input form UI to sort-
const minMaxBeds = document.querySelector("#beds");
const minMaxBaths = document.querySelector("#baths");
const searchUI = document.querySelector("#search"); // ? button from html
const formUI = document.querySelector('#form')//? UI FORM 




//! event listener

searchUI.addEventListener("click", async function getHomeList() {
  validateInput();

  const options = await {
    method: "GET",
    url: "https://realty-in-us.p.rapidapi.com/properties/v2/list-for-sale",
    params: {
      city: `${userInputUI.value}`,
      state_code: `${userInputStateUI.value}`,
      offset: "0",
      limit: "6",
      sort: "relevance",
      beds_max: `${minMaxBeds.value}`,
      baths_max: `${minMaxBaths.value}`,
    },
    headers: {
      "X-RapidAPI-Key": "d4fc518e26msh30c554e610cfda0p11e0c1jsn3fbb7b26b0c5",
      "X-RapidAPI-Host": "realty-in-us.p.rapidapi.com",
    },
  };

    axios
    .request(options)
    .then(function (response) {
    console.log(response.data.properties);
    printResult(response.data.properties);
      new Chart(ctx, {
        type: "bar",
        data: {
          labels: [
            response.data.properties[0].address.line,
            response.data.properties[1].address.line,
            response.data.properties[2].address.line,
            response.data.properties[3].address.line,
            response.data.properties[4].address.line,
            response.data.properties[5].address.line,
          ],
          datasets: [
            {
              label: "Price Comparison",
              data: [
                response.data.properties[0].price,
                response.data.properties[1].price,
                response.data.properties[2].price,
                response.data.properties[3].price,
                response.data.properties[4].price,
                response.data.properties[5].price,
              ],
              backgroundColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    
    
    })
    .catch(function (error) {
      console.error(error);
    //  inputInvalid();
   
    });

    
});




