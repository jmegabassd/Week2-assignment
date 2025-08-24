console.log("MOO!");

const imagesArray = [
  {
    url: "./images/hobbiton-1.jpg",
    altText: "Looking over the fence at a closed red door into a hobbits home.",
  },
  {
    url: "./images/hobbiton-2.jpg",
    altText:
      "Looking over the fence at a closed blue door into a hobbits home.",
  },
  {
    url: "./images/hobbiton-3.jpg",
    altText: "Looking up the steps at a closed plain door into a hobbits home.",
  },
  {
    url: "./images/hobbiton-4.jpg",
    altText: "Looking up over some hobbit homes at the party tree.",
  },
  {
    url: "./images/hobbiton-5.jpg",
    altText: "Looking down a stone paved track leading out of hobbiton.",
  },
  {
    url: "./images/hobbiton-6.jpg",
    altText:
      "Looking over the garden at a hobbit home with a bright blue door.",
  },
  {
    url: "./images/hobbiton-7.jpg",
    altText:
      "A view across hobbiton lake, you can see the tavern and a bridge on the other side of the water ",
  },
  {
    url: "./images/hobbiton-8.jpg",
    altText:
      "Looking through an opened gate through a yellow door into a hobbits home, a guide is describing how the filming is done",
  },
  {
    url: "./images/hobbiton-9.jpg",
    altText:
      "Looking over a fence at a hobbits garden, this is where Bilbo met gandalf who famously said `good morning for an adventure` and initiated their conversation",
  },
];

let currentIndex = 0;

function createThumbnails() {
  const thumbnailContainer = document.querySelector("#thumbnail-container");
  for (let i = 0; i < imagesArray.length; i++) {
    const thumbnail = document.createElement("img");
    thumbnail.src = imagesArray[i].url;
    thumbnail.alt = imagesArray[i].altText;
    thumbnail.classList.add("thumbnail");
    thumbnailContainer.appendChild(thumbnail);
    thumbnail.addEventListener("click", () => {
      currentIndex = i;
      createLargeImages(imagesArray[i]);
    });
  }
}

function createLargeImages(image) {
  const mainImageContainer = document.querySelector("#main-image-container");
  mainImageContainer.innerHTML = null;
  const mainImage = document.createElement("img");
  mainImage.src = image.url;
  mainImage.alt = image.altText;
  mainImage.classList.add("main-image");
  mainImageContainer.appendChild(mainImage);
}

function displayFirstImage() {
  const mainImageContainer = document.querySelector("#main-image-container");
  const landingPageImage = document.createElement("img");
  landingPageImage.src = imagesArray[0].url;
  landingPageImage.alt = imagesArray[0].altText;
  landingPageImage.classList.add("landing-page-image");
  mainImageContainer.appendChild(landingPageImage);
}

displayFirstImage();
createThumbnails();

function btnLeft() {
  const buttonLeft = document.getElementById("#button-left");
}
function btnRight() {
  const buttonRight = document.getElementById("#button-right");
}
