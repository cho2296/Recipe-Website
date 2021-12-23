//before and after search button
let button = document.querySelector('#submit-button');

async function getData (event) {
    event.preventDefault()

    let searchInput = document.querySelector('#input-bar').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;

    document.querySelector('.all-items').style.visibility = "visible";
    document.querySelector('#main-design').style.display = "none";

    fetch(url)
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data);

            //items-container-one
            const recipeNameOne = document.querySelector('#recipe-name-one');
            recipeNameOne.innerText = data.meals[0].strMeal;

            let recipeImageOne = data.meals[0].strMealThumb;
            document.getElementById("urlID-one").src= recipeImageOne;

            const recipeAreaOne = document.querySelector('#recipe-area-one');
            recipeAreaOne.innerText = data.meals[0].strArea;


            //items-container-two
            const recipeNameTwo = document.querySelector('#recipe-name-two');
            recipeNameTwo.innerText = data.meals[1].strMeal;

            let recipeImageTwo = data.meals[1].strMealThumb;
            document.getElementById("urlID-two").src= recipeImageTwo;

            const recipeAreaTwo = document.querySelector('#recipe-area-two');
            recipeAreaTwo.innerText = data.meals[1].strArea;


            //items-container-three
            const recipeNameThree = document.querySelector('#recipe-name-three');
            recipeNameThree.innerText = data.meals[2].strMeal;

            let recipeImageThree = data.meals[2].strMealThumb;
            document.getElementById("urlID-three").src= recipeImageThree;

            const recipeAreaThree = document.querySelector('#recipe-area-three');
            recipeAreaThree.innerText = data.meals[2].strArea;
        })
        .catch(err => {
            console.log("error!", err);
        })
}

button.addEventListener('click', getData);

//first item selected
let individualButtonOne = document.querySelector('#view-button-one');

async function getIndDataOne (event) {
    event.preventDefault()

    let searchInput = document.querySelector('#input-bar').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;

    document.querySelector('.form-popup').style.visibility = "visible";

    fetch(url)
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data);

            document.querySelector('#ind-recipe-name').innerText = data.meals[0].strMeal;

            let replaceImage = data.meals[0].strMealThumb;
            document.getElementById("ind-urlID").src= replaceImage;
            document.getElementById("ind-urlID").style.width = "50%";
            document.getElementById("ind-urlID").style.borderRadius = "5px";

            const recipeInstructions = document.querySelector('#recipe-instructions');
            recipeInstructions.innerText = data.meals[0].strInstructions;
            console.log(recipeInstructions);

            var recipeURL = window.location.href;
            recipeURL = data.meals[0].strYoutube;
            let a = document.getElementById('video-tutorial');
            console.log(a);
            a.href=recipeURL;
        })
        .catch(err => {
            console.log("error!", err);
        })
}

individualButtonOne.addEventListener('click', getIndDataOne);


//second item selected
let individualButtonTwo = document.querySelector('#view-button-two');

async function getIndDataTwo (event) {
    event.preventDefault()

    let searchInput = document.querySelector('#input-bar').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;

    document.querySelector('.form-popup').style.visibility = "visible";

    fetch(url)
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data);

            document.querySelector('#ind-recipe-name').innerText = data.meals[1].strMeal;

            let replaceImage = data.meals[1].strMealThumb;
            document.getElementById("ind-urlID").src= replaceImage;
            document.getElementById("ind-urlID").style.width = "50%";
            document.getElementById("ind-urlID").style.borderRadius = "5px";

            const recipeInstructions = document.querySelector('#recipe-instructions');
            recipeInstructions.innerText = data.meals[1].strInstructions;
            console.log(recipeInstructions);

            var recipeURL = window.location.href;
            recipeURL = data.meals[1].strYoutube;
            let a = document.getElementById('video-tutorial');
            console.log(a);
            a.href=recipeURL;
        })
        .catch(err => {
            console.log("error!", err);
        })
}

individualButtonTwo.addEventListener('click', getIndDataTwo);


//third item selected
let individualButtonThree = document.querySelector('#view-button-three');

async function getIndDataThree (event) {
    event.preventDefault()

    let searchInput = document.querySelector('#input-bar').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;

    document.querySelector('.form-popup').style.visibility = "visible";

    fetch(url)
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data);

            document.querySelector('#ind-recipe-name').innerText = data.meals[2].strMeal;

            let replaceImage = data.meals[2].strMealThumb;
            document.getElementById("ind-urlID").src= replaceImage;
            document.getElementById("ind-urlID").style.width = "50%";
            document.getElementById("ind-urlID").style.borderRadius = "5px";

            const recipeInstructions = document.querySelector('#recipe-instructions');
            recipeInstructions.innerText = data.meals[2].strInstructions;
            console.log(recipeInstructions);

            var recipeURL = window.location.href;
            recipeURL = data.meals[2].strYoutube;
            let a = document.getElementById('video-tutorial');
            console.log(a);
            a.href=recipeURL;
        })
        .catch(err => {
            console.log("error!", err);
        })
}

individualButtonThree.addEventListener('click', getIndDataThree);



//individual item close
let closeButton = document.querySelector('#item-close');

function hidePopUp(event) {
    event.preventDefault();
    document.querySelector('.form-popup').style.visibility = "hidden";
}

closeButton.addEventListener('click', hidePopUp);


//open menu
document.getElementById('menu-hamburger').addEventListener('click', function(){
    console.log('menu opened');
    document.querySelector('.menu-open').style.visibility = "visible";
  })
  
  
  document.getElementById('menu-close').addEventListener('click', function(){
    console.log('menu closed');
    document.querySelector('.menu-open').style.visibility = "hidden";
  })