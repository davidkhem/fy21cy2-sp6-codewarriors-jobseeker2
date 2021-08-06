// define variables
const btn = document.querySelector('#btn');
// inputs
const jobs = document.querySelector('#job');
const city = document.querySelector('#location');

const form = document.querySelector('#form');

// const API_KEY = 'f3949be83bb6df9c8ce6f1ed94bd50a4'; // ${API_KEY} need to set no-CORS first to fetch
// const DEFAULT_PER_PAGE = 10; // ${DEFAULT_PER_PAGE} need to set no-CORS first to fetch
// const DEFAULT_START_PAGE = 1; // ${DEFAULT_START_PAGE} need to set no-CORS first to fetch

const API_URL = 'https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=aed6ce79&app_key=f3949be83bb6df9c8ce6f1ed94bd50a4&results_per_page=10&where=Massachusetts&sort_by=date';

// Using concatenating
const job = '&what=';
// const softwareInput = 'software%20engineer';
// const accountingInput = 'accounting';

const resultsDataSection = document.querySelector('#my-job-result')

const filterSelect = document.querySelector('#filter-category')

filterSelect.addEventListener('change', ()=> {
        const selectedOption = filterSelect.value;
        const jobResults = API_URL+job+selectedOption;

fetch(jobResults) // my promise
    .then(response => response.json())
    .then(result => {

            const apiData = result.results;

            apiData.forEach(aResult => {

                    // Start: create the single div (component)
                    const resultsInnerDiv = document.createElement('div')


                    resultsInnerDiv.innerHTML =
                        `<div class="flex flex-col justify-center w-2/3 h-40 ml-10 mb-2 p-1 text-black text-sm border-2">
                   <h4 class="text-sm font-bold">${aResult['title']}</h4>
                    <p>${aResult['company']['display_name']}</p>
                    <p>${aResult['location']['display_name']}</p>
                    <p>${aResult['created']}</p>

                    <p class="text-blue-400 mb-2">
                        <a href="mailto:?subject=Interested in the ${aResult['title']} position
                        &body=I want to applied to the position.">Email a Friend</a>
                    </p>
                    <p><input class="mr-1" id="${aResult['index']}-btn" type="radio" value="Save">Save</input></p>
                    </div>`

                    resultsDataSection.appendChild(resultsInnerDiv)
                    // End component
            })
            console.log(apiData);
    });
});

// btn.addEventListener('click', () => {
//     resultsDataSection.classList.remove('hidden');
// });

// event listener
// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     if ()
// });