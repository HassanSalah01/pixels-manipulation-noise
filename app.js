const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

const rand = () => {
  return Math.floor(Math.random() * 2);
};

const pixelsManipulation = () => {
  for (let i = 0; i < imageData.data.length; i += 4) {
    let value = 0;
    if (!rand()) {
      value = 255;
    }
    imageData.data[i] = value;
    imageData.data[i + 1] = value;
    imageData.data[i + 2] = value;
    imageData.data[i + 3] = 255;
  }
  ctx.putImageData(imageData, 0, 0);
  requestAnimationFrame(pixelsManipulation);
};

pixelsManipulation();
