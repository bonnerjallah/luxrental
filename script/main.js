// main.js
const data = require('./data');
const helper = require('./helper');

// Your app logic here using data and helper


/***
 * !NAV BAR MODEL
 */
const bookNowBttn = document.getElementById("bookNowBttn")
const bookForm = document.getElementById("bookForm")

bookNowBttn.addEventListener("click", (e) => {
    e.preventDefault()
    bookForm.classList.add("bookFormDisplay")
})

let closebookForm = () => {
    bookForm.classList.remove("bookFormDisplay");
};
closebookForm();


/**
 * !VIP ANIMATIONS
 */
const vipbttnUp = document.getElementById("vipbttnUp");
if(vipbttnUp){
    const observerbttnUp = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                vipbttnUp.classList.add("vipbttn");
            } else {
                vipbttnUp.classList.remove("vipbttn");
            }
        });
    });
    observerbttnUp.observe(vipbttnUp);
}

const businessOrPleasure = document.getElementById("businessOrPleasure");
if(businessOrPleasure) {
    const observerbusinessOrPleasure = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                businessOrPleasure.classList.add("businessOrPleasure");
            } else {
                businessOrPleasure.classList.remove("businessOrPleasure");
            }
        })
    })
    observerbusinessOrPleasure.observe(businessOrPleasure)
}   


const blankBox = document.getElementById("blankBox")
if(blankBox) {
    const observerblankBox = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                blankBox.classList.add("blankBox")
            } else {
                blankBox.classList.remove("blankBox")
            }
        })
    })
    observerblankBox.observe(blankBox)
}

const tie = document.getElementById("tie");
if(tie) {
    const observeTie = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                tie.classList.add("tie")
            } else{
                tie.classList.remove("tie")
            }
        })
    })
    observeTie.observe(tie)
}

const chauffeur = document.getElementById("chauffeur");
if(chauffeur) {
    const observechauffeur = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                chauffeur.classList.add("chauffeur")
            } else {
                chauffeur.classList.remove("chauffeur")
            }
        })
    })
    observechauffeur.observe(chauffeur)
}


/**
 * !SCROLL BAR FUNC
 */
const scrollLeft = document.getElementById("scrollLeft");
const scrollRight = document.getElementById("scrollRight");

if(scrollLeft){
    scrollLeft.addEventListener("click", (e) => {
        e.preventDefault();
        ScrollLeft();
    });
}

if(scrollRight) { 
    scrollRight.addEventListener("click", (e) => {
        e.preventDefault();
        ScrollRight();
    });
}

function ScrollLeft() {
    let fleetGallery = document.getElementById("fleetGallery");
    fleetGallery.scrollTo({
        left: fleetGallery.scrollLeft - 390,
        behavior: "smooth"
    });
}

function ScrollRight() {
    let fleetGallery = document.getElementById("fleetGallery");
    fleetGallery.scrollTo({
        left: fleetGallery.scrollLeft + 390,
        behavior: "smooth"
    });
}

/**
 *!DISPLAY SCROLL BAR
**/
let fleetGallery = document.getElementById("fleetGallery");

