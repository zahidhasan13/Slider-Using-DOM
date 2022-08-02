const images = ["./img/1.jpg", "./img/2.jpg", "./img/3.jpg"];

const imgTag = document.querySelector("img");

let count = 0;

const pre = () => {
  count--;

  if (count < 0) {
    count = images.length - 1;
    imgTag.src = images[count];
  } else {
    imgTag.src = images[count];
  }
};

const next = () => {
  count++;
  
  if (count >= images.length) {
    count = 0;
    imgTag.src = images[count];
  } else {
    imgTag.src = images[count];
  }
};
