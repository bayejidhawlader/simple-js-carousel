const img = [
  "img/pic-1.jpg",
  "img/pic-2.jpg",
  "img/pic-3.jpg",
  "img/pic-4.jpg",
  "img/pic-5.jpg",
  "img/pic-6.jpg",
  "img/pic-7.jpg",
  "img/pic-8.jpg",
  "img/pic-9.jpg",
];

let imgIndex = 0;

const images = document.getElementById("carousel-img");

setInterval(() => {
  if (imgIndex === img.length) {
    imgIndex = 0;
  }
  const imgLink = img[imgIndex];
  images.setAttribute("src", imgLink);
  imgIndex++;
}, 1500);
