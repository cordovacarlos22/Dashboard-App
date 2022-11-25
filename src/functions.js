//! global 
const userInputUI = document.querySelector("#user-input-city"); //? input from UI to get city
const userInputStateUI = document.querySelector("#user-input-state"); //? input from UI to get State
const sortBy = document.querySelector("#sort-by");//? input form UI to sort-
const minMaxBeds = document.querySelector("#beds");
const formUI = document.querySelector('#form')//? UI FORM 
const printContainerUI = document.querySelector("#print-container");
const minMaxBaths = document.querySelector("#baths");
const searchUI = document.querySelector("#search"); // ? button from html
const fillCompletyUI = document.querySelector("#fillComplety-btn");

//! FUNCTIONS 
//? function to print UI 
export const printResult = (datos) => {
 
  datos.forEach((data) => {
    // console.log(data.thumbnail); //? test data to make sure I am getting to the right path
    printContainerUI.innerHTML += `
    <div class="card">
      <img class="card-thumbnail " src="${data.thumbnail}" / >
      <p class="text-primary">$${data.price} ${data.prop_type}</p>
      <p>${data.beds} bd | ${data.baths} ba | ${data.building_size.size} ${data.building_size.units}</p>
      <span class="text-black-50 fs-6">${data.address.line}, ${data.address.city}, ${data.address.postal_code}, ${data.address.state_code}</span>
      <span class="text-danger"><i class="fa-solid fa-circle"></i> ${data.prop_status}</span>
      <a class="text-decoration-none" href="${data.rdc_web_url}" target="_blank"> Details</a>
    </div>
    
    `;
      // clear input form  after an input 
  userInputUI.value = '';
  userInputStateUI.value = '';
  minMaxBaths.value = '';
  minMaxBeds.value = '';
  });
};

//? FUNCTION TO VALIDATE INPUTS 

export const validateInput = () =>{
    // does not let send form if not fill complete

  if (
    (userInputUI.value === "") |
    (userInputStateUI.value === "") |
    (minMaxBeds.value === "") |
    (minMaxBaths.value === "")
  ) {

  
   searchUI.classList.add("d-none");
   // to show update button.
   fillCompletyUI.classList.remove("d-none");
   
   

   wait()
  
    return;
  }

}
//!  arrow function to wait 3 secons to execute showsearchUI function 

const wait = () => {
  let timeout;
  timeout = setTimeout(showsearchUI, 2000);
};

export const showsearchUI = () =>{
  
  searchUI.classList.remove("d-none");
   // to show update button.
   fillCompletyUI.classList.add("d-none");
   

}
