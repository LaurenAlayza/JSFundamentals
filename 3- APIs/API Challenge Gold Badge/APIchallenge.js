const nasaUrl = 'https://api.nasa.gov/planetary/apod?api_key=cD5pQgQIO0sD9sllj1DbqD3n7LYHO8xKE9f3K0sW';

let searchButton = document.querySelector("#search")

//Add an event listener to the button that runs the function sendApiRequest when it is clicked
searchButton.addEventListener("click", ()=>{
  console.log("button pressed")
  sendApiRequest()
})


//An asynchronous function to fetch data from the API.
async function sendApiRequest(){ //sending a request and waiting for data to come back
  let api_key = "cD5pQgQIO0sD9sllj1DbqD3n7LYHO8xKE9f3K0sW";
  let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${api_key}`); //send API request in this function
  console.log(response)
  let data = await response.json() //get the data out of the response
  console.log(data)
  useApiData(data)
}


//function that does something with the data received from the API. The name of the function should be customized to whatever you are doing with the data
function useApiData(data){
  document.querySelector('#content').innerHTML += data.explanation
  document.querySelector('#content').innerHTML += `<iframe src="${data.url}">`
}





// const date = document.querySelector('date');
// const explanation = document.querySelector('explanation');
// const mediaType = document.querySelector('media_type');
// const title = document.querySelector('title');
// const url = document.querySelector('url');

// function fetchResults(e) {
//     e.preventDefault();

// fetch('https://api.nasa.gov/planetary/apod?api_key=cD5pQgQIO0sD9sllj1DbqD3n7LYHO8xKE9f3K0sW')
// .then(response => {
//     return response.json()
// })
// .then(data => {
//     console.log(data)
// })
// .catch(err => {
//     console.log(alert(err))
// });

// function displayResults(json) {
//     console.log("DisplayResults", json);

// }

// //for each in loop to iterate over the values of an object's properties, rather than the property names themselves:
// for each(title in nasaUrl) {

// }