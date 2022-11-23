async function getListing(){



const options = {
  method: "GET",
  url: "https://realty-in-us.p.rapidapi.com/properties/v2/list-for-sale",
  params: {
    city: "New York City",
    state_code: "NY",
    offset: "0",
    limit: "10",
    sort: "relevance",
  },
  headers: {
    "X-RapidAPI-Key": "d4fc518e26msh30c554e610cfda0p11e0c1jsn3fbb7b26b0c5",
    "X-RapidAPI-Host": "realty-in-us.p.rapidapi.com",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });


};

 getListing();

 export default getListing;