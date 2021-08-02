// define variables
const btn = document.querySelector('#btn');
// inputs
const job = document.querySelector('#job');
const city = document.querySelector('#location');

const form = document.querySelector('#form');

const API_KEY = 'f3949be83bb6df9c8ce6f1ed94bd50a4'; // ${API_KEY} need to set no-CORS first
const API_URL = 'https://api.adzuna.com/v1/api/jobs/us/search/50?app_id=aed6ce79&app_key=f3949be83bb6df9c8ce6f1ed94bd50a4&results_per_page=10';

const resultsDataSection = document.querySelector('#my-job-result')

// API
fetch(API_URL) // my promise
    .then(response => response.json())
    .then(result => {

        const apiData = result.results;

        apiData.forEach(aResult => {

        // Start: create the single div (component)
        const resultsInnerDiv = document.createElement('div')
        resultsInnerDiv.innerHTML =
            `<div class="w-1/3 h-28 flex flex-col justify-center ml-5 bg-blue-300">
                   <h4 class="text-sm font-bold">${aResult['title']}</h4>
                    <p class="text-sm">${aResult['company']['display_name']}</p>
                    <p class="text-sm">${aResult['location']['display_name']}</p>
                    <p class="text-sm mb-2">${aResult['created']}</p>
            </div>`

        resultsDataSection.appendChild(resultsInnerDiv)
        // End component
        })

        console.log(apiData);
    });

// btn.addEventListener('click', () => {
//     resultsDataSection.classList.remove('hidden');
// });

// event listener
// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//
//
// });

// adding alert
// function validate() {
//     if(city.value.trim() === '') {
//         alert('Please enter City/Town');
//         return false;
//     } else {
//         return true;
//     }
// }