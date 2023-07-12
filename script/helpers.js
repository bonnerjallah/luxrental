/**
*! DROP DOWN BOX DISPLAY & SEARCH
**/
const rentalOptions = document.getElementById("rentalOptions");
const optionsDisplayBox = document.getElementById("optionsDisplayBox");

if (rentalOptions) {
  rentalOptions.addEventListener("click", () => {
    optionsDisplayBox.classList.toggle("optionsDisplayBoxDisplay");
  });
}


//CAR SELECTION FUNC
if (optionsDisplayBox) {
  optionsDisplayBox.addEventListener('click', function(event) {
    event.preventDefault();

  if (event.target.classList.contains('fleetSelections')) {
    const selection = event.target.innerHTML.toLowerCase();

    fleetGallery.innerHTML = ''; // Clear previous content

    carData.forEach(elem => {
      const { id, year, name, price, engine, transmission, interior, exterior, img } = elem;
      const match = name.toLowerCase().includes(selection);

      if (match) {
        const html = `
        <a href="bigGallery.html?id=${id}"><div id="product-id-${id}" class="imagebox cardItem">
            <img src="${img[0]}" alt="">
            <div class="discriptionbox">
              <div class="discrip">
                <a href="">
                  <div class="nameYear">
                    <p class="year">${year}</p>
                    <p class="name">${name}</p>
                  </div>
                  <div class="priceBox">
                    <p>Starting At</p>
                    <p class="price">$ ${price}</p>
                  </div>
                </a>
              </div>
              <div class="discripTwo">
                <div class="abt">
                  <p>Engine: <span class="engi">${engine}</span></p>
                  <p>Transmission: <span class="trans">${transmission}</span></p>
                  <p>Interior: <span class="inte">${interior}</span></p>
                  <p>Exterior: <span class="exte">${exterior}</span></p>
                </div>
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
                  <input type="email" id="fromEmail" placeholder="Email From*" required>
                  <input type="email" id="sendToEmail" placeholder="Email To*" required>
                  <textarea name="" id="" cols="30" rows="10"></textarea>
                  <div class="attachImg">
                    <input type="checkbox" id="attach">
                    <label for="attach">ATTACH VEHICLE IMAGES</label>
                  </div>
                  <button>SEND</button>
                </form>
              </div>
              <a href="bigGallery"><button class="reservebttn">RESERVE NOW</button></a>
            </div>
          </div></a>
        `;
        
        
        fleetGallery.innerHTML += html;
      
      }
    });
  }
});
}
 
//SORT SELECTION FUNC
const sortBy = document.getElementById("sortBy");
if(sortBy) {
sortBy.addEventListener("change", (e) => {
  const sortOrder = e.target.value === "makea-z" ? 1 : -1;
  const sortedData = carData.sort((a, b) => sortOrder * a.name.localeCompare(b.name));
  fleetGallery.innerHTML = "";

  sortedData.forEach((elem) => {
    const { id, year, name, price, engine, transmission, interior, exterior, img } = elem;
    const html = `
    <a href="bigGallery"><div id="product-id-${id}" class="imagebox cardItem">
        <img src="${img[0]}" alt="">
        <div class="discriptionbox">
          <div class="discrip">
            <a href="">
              <div class="nameYear">
                <p class="year">${year}</p>
                <p class="name">${name}</p>
              </div>
              <div class="priceBox">
                <p>Starting At</p>
                <p class="price">$ ${price}</p>
              </div>
            </a>
          </div>
          <div class="discripTwo">
            <div class="abt">
              <p>Engine: <span class="engi">${engine}</span></p>
              <p>Transmission: <span class="trans">${transmission}</span></p>
              <p>Interior: <span class="inte">${interior}</span></p>
              <p>Exterior: <span class="exte">${exterior}</span></p>
            </div>
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
              <input type="email" id="fromEmail" placeholder="Email From*" required>
              <input type="email" id="sendToEmail" placeholder="Email To*" required>
              <textarea name="" id="" cols="30" rows="10"></textarea>
              <div class="attachImg">
                <input type="checkbox" id="attach">
                <label for="attach">ATTACH VEHICLE IMAGES</label>
              </div>
              <button>SEND</button>
            </form>
          </div>
            <a href="bigGallery"><button class="reservebttn">RESERVE NOW</button></a>
          </div>
        </div>
      </a>
    `;

    fleetGallery.innerHTML += html;
  });
});
}

/**
*! FREQUENTLY ASK QUESTION FUNC
**/

const ansBox = document.querySelectorAll(".ansBox")

const showAnswer = (divId,) => {
  const answer = document.querySelectorAll(".ans")

  for(let i = 0; i < answer.length; i++) {
    let rightAnswer = answer[i]
      
    if(rightAnswer.id === divId) {
      ansBox[i].classList.toggle("ansBoxDisplay")
    }
  }
}
  

/**
*! EXTRACT THE SELECTED ITEM IN THE URL TO POPULATE THE CONTENT ON BIGGALLERY
*/

// Get the value of the 'id' parameter from the URL
const urlParams = new URLSearchParams(window.location.search);
const itemId = urlParams.get("id")

// Use the itemId to display the selected item 
const selectedItem = carData.find((elem) => {
  if (elem.id === itemId) {
    return true;
  }
});
  
