//! modules 

//! GLOBAL
const userInputUI = document.querySelector("#user-input-city"); //? input from UI to get city
const userInputStateUI = document.querySelector("#user-input-state"); //? input from UI to get State
const sortBy = document.querySelector("#sort-by");//? input form UI to sort-
const minMaxBeds = document.querySelector("#beds");
const searchUI = document.querySelector("#search"); // ? button from html
const formUI = document.querySelector("#form");
const printContainerUI = document.querySelector("#print-container");

//! event listener

searchUI.addEventListener("click", async function getHomeList() {
  const options = await {
    method: "GET",
    url: "https://realty-in-us.p.rapidapi.com/properties/v2/list-for-sale",
    params: {
      city: `${userInputUI.value}`,
      state_code: `${userInputStateUI.value}`,
      offset: "0",
      limit: "9",
      sort: "relevance",
      beds_min: `${minMaxBeds.value}`,
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
    })
    .catch(function (error) {
      console.error(error);
    });

    
});




const printResult = (datos) => {
  datos.forEach((data) => {
    // console.log(data.thumbnail); //? test data to make sure I am getting to the right path
    printContainerUI.innerHTML += `
    <div class="card">
      <img class="card-thumbnail " src="${data.thumbnail}" / >
      <p class="text-primary">$${data.price} ${data.prop_type}</p>
      <p>${data.beds} beds - ${data.baths} baths</p>
      <span class="text-black-50">${data.address.line}, ${data.address.city}, ${data.address.postal_code}, ${data.address.state_code} </span>
      <a href="${data.rdc_web_url}" target="_blank">Details</a>
    </div>
    
    
    `;
    
  });
};



