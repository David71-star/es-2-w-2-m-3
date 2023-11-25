let firstCard = [
  {
    titolo: "Las Vegas",
    immagine: "Assets/lasvegas.jpg",
  },
  {
    titolo: "Madrid",
    immagine: "Assets/madrid.webp",
  },
  {
    titolo: "Tokyo",
    immagine: "Assets/tokyo.jpg",
  },
  {
    titolo: "New York",
    immagine: "Assets/newyork.jpg",
  },
];
let secondCard = [
  {
    titolo: "Ibiza",
    immagine: "Assets/ibiza.jpg",
  },
  {
    titolo: "Canarie",
    immagine: "Assets/canarie.jpg",
  },
  {
    titolo: "Bahamas",
    immagine: "Assets/bahamas.jpg",
  },
  {
    titolo: "Caraibi",
    immagine: "Assets/caraibi.jpg",
  },
  {
    titolo: "Bora-Bora",
    immagine: "Assets/borabora.webp",
  },
  {
    titolo: "Sardegna",
    immagine: "Assets/sardegna.webp",
  },
];
let feedBack = [
  {
    persona: "Mario Verdi",
    commento:
      "Ho avuto il piacere di vivere un'esperienza straordinaria e memorabile con DHC Travel.",
  },
  {
    persona: "Sofia Calante",
    commento:
      "La qualità del servizio è stata altrettanto deludente. Ho riscontrato problemi con i biglietti",
  },
  {
    persona: "Jordan Black",
    commento: "Ottima agenzia viaggi consigliatissima",
  },
];
let lastMinute = [
  {
    titolo: "Firenze",
    immagine: "Assets/firenze.jpg",
  },
  {
    titolo: "Venezia",
    immagine: "Assets/venezia.jpg",
  },
  {
    titolo: "Milano",
    immagine: "Assets/milano.jpg",
  },
  {
    titolo: "Napoli",
    immagine: "Assets/napoli.png",
  },
  {
    titolo: "Roma",
    immagine: "Assets/roma.webp",
  },
];

let contenitoreCard = document.querySelector("#holidayCard");
let contenitoreCardDue = document.querySelector("#holidayCardDue");
let contenitoreCardTre = document.querySelector("#holidayCardTre");
let contenitoreCardQuattro = document.querySelector(".carousel-inner");

let cardSetUno = function () {
  for (let i = 0; i < firstCard.length; i++) {
    if (i === 2) {
      contenitoreCard.innerHTML += `<div class=" col-6 col-md-4 col-lg-3 d-none d-md-block">
        <div class="card rounded-top-5">
            <img src="${firstCard[i].immagine}" 
            class="card-img-top rounded-top-5 object-fit-cover" style="aspect-ratio: 1/1";">
            <div class="card-body p-0">
            <h3 class="card-text p-2 rounded-bottom-2 text-nowrap fs-5">${firstCard[i].titolo}</h3>
            </div>
        </div>
    </div>`;
    } else if (i === 3) {
      contenitoreCard.innerHTML += `<div class=" col-6 col-md-4 col-lg-3 d-none d-lg-block">
        <div class="card rounded-top-5">
            <img src="${firstCard[i].immagine}" 
            class="card-img-top rounded-top-5 object-fit-cover" style="aspect-ratio: 1/1";">
            <div class="card-body p-0">
            <h3 class="card-text p-2 rounded-bottom-2 text-nowrap fs-5">${firstCard[i].titolo}</h3>
            </div>
        </div>
    </div>`;
    } else {
      contenitoreCard.innerHTML += `<div class=" col-6 col-md-4 col-lg-3">
        <div class="card rounded-top-5">
            <img src="${firstCard[i].immagine}" 
            class="card-img-top rounded-top-5 object-fit-cover" style="aspect-ratio: 1/1";">
            <div class="card-body p-0">
            <h3 class="card-text p-2 rounded-bottom-2 text-nowrap fs-5">${firstCard[i].titolo}</h3>
            </div>
        </div>
    </div>`;
    }
  }
};
cardSetUno();
let cardSetDue = function () {
  for (let i = 0; i < secondCard.length; i++) {
    if (i === 2) {
      contenitoreCardDue.innerHTML += `<div class="col-6 col-md-4 col-lg-2 d-none d-md-block my-5">
          <div class="card rounded-top-5">
              <img src="${secondCard[i].immagine}" 
              class="card-img-top rounded-top-5 object-fit-cover" style="aspect-ratio: 1/1";">
              <div class="card-body p-0">
              <h3 class="card-text p-2 rounded-bottom-2 text-nowrap fs-4">${secondCard[i].titolo}</h3>
              </div>
          </div>
      </div>`;
    } else if (i === 3 || i === 4 || i === 5) {
      contenitoreCardDue.innerHTML += `<div class="col-6 col-md-4 col-lg-2 d-none d-lg-block my-5">
          <div class="card rounded-top-5">
              <img src="${secondCard[i].immagine}" 
              class="card-img-top rounded-top-5 object-fit-cover" style="aspect-ratio: 1/1";">
              <div class="card-body p-0">
              <h3 class="card-text p-2 rounded-bottom-2 text-nowrap fs-4">${secondCard[i].titolo}</h3>
              </div>
          </div>
      </div>`;
    } else {
      contenitoreCardDue.innerHTML += `<div class="col-6 col-md-4 col-lg-2 my-5">
          <div class="card rounded-top-5">
              <img src="${secondCard[i].immagine}" 
              class="card-img-top rounded-top-5 object-fit-cover" style="aspect-ratio: 1/1";">
              <div class="card-body p-0">
              <h3 class="card-text p-2 rounded-bottom-2 text-nowrap fs-4">${secondCard[i].titolo}</h3>
              </div>
          </div>
      </div>`;
    }
  }
};
cardSetDue();
let cardSetTre = function () {
  for (let i = 0; i < lastMinute.length; i++) {
    contenitoreCardTre.innerHTML += `<div class="col-6 col-md-4 col-lg-2">
          <div class="card rounded-top-5">
              <img src="${lastMinute[i].immagine}" 
              class="card-img-top rounded-top-5 object-fit-cover" style="aspect-ratio: 1/1";">
              <div class="card-body p-0">
              <h3 class="card-text p-2 rounded-bottom-2 text-nowrap fs-4">${lastMinute[i].titolo}</h3>
              </div>
          </div>
      </div>`;
  }
};
cardSetTre();
let cardSetQuattro = function () {
  contenitoreCardQuattro.innerHTML = `<div class="carousel-item active">
    <h4 class="text-wrap ">${feedBack[0].persona}</h4>
          <p class="p-5 mx-5">${feedBack[0].commento}<p></p>
  </div>
  <div class="carousel-item">
  <h4 class="text-wrap ">${feedBack[1].persona}</h4>
          <p class="p-5 mx-5">${feedBack[1].commento}<p></p>
  </div>
  <div class="carousel-item">
  <h4 class="text-wrap ">${feedBack[2].persona}</h4>
        <p class="p-5 mx-5" >${feedBack[2].commento}<p></p>
  </div>`;
};
cardSetQuattro();