if (selectedItem) {
  const galleryWrapper = document.getElementById("galleryWrapper");

  //creat an array of images form selected item images for the url
  const imageUrl = selectedItem.img

  galleryWrapper.innerHTML = `
    <a href="fleet.html"><i class="fa-solid fa-arrow-rotate-left"> Back to showroom</i></a>
    <div class="namebox">
      <div>
        <p id="bigGalleryYear">2021</p>
        <h2 id="bigGalleryName" style="font-size: 3rem;">${selectedItem.name}</h2>
      </div>
      <div id="startAt">
        <p>Rental start at:</p>
        <p id="bigGalleryAmount" style="color: red; font-size: 2.5rem;">$${selectedItem.price}</p>
        <p>Per day</p>
      </div>
    </div>
    <div class="bigPics">
      <img id="bigImage" src=${selectedItem.img} alt="">
      <i id="slideRight" class="fa-regular fa-circle-right"></i>
      <i id="slideLeft" class="fa-regular fa-circle-left"></i>
      <div class="bigGalleryCardLike">
        <div class="cardLike bigGallerylikebuttons">
          <button id="save-${selectedItem.id}" onclick="addToCollection(${selectedItem.id})"><i class="fa-regular fa-heart"></i> Save</button>
          <button onclick="textToPhone(${selectedItem.id})"><i class="fa-regular fa-file-lines"> Text To Phone</i></button>
          <form id="textMsg-${selectedItem.id}" class="textmsg" action="">
            <input type="number" placeholder="1+(---) --- ----" inputmode="numeric required">
            <button style="background-color: red;"><i class="fa-solid fa-arrow-right"></i></button>
          </form>
          <button onclick="share(${selectedItem.id})"><i class="fa-solid fa-at"> Share</i></button>
          <form id="share-${selectedItem.id}" class="share" action="">
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
        <a href="bigGallery"><button class="reservebttn">RESERVE NOW</button></a>
      </div>
    </div>
    <div class="reserveVehicle">
      <p>Bookyour</p>
      <h3>VEHICLE</h3>
      <form id="reservationForm" class="reservationForm" action="">
        <fieldset class="yourInfo">
          <h4>YOUR INFORMATION</h4>
          <input type="text" id="reservFirstName" class="reservName" placeholder="First Name*">
          <input type="text" id="reservlastName" class="reservLastName" placeholder="Last Name*">
          <input type="text" id="reservAddress" class="reservAddress" placeholder="Address*">
          <input type="text" id="reservPhone" class="reservPhone" placeholder="Phone*">
          <input type="email" id="reservEmail" class="reservEmail" placeholder="Emale*">
          <input type="text" id="reservCity" class="reservCity" placeholder="City*">
          <input type="text" id="reservState" class="reservState" placeholder="State*" style="width: 67px;">
        </fieldset>
        <fieldset class="reservRequest">
          <h4>RESERVATION REQUEST</h4>
          <input type="date" id="reserPickUpDate" class="reserPickUpDate" placeholder="Pick Up Date*">
          <input type="date" id="reserDropOffDate" class="reserDropOffDate" placeholder="Drop Off Date*">
          <input type="text" id="vehicleOfIntrest" class="vehicleOfIntrest" placeholder="Vehicle Of Intrest">
          <div class="time">
            <label for="pickUpTime">Pick Up Time</label>
            <input type="time" id="pickUpTime" name="pickUpTime" class="pickUpTime" placeholder="Pick Up Time" style="width: 7rem;">
            <label for="DropOffTime">Drop Off Time</label>
            <input type="time" id="dropOffTime" name="pickUpTime" class="dropOffTime" placeholder="Drop Off Time" style="width: 7rem;">
          </div>
          <br>
          <div class="checkboxLabel">
            <input type="checkbox" name="chaufferService" id="chaufferService" style="width: 1rem;">
            <label for="chaufferService">YES, I NEED CHAUFFER FOR MY TRIP</label>
          </div>
        </fieldset>
        <fieldset class="reservMessage">
          <h4>ADDITIONAL INFORMATION</h4>
          <textarea name="reseravationMessage" id="reseravationMessage" cols="30" rows="10">Message</textarea>
        </fieldset>
        <button style="width: 7rem; margin-top: 10px; height: 2rem; border-radius: 5px; cursor: pointer; color: red;">Submit</button>
      </form>
    </div>
    <div class="specification">
      <div class="abt">
        <p>Vehicle</p>
        <h3>SPECIFICATIONS</h3>
        <p>Engine: <span class="engi">${selectedItem.engine}</span><p>
        <p>Transmission: <span class="trans">${selectedItem.transmission}</span></p>
        <p>Interior: <span class="inte">${selectedItem.interior}</span></p>
        <p>Exterior: <span class="exte">${selectedItem.exterior}</span></p>
      </div>
      <div class="aboutVehicle">
        <p>About</p>
        <h3>THIS VEHICLE</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque voluptate cumque quod doloribus hic, veritatis velit blanditiis numquam nesciunt adipisci magni atque id autem praesentium ex amet obcaecati maxime facere.</p>
      </div>
    </div>
  `;

  //IMAGE DISPLAY 

  const bigImage = document.getElementById("bigImage")
  const slideLeft = document.getElementById("slideLeft")
  const slideRight = document.getElementById("slideRight")

  let currentImageIndex = 0

  // Function to update the gallery image based on the current index

  const updatedImageindex = () => {
    bigImage.src = imageUrl[currentImageIndex]
  }
  updatedImageindex()

  slideRight.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % imageUrl.length;
    updatedImageindex()
  })

  slideLeft.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex - 1 + imageUrl.length) % imageUrl.length
    updatedImageindex()
  })

}  



  

  
  
  
  
  
  

