/**
*! DROP DOWN BOX DISPLAY & SEARCH
**/
const rentalOptions = document.getElementById("rentalOptions");
const optionsDisplayBox = document.getElementById("optionsDisplayBox");

rentalOptions.addEventListener("click", () => {
    optionsDisplayBox.classList.toggle("optionsDisplayBoxDisplay");
});


//CAR SELECTION FUNC
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
          <div id="product-id-${id}" class="imagebox cardItem">
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
              <button class="reservebttn">RESERVE NOW</button>
            </div>
          </div>
        `;
        
        fleetGallery.innerHTML += html;
      }
    });
  }
});
 

//SORT SELECTION FUNC
const sortBy = document.getElementById("sortBy");
sortBy.addEventListener("change", (e) => {
  const sortOrder = e.target.value === "makea-z" ? 1 : -1;
  const sortedData = carData.sort((a, b) => sortOrder * a.name.localeCompare(b.name));
  fleetGallery.innerHTML = "";

  sortedData.forEach((elem) => {
    const { id, year, name, price, engine, transmission, interior, exterior, img } = elem;
    const html = `
      <div id="product-id-${id}" class="imagebox cardItem">
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
          <button class="reservebttn">RESERVE NOW</button>
        </div>
      </div>
    `;

    fleetGallery.innerHTML += html;
  });
});

  
  
  
  
  
  

  
  
  
  
  
  

