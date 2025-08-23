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

//TODO I need to create my thumbnail images

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

//TODO: I need to create my large images

//this task is the event handler for the thumbnail events
function createLargeImages() {
  //handler
}
//select the image container

//delete the current image in the large image container

//largeImageContainer.innerHTML = null OR ""

//create and image

//update the src and alt values

//add a className for styling

//append image to the container

//no loop needed

//addd this event handler to the thumbnail event
//you call the createThumbnail function