let GenerateCarDataPic = () => {
    let fleetGallery = document.getElementById('fleetGallery');  // Ensure the gallery container exists
    if (!fleetGallery) return;  // Stop if the element doesn't exist

    let carDataCard = carData.map((elem) => {
        let { id, img, year, name, price, exterior, interior, transmission, engine } = elem;

        // Create the HTML structure
        let card = document.createElement('div');
        card.classList.add('imagebox', 'cardItem');
        card.id = `product-id-${id}`;

        let imgElement = document.createElement('img');
        imgElement.src = img[0];  // First image from the array
        imgElement.alt = name;

        let descriptionBox = document.createElement('div');
        descriptionBox.classList.add('discriptionbox');

        let description = document.createElement('div');
        description.classList.add('discrip');
        
        let nameYearDiv = document.createElement('div');
        nameYearDiv.classList.add('nameYear');
        
        let yearElement = document.createElement('p');
        yearElement.classList.add('year');
        yearElement.textContent = year;
        
        let nameElement = document.createElement('p');
        nameElement.classList.add('name');
        nameElement.textContent = name;

        nameYearDiv.appendChild(yearElement);
        nameYearDiv.appendChild(nameElement);

        let priceBoxDiv = document.createElement('div');
        priceBoxDiv.classList.add('priceBox');
        
        let priceText = document.createElement('p');
        priceText.textContent = 'Starting At';
        
        let priceElement = document.createElement('p');
        priceElement.classList.add('price');
        priceElement.textContent = `$ ${price}`;

        priceBoxDiv.appendChild(priceText);
        priceBoxDiv.appendChild(priceElement);

        description.appendChild(nameYearDiv);
        description.appendChild(priceBoxDiv);

        let descriptionTwo = document.createElement('div');
        descriptionTwo.classList.add('discripTwo');
        
        let abtDiv = document.createElement('div');
        abtDiv.classList.add('abt');

        let engineElement = document.createElement('p');
        engineElement.innerHTML = `Engine: <span class="engi">${engine}</span>`;
        
        let transmissionElement = document.createElement('p');
        transmissionElement.innerHTML = `Transmission: <span class="trans">${transmission}</span>`;
        
        let interiorElement = document.createElement('p');
        interiorElement.innerHTML = `Interior: <span class="inte">${interior}</span>`;
        
        let exteriorElement = document.createElement('p');
        exteriorElement.innerHTML = `Exterior: <span class="exte">${exterior}</span>`;

        abtDiv.appendChild(engineElement);
        abtDiv.appendChild(transmissionElement);
        abtDiv.appendChild(interiorElement);
        abtDiv.appendChild(exteriorElement);

        descriptionTwo.appendChild(abtDiv);

        descriptionBox.appendChild(description);
        descriptionBox.appendChild(descriptionTwo);

        let reserveDiv = document.createElement('div');
        reserveDiv.classList.add('reserve');

        let reserveButton = document.createElement('a');
        reserveButton.href = `bigGallery.html?id=${id}`;
        let reserveBtnElement = document.createElement('button');
        reserveBtnElement.classList.add('reservebttn');
        reserveBtnElement.textContent = 'RESERVE NOW';
        reserveButton.appendChild(reserveBtnElement);

        reserveDiv.appendChild(reserveButton);

        card.appendChild(imgElement);
        card.appendChild(descriptionBox);
        card.appendChild(reserveDiv);

        return card;
    });

    // Append each car card to the gallery container
    fleetGallery.innerHTML = '';  // Clear previous content
    carDataCard.forEach(card => fleetGallery.appendChild(card));
};

// Call the function to generate the cards
if (document.getElementById('fleetGallery')) {
    GenerateCarDataPic();
}



/**
* ! SHOPBASKET, LIKE, TEXT AND SHARE FUNCS
*/
let basket = JSON.parse(localStorage.getItem("data")) || []

// LIKE BUTTON FUNCS
let addToCollection = (id) => {
    let selectedItem = id;
    let search = basket.find((elem) => elem.id === id);
    let save = document.getElementById(`save-${id}`);

    if (search === undefined) {
        basket.push({
            id: selectedItem,
            item: 1,
        });
        save.style.color = "red";
    } else {
        let index = basket.indexOf(search);
        basket.splice(index, 1);
        save.style.color = "white";
    }

    localStorage.setItem("data", JSON.stringify(basket))

    calcAmount()
};

let calcAmount = () => {
    const totalAmount = document.getElementById("totalAmount");

    if(basket.length === 0){
        totalAmount.innerHTML = ""
    } else {
        totalAmount.innerHTML = basket.map((elem) => elem.item).reduce((prev, curr) => prev + curr,0)
    }
}

// Set the 'Save' button styles after the page has fully loaded
window.addEventListener("load", () => {
    basket.forEach((item) => {
        let save = document.getElementById(`save-${item.id}`);
        save.style.color = "red";
    });
});

calcAmount()

// TEXT BUTTON FUNCS

let textToPhone = (id) => {
  let textMsg = document.getElementById(`textMsg-${id}`);
  textMsg.classList.toggle("textmsgDisplay");
};

// SHARE BY EMAIL

let share = (id) => {
    let shareForm = document.getElementById(`share-${id}`);
    shareForm.classList.toggle("shareDisplay");
};


/***
* ! MAP GEO LOCATION API
*/

function initMap() {
    let option = {
        zoom: 11,
        center: {lat: 35.1340053, lng: -81.0202533}
    }

    const map = document.getElementById("map");
    if (map) {
        const googleMap = new google.maps.Map(map, option);

        let marker = new google.maps.Marker({
            position: {lat: 35.220592, lng: -80.85156},
            map: googleMap
        });

        let infoWindow = new google.maps.InfoWindow({
            content: '<h1>1212 Address St</h1>'
        });

        marker.addListener("click", function() {
            infoWindow.open(googleMap, marker);
        });
    }
}
initMap(); 