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
    let carDataCard = carData.map((elem) => {
        let {id, img, year, name, price, exterior, interior, transmission, engine } = elem;
        return `
        <a href="bigGallery.html?id=${id}"><div id="product-id-${id}" class="imagebox cardItem">
                <img src=${img[0]} alt="">
                <div class="discriptionbox">
                    <div class="discrip"><a href="bigGallery.html?id=${id}">
                        <div class="nameYear">
                            <p class="year">${year}</p>
                            <p class="name">${name}</p>
                        </div> 
                        <div class="priceBox">
                            <p>Starting At</p>
                            <p class="price">$ ${price}</p>   
                        </div>                   
                    </div>
                    <div class="discripTwo">
                        <div class="abt">
                            <p>Engine: <span class="engi">${engine}</span><p>
                            <p>Transmission: <span class="trans">${transmission}</span></p>
                            <p>Interior: <span class="inte">${interior}</span></p>
                            <p>Exterior: <span class="exte">${exterior}</span></p>
                        </div></a>
                    </div>
                </div>
                <div class="reserve">
                    <div class="cardLike">
                        <button id="save-${id}" onclick="addToCollection(${id})"><i class="fa-regular fa-heart"></i> Save</button>
                        <button onclick="textToPhone(${id})"><i class="fa-regular fa-file-lines"> Text To Phone</i></button>
                        <form id="textMsg-${id}" class="textmsg" action="">
                            <input type="number" placeholder="1+(---) --- ----" inputmode="numeric required">
                            <button style="background-color: red;"><i class="fa-solid fa-arrow-right"></i></button>
                        </form>
                        <button onclick="share(${id})"><i class="fa-solid fa-at"> Share</i></button>
                        <form id="share-${id}" class="share" action="">
                            <input type="emal" id="fromEmail" placeholder="Email From*" required>
                            <input type="emal" id="sendToEmail" placeholder="Email To*" required>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                            <div class="attachImg">
                                <input type="checkbox" id="attach"> 
                                <label for="attach">ATTACH VEHICLE IMAGES</label>
                            </div>
                            <button>SEND</button>
                        </form>
                        </div>
                            <a href="bigGallery.html?id=${id}"><button class="reservebttn">RESERVE NOW</button></a>
                        </div>
                    </div>
                </div>               
            </div></a>
        `;
    })
    .join("");

    fleetGallery.innerHTML = carDataCard;

};
if(fleetGallery) {
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