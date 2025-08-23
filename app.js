console.log("MOO!");

const imagesArray = [
  {
    url: "./images/hobbiton-1.jpg",
    altText: "Looking over the fence at a closed red door into a hobbits home",
  },
  {
    url: "./images/hobbiton-2.jpg",
    altText: "Looking over the fence at a closed blue door into a hobbits home",
  },
  {
    url: "./images/hobbiton-3.jpg",
    altText: "Looking up the steps at a closed plain door into a hobbits home",
  },
];

function createThumbnails() {
  const thumbnailContainer = document.querySelector("#thumbnail-container");
  for (let i = 0; i < imagesArray.length; i++) {
    const thumbnail = document.createElement("img");
    thumbnail.src = imagesArray[i].url;
    thumbnail.alt = imagesArray[i].altText;
    thumbnail.classList.add("thumbnail");
    thumbnailContainer.appendChild(thumbnail);
    thumbnail.addEventListener("click", () =>
      createLargeImages(imagesArray[i])
    );
  }
}

function createLargeImages(imageID) {
  const mainImageContainer = document.querySelector("#main-image-container");
  mainImageContainer.innerHTML = null;
  const mainImage = document.createElement("img");
  mainImage.src = imageID.url;
  mainImage.alt = imageID.altText;
  mainImage.classList.add("main-image");
  mainImageContainer.appendChild(mainImage);
}
createThumbnails();
