// // Axios is a popular NPM package used for preforming API requests
// import axios from 'axios';

// console.log("Iam here dude.............................................")
// const userName = "anthogr45"
// // Using axios, we create a search method that is specific to our use case and export it at the bottom
// const search = () =>

// // console.log("Iam here dude............................................." + query)
// //   axios.get(`https://api.giphy.com/v1/gifs/search?q=${query}$&api_key=zGTBO65XtIkTWFiBcgVCxJX7x8FveHfA&limit=20`);
//   axios.get(`https://api.github.com/search/users?q=${userName}`);

// // Export an object with a "search" method that searches the Giphy API for the passed query
// export default search;


import axios from 'axios';

// const search = () => {
//   const userName = "anthogr45";
//   return axios.get(`https://api.github.com/search/users?q=${userName}`)
//     .then(response => response.data.items)
//     .catch(error => {
//       console.error(error);
//       return [];
//     });


const userName = "anthogr45";
const search = () =>
  axios.get(`https://api.github.com/search/users?q=${userName}/repos`);



export default search;