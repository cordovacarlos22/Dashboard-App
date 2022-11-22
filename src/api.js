   async function getHomeList(){
  
   fetch(
     "https://realty-in-us.p.rapidapi.com/properties/list-for-sale?state_code=ca&city= +"userInput"+&offset=0&limit=10",
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
 };

export default getHomeList ;


