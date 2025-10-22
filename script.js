const btn = document.getElementById("btn");
const colorText = document.getElementById("color");
const header = document.querySelector("h1");

// To Generate Random color numbers
function getRandomColor() {
  const letter = "01234789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    let randomColorNumber = letter[Math.floor(Math.random() * 6)];
    // console.log(randomColorNumber);

    color += randomColorNumber;
  }
  return color;
}

btn.addEventListener("click", () => {
  const randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
  colorText.textContent = randomColor;
  header.style.color = "white";
});
