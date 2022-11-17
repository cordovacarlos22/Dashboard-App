//! GLOBAL 
const userInputUI = document.querySelector("#user-input");//? input from html
const searchUI = document.querySelector("#search"); // ? button from html
const formUI = document.querySelector('#form');
const printContainerUI = document.querySelector("#print-container");

const fetch = require('node-fetch');

const url = 'https://realty-in-us.p.rapidapi.com/locations/v2/auto-complete?input=california&limit=10';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'd4fc518e26msh30c554e610cfda0p11e0c1jsn3fbb7b26b0c5',
    'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
  }
};

fetch(url, options)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));