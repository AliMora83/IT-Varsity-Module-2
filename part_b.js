let btnRandom = document.querySelector("button");
let result = document.querySelector("h1");

let categories = [
  "Best Consumer Solution",
  "Best Enterprise Solution",
  "Best African Solution",
  "Most Innovative Solution",
  "Best Gaming Solution",
  "Best Health Solution",
  "Best Agricultural Solution",
  "Best Educational Solution",
  "Best Financial Solution",
  "Best Hackathon Solution",
  "Best South African Solution",
  "Best Campus Cup Solution",
  "Huawei AppGallery Category 15",
];

function getRandomNumber(min, max) {
  let step1 = max - min + 1;
  let step2 = Math.random() * step1;
  let result = Math.floor(step2) + min;

  return result;
}

btnRandom.addEventListener("click", () => {
  let index = getRandomNumber(
    0,
    categories.length - 1
  );
  result.innerText = categories[index];
});
