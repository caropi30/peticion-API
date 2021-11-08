
let searchFilm = document.getElementById('searchFilm');
let btnSearch = document.getElementById('btnSearch');
let film;
let titles = '';


//let year;

//Input info
function getSearchFilm() {
    console.log(searchFilm.value);

    film = searchFilm.value;
};


function validateFilmInput(){
    let film2;
    if (film === ''){
        console.log('Debes ingresar una película');
    } 
    else {
        console.log(searchFilm.value);
    }
};

let filmInput = validateFilmInput();

//Api request
async function apiRequest() {
    try {
        const response =  await fetch(`https://imdb-api.com/API/Top250Movies/k_0m51kds1`);
        const data = await response.json();
        let filmApiRequest = data.items;
        let title = '';
   
        for (let i = 0; i < filmApiRequest.length; i++) {
                console.log(title += filmApiRequest[i].fullTitle + ',');
        };

        titles = title.split(',');
        console.log(typeof(titles));

        let fullTitleList = Object.values(titles);
        console.log(fullTitleList);
        console.log(typeof(fullTitleList));
        
    }
    catch (error){
        console.log('La película ingresada no coincide con nuestra base de datos');
    }
}

/*function apiRequest(){
    fetch('https://imdb-api.com/en/API/SearchTitle/git k_0m51kds1')
     .catch(error => console.log(error))
      .then(response => response.json())
      .then(data => console.log(data));
      
}*/


function inputAndApiInfoValidation(){
    if (filmInput === title) {
        localStorage.setItem('Title', title);
        localStorage.setItem('Year', year);
    }
    else {
        console.log('La película ingresada no coincide con nuestra base de datos');
    }

};

function filmSave(){
    getSearchFilm();
    validateFilmInput();
    apiRequest();
    //inputAndApiInfoValidation();
};

btnSearch.addEventListener('click', filmSave);