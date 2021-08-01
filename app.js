// define variables
const btn = document.querySelector('#btn');
// inputs
const job = document.querySelector('#job');
const city = document.querySelector('#location');

const form = document.querySelector('#form');

const API_KEY = 'f3949be83bb6df9c8ce6f1ed94bd50a4'; // ${API_KEY} need to set no-CORS first
const API_URL = 'https://api.adzuna.com/v1/api/jobs/us/search/50?app_id=aed6ce79&app_key=f3949be83bb6df9c8ce6f1ed94bd50a4&results_per_page=10';

// API
fetch(API_URL) // my promise
    .then(response => response.json())
    .then(result => {
    const apiData = result.data

    // create
        const div = document.createElement('div')
        div.innerHTML
        console.log(apiData);
    });







// link to html page
// const myResults = document.getElementById('my-job-result');
//
// myResults.forEach( item => {
//     const divJobs = document.createElement('div')

//     divJobs.innerHTML =
//         `<div class="flex justify-center">
//             <div class="w-1/3 h-52 flex flex-col flex justify-center">
//                 <h4 class="text-sm font-bold">${item.title}</h4>
//                 <p class="text-sm mb-2">${item.location.display_name}</p>
//                 <p class="text-sm mb-2">${item.description}</p>
//                 <p class="text-sm mb-4">${item.created}</p>
//             </div>
//     </div>`
//
//     apiData.appendChild(divJobs)
//
// });
//
// btn.addEventListener('click', () => {
//     myResults.classList.remove('hidden');
// });



// event listener
form.addEventListener('submit', (event) => {
    event.preventDefault();


});


// adding alert
function validate() {
    if(city.value.trim() === '') {
        alert('Please enter City/Town');
        return false;
    } else {
        return true;
    }
}